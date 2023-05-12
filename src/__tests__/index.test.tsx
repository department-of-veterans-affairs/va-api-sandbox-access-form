/* eslint-disable max-nested-callbacks */
/* eslint-disable max-lines */
import { act, cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import 'jest';
import '@testing-library/jest-dom/extend-expect';
import { SandboxAccessForm } from '..';
import { makeRequest } from '../utils/makeRequest';

jest.mock('../utils/makeRequest', () => ({
  ...jest.requireActual<Record<string, string>>('../utils/makeRequest'),
  makeRequest: jest.fn(),
}));

const acgPkceAuthUrl = '/explore/authorization/docs/authorization-code#pkce-authorization';
const ccgPublicKeyUrl = '/explore/authorization/docs/client-credentials';
const termsOfServiceUrl = '/terms-of-service';
const postUrl = '/platform-backend/v0/consumers/applications';
const mockOnFailure = jest.fn();
const mockOnSuccess = jest.fn();
const mockMakeRequest = makeRequest as jest.Mock;

interface ElementProps {
  apiIdentifier: string;
  authTypes: [ 'acg' | 'ccg' | 'apikey' ];
  internalOnly: boolean;
  urls: ElementUrlProps;
}

interface ElementUrlProps {
  acgPkceAuthUrl: string;
  ccgPublicKeyUrl: string;
  postUrl: string;
  termsOfServiceUrl: string;
}

const defaultUrls: ElementUrlProps = {
  acgPkceAuthUrl,
  ccgPublicKeyUrl,
  postUrl,
  termsOfServiceUrl,
}

const renderComponent = async (props: ElementProps): Promise<void> => {
  await waitFor(() => cleanup()); // clean up beforeEach render if we're testing a different page
  const { acgPkceAuthUrl, ccgPublicKeyUrl, postUrl, termsOfServiceUrl } = props.urls;
  render(
    <SandboxAccessForm
      apiIdentifier={props.apiIdentifier}
      authTypes={props.authTypes}
      internalOnly={props.internalOnly}
      onFailure={mockOnFailure}
      onSuccess={mockOnSuccess}
      urls={{
        acgPkceAuthUrl,
        ccgPublicKeyUrl,
        postUrl,
        termsOfServiceUrl,
      }}
    />
  );
};

describe('SandboxAccessFormLegacy', () => {
  beforeAll(() => {
    mockOnFailure.mockReset();
    mockOnSuccess.mockReset();
    mockMakeRequest.mockReset();
  });

  beforeEach(async () => {
    document.querySelectorAll = jest.fn(() => [{ focus: jest.fn() }] as unknown as NodeList);
  });

  describe('ouath acg apis', () => {
    it('adds required fields and links with ACG API', async () => {
      const props: ElementProps = {
        apiIdentifier: 'lotr',
        authTypes: ['acg'],
        internalOnly: false,
        urls: defaultUrls
      }
      await renderComponent(props);

      void userEvent.type(screen.getByRole('textbox', { name: /First name/ }), 'Samwise', {
        delay: 0.01,
      });
      void userEvent.type(screen.getByRole('textbox', { name: /Last name/ }), 'Gamgee', {
        delay: 0.01,
      });
      void userEvent.type(screen.getByRole('textbox', { name: /Email/ }), 'sam@theshire.net', {
        delay: 0.01,
      });
      userEvent.click(screen.getByRole('checkbox', { name: 'I agree to the terms' }));

      setTimeout(() => {
        // setAuthType needs time to expand the ACG fields
        expect(screen.findByRole('radio', { name: 'Yes' })).toBeInTheDocument();
        expect(screen.findByRole('radio', { name: 'No' })).toBeInTheDocument();
        expect(screen.findByRole('textbox', { name: /OAuth Redirect URI/ })).toBeInTheDocument();
        expect(screen.findByRole('textbox', { hidden: true, name: 'typeAndApi' })).toBeInTheDocument();
        expect(screen.findByRole('textbox', { hidden: true, name: 'typeAndApi' })).toEqual('acg/lotr');
        expect(screen.findByText('our PKCE OAuth flow')).toHaveAttribute('href', defaultUrls.acgPkceAuthUrl);
      }, 0);
    });
  });

  describe('ouath ccg apis', () => {
    it('adds required fields and links with CCG API', async () => {
      const props: ElementProps = {
        apiIdentifier: 'lotr',
        authTypes: ['ccg'],
        internalOnly: false,
        urls: defaultUrls
      }
      await renderComponent(props);
      void userEvent.type(screen.getByRole('textbox', { name: /First name/ }), 'Samwise', {
        delay: 0.01,
      });
      void userEvent.type(screen.getByRole('textbox', { name: /Last name/ }), 'Gamgee', {
        delay: 0.01,
      });
      void userEvent.type(screen.getByRole('textbox', { name: /Email/ }), 'sam@theshire.net', {
        delay: 0.01,
      });
      userEvent.click(screen.getByRole('checkbox', { name: 'I agree to the terms' }));

      setTimeout(() => {
        expect(screen.findByRole('textbox', { name: /OAuth public key/ })).toBeInTheDocument();
        expect(screen.findByText('Learn how to generate a public key.')).toHaveAttribute('href', defaultUrls.ccgPublicKeyUrl);
      }, 0);
    });
  });

  describe('description textarea', () => {
    it('should update input on typing', async () => {
      const props: ElementProps = {
        apiIdentifier: 'lotr',
        authTypes: ['apikey'],
        internalOnly: false,
        urls: defaultUrls
      }
      await renderComponent(props);

      const descriptionTextarea: HTMLInputElement = screen.getByRole('textbox', {
        name: 'Briefly describe how your organization will use VA APIs:',
      }) as HTMLInputElement;

      void userEvent.type(descriptionTextarea, 'One Ring to rule them all');

      await waitFor(() => expect(descriptionTextarea.value).toBe('One Ring to rule them all'));
    });
  });

  describe('terms of service', () => {
    it('should toggle when clicked', async () => {
      const props: ElementProps = {
        apiIdentifier: 'lotr',
        authTypes: ['apikey'],
        internalOnly: false,
        urls: defaultUrls
      }
      await renderComponent(props);

      const tosCheckbox: HTMLInputElement = screen.getByRole('checkbox', {
        name: 'I agree to the terms',
      }) as HTMLInputElement;

      expect(tosCheckbox).toBeInTheDocument();
      expect(tosCheckbox).not.toBeChecked();

      userEvent.click(tosCheckbox);

      expect(tosCheckbox).toBeChecked();
    });

    it('should contain a link to the terms of service page', async () => {
      const props: ElementProps = {
        apiIdentifier: 'lotr',
        authTypes: ['apikey'],
        internalOnly: false,
        urls: defaultUrls
      }
      await renderComponent(props);
      const tosLink = screen.getByRole('link', { name: 'terms of service' });

      expect(tosLink).toBeInTheDocument();
      expect(tosLink.getAttribute('href')).toBe(defaultUrls.termsOfServiceUrl);
    });
  });

  describe('submit button', () => {
    beforeEach(() => {
      mockMakeRequest.mockResolvedValue({
        body: {
          clientID: 'lord-of-moria',
          token: 1234,
        },
      });
    });

    it('triggers validation when clicked', async () => {
      const props: ElementProps = {
        apiIdentifier: 'lotr',
        authTypes: ['apikey'],
        internalOnly: false,
        urls: defaultUrls
      }
      await renderComponent(props);

      expect(screen.queryByRole('button', { name: 'Sending...' })).not.toBeInTheDocument();

      void userEvent.type(screen.getByRole('textbox', { name: /First name/ }), 'Peregrin', {
        delay: 0.01,
      });
      void userEvent.type(screen.getByRole('textbox', { name: /Last name/ }), 'Took', {
        delay: 0.01,
      });

      void userEvent.type(screen.getByRole('textbox', { name: /Email/ }), 'pippin@theshire', {
        delay: 0.01,
      });

      userEvent.click(screen.getByRole('checkbox', { name: 'I agree to the terms' }));
      act(() => {
        userEvent.click(screen.getByRole('button', { name: 'Submit' }));
      });

      expect(await screen.findByText('Enter a valid email address.')).toBeInTheDocument();
    });

    it('validates oauth fields when clicked', async () => {
      const props: ElementProps = {
        apiIdentifier: 'lotr',
        authTypes: ['apikey'],
        internalOnly: false,
        urls: defaultUrls
      }
      await renderComponent(props);

      void userEvent.type(screen.getByRole('textbox', { name: /First name/ }), 'Peregrin', {
        delay: 0.01,
      });
      void userEvent.type(screen.getByRole('textbox', { name: /Last name/ }), 'Took', {
        delay: 0.01,
      });

      void userEvent.type(screen.getByRole('textbox', { name: /Email/ }), 'pippin@theshire.com', {
        delay: 0.01,
      });

      userEvent.click(screen.getByRole('checkbox', { name: 'I agree to the terms' }));
      act(() => {
        userEvent.click(screen.getByRole('button', { name: 'Submit' }));
      });

      setTimeout(() => {
        expect(screen.findByText('Choose an option.')).toBeInTheDocument();
        expect(screen.findByText('Enter an http or https URI.')).toBeInTheDocument();
      }, 0);
    });

    it('validates internal api fields when selected', async () => {
      const props: ElementProps = {
        apiIdentifier: 'lotr',
        authTypes: ['apikey'],
        internalOnly: true,
        urls: defaultUrls
      }
      await renderComponent(props);

      void userEvent.type(screen.getByRole('textbox', { name: /First name/ }), 'Peregrin', {
        delay: 0.01,
      });
      void userEvent.type(screen.getByRole('textbox', { name: /Last name/ }), 'Took', {
        delay: 0.01,
      });

      void userEvent.type(screen.getByRole('textbox', { name: /Email/ }), 'pippin@theshire.com', {
        delay: 0.01,
      });

      userEvent.click(screen.getByRole('checkbox', { name: 'I agree to the terms' }));
      act(() => {
        userEvent.click(screen.getByRole('button', { name: 'Submit' }));
      });

      setTimeout(() => {
        expect(screen.findByText('Enter your program name.')).toBeInTheDocument();
        expect(screen.findAllByText('Enter a valid VA-issued email address.')).toHaveLength(2);
      }, 0);
    });

    it('validates internal api fields when clicked and does not ask for VA email if a VA email exists in the dev info email field', async () => {
      const props: ElementProps = {
        apiIdentifier: 'lotr',
        authTypes: ['apikey'],
        internalOnly: true,
        urls: defaultUrls
      }
      await renderComponent(props);

      void userEvent.type(screen.getByRole('textbox', { name: /First name/ }), 'Peregrin', {
        delay: 0.01,
      });
      void userEvent.type(screen.getByRole('textbox', { name: /Last name/ }), 'Took', {
        delay: 0.01,
      });

      void userEvent
        .type(screen.getByRole('textbox', { name: /Email/ }), 'pippin@va.gov', {
          delay: 0.01,
        })
        .then(() => {
          userEvent.click(screen.getByRole('checkbox', { name: 'I agree to the terms' }));
          act(() => {
            userEvent.click(screen.getByRole('button', { name: 'Submit' }));
          });

          expect(screen.findByText('Enter your program name.')).toBeInTheDocument();
          expect(screen.findByText('Enter a valid VA-issued email address.')).toBeInTheDocument();
          expect(screen.queryByLabelText('Your VA issued email')).not.toBeInTheDocument();

          return true;
        });
    });

    it('internal api sponsor email should end with va.gov', async () => {
      const props: ElementProps = {
        apiIdentifier: 'lotr',
        authTypes: ['apikey'],
        internalOnly: true,
        urls: defaultUrls
      }
      await renderComponent(props);

      void userEvent.type(screen.getByRole('textbox', { name: /First name/ }), 'Peregrin', {
        delay: 0.01,
      });
      void userEvent.type(screen.getByRole('textbox', { name: /Last name/ }), 'Took', {
        delay: 0.01,
      });

      void userEvent.type(screen.getByRole('textbox', { name: /Email/ }), 'pippin@theshire.net', {
        delay: 0.01,
      });

      setTimeout(() => {
        void userEvent.type(
          screen.getByRole('textbox', { name: /sponsor email/ }),
          'frodo.baggins@theshire.net',
          {
            delay: 0.01,
          },
        );
        void userEvent.type(
          screen.getByRole('textbox', { name: /VA issued email/ }),
          'samwise@theshire.net',
          {
            delay: 0.01,
          },
        );
      }, 0);
      userEvent.click(screen.getByRole('checkbox', { name: 'I agree to the terms' }));
      act(() => {
        userEvent.click(screen.getByRole('button', { name: 'Submit' }));
      });

      setTimeout(() => {
        expect(screen.findByText(/Enter your program name/)).toBeInTheDocument();
        expect(screen.findAllByText('Enter a valid VA-issued email address.')).toHaveLength(2);
      }, 0);
    });

    it('displays `Sending...` during form submission', async () => {
      const props: ElementProps = {
        apiIdentifier: 'lotr',
        authTypes: ['apikey'],
        internalOnly: true,
        urls: defaultUrls
      }
      await renderComponent(props);

      expect(screen.queryByRole('button', { name: 'Sending...' })).not.toBeInTheDocument();

      void userEvent.type(screen.getByRole('textbox', { name: /First name/ }), 'Peregrin', {
        delay: 0.01,
      });
      void userEvent.type(screen.getByRole('textbox', { name: /Last name/ }), 'Took', {
        delay: 0.01,
      });
      void userEvent.type(screen.getByRole('textbox', { name: /Email/ }), 'pippin@theshire.net', {
        delay: 0.01,
      });
      userEvent.click(screen.getByRole('checkbox', { name: 'I agree to the terms' }));
      act(() => {
        userEvent.click(screen.getByRole('button', { name: 'Submit' }));
      });

      expect(await screen.findByRole('button', { name: 'Sending...' })).toBeInTheDocument();
    });

    it('submits the form when all required fields are filled', async () => {
      const props: ElementProps = {
        apiIdentifier: 'lotr',
        authTypes: ['apikey'],
        internalOnly: true,
        urls: defaultUrls
      }
      await renderComponent(props);

      void userEvent.type(screen.getByRole('textbox', { name: /First name/ }), 'Meriadoc', {
        delay: 0.01,
      });
      void userEvent.type(screen.getByRole('textbox', { name: /Last name/ }), 'Brandybuck', {
        delay: 0.01,
      });
      void userEvent.type(screen.getByRole('textbox', { name: /Email/ }), 'pippin@theshire.net', {
        delay: 0.01,
      });
      userEvent.click(screen.getByRole('checkbox', { name: 'I agree to the terms' }));

      act(() => {
        userEvent.click(screen.getByRole('button', { name: 'Submit' }));
      });

      setTimeout(() => {
        expect(mockMakeRequest).toHaveBeenCalledTimes(1);
      }, 0);
    });
  });

  describe('error message', () => {
    beforeEach(() => {
      mockMakeRequest.mockRejectedValue(new Error('bad time'));
    });

    it('displays an error on form submission error', async () => {
      const props: ElementProps = {
        apiIdentifier: 'lotr',
        authTypes: ['apikey'],
        internalOnly: true,
        urls: defaultUrls
      }
      await renderComponent(props);

      expect(
        screen.queryByRole('heading', {
          name: 'We encountered a server error while saving your form. Please try again later.',
        }),
      ).not.toBeInTheDocument();

      void userEvent.type(screen.getByRole('textbox', { name: /First name/ }), 'Meriadoc', {
        delay: 0.01,
      });
      void userEvent.type(screen.getByRole('textbox', { name: /Last name/ }), 'Brandybuck', {
        delay: 0.01,
      });
      void userEvent.type(screen.getByRole('textbox', { name: /Email/ }), 'merry@theshire.net', {
        delay: 0.01,
      });
      userEvent.click(screen.getByRole('checkbox', { name: 'I agree to the terms' }));

      act(() => {
        userEvent.click(screen.getByRole('button', { name: 'Submit' }));
      });
      setTimeout(() => {
        expect(
          screen.findByRole('heading', {
            name: 'We encountered a server error while saving your form. Please try again later.',
          }),
        ).toBeInTheDocument();
      }, 0);
    });

    it('contains a link to the support page', async () => {
      const props: ElementProps = {
        apiIdentifier: 'lotr',
        authTypes: ['apikey'],
        internalOnly: true,
        urls: defaultUrls
      }
      await renderComponent(props);

      void userEvent.type(screen.getByRole('textbox', { name: /First name/ }), 'Meriadoc', {
        delay: 0.01,
      });
      void userEvent.type(screen.getByRole('textbox', { name: /Last name/ }), 'Brandybuck', {
        delay: 0.01,
      });
      void userEvent.type(screen.getByRole('textbox', { name: /Email/ }), 'merry@theshire.net', {
        delay: 0.01,
      });
      userEvent.click(screen.getByRole('checkbox', { name: 'I agree to the terms' }));

      userEvent.click(screen.getByRole('button', { name: 'Submit' }));

      setTimeout(() => {
        const supportLink = screen.findByRole('link', { name: 'Support page' });

        expect(supportLink).toBeInTheDocument();
      }, 0);
    });
  });

  // describe('SelectedApis', () => {
  //   describe('Standard APIs', () => {
  //     it.each(allKeyAuthApis)('toggles the %s checkbox on click', name => {
  //       const checkbox: HTMLInputElement = screen.getByRole('checkbox', {
  //         name,
  //       }) as HTMLInputElement;
  //       expect(checkbox.checked).toBeFalsy();

  //       userEvent.click(checkbox);

  //       expect(checkbox.checked).toBeTruthy();
  //     });
  //   });

  //   describe('OAuth APIs', () => {
  //     it.each(allOauthApis)('toggles the %s checkbox on click', name => {
  //       const checkboxes: HTMLElement[] = screen.getAllByRole('checkbox', {
  //         name,
  //       });
  //       checkboxes.forEach((checkbox: HTMLInputElement) => {
  //         expect(checkbox.checked).toBeFalsy();

  //         userEvent.click(checkbox);

  //         expect(checkbox.checked).toBeTruthy();
  //       });
  //     });
  //   });
  // });
});
