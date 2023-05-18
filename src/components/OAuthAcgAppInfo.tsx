import * as React from 'react';
import classNames from 'classnames';
import FieldSet from './forms/FieldSet';
import CheckboxRadioField from './forms/CheckboxRadioField';
import TextField from './forms/TextField';

interface OAuthAcgAppInfoProps {
  acgPkceAuthUrl: string;
}

const OAuthAcgAppInfo: React.FC<OAuthAcgAppInfoProps> = ({ acgPkceAuthUrl }): JSX.Element => (
  <div className="sandbox-access-form-oauth-details">
    <h3>Authorization Code Flow</h3>
    <div className="vads-u-margin-top--4">
      Apps that cannot securely hide a client secret must use the{' '}
      <a href="https://oauth.net/2/pkce/" target="_blank" rel="noreferrer">
        PKCE
      </a>{' '}
      OAuth flow. If your app is a native or mobile app, or if it uses the same client secret for
      all users, you&apos;ll get credentials for{' '}
      <a href={acgPkceAuthUrl} target="_blank" rel="noreferrer">
        our PKCE OAuth flow
      </a>
      .
    </div>
    <FieldSet
      className={classNames('vads-u-margin-top--4', 'vads-u-padding-left--1p5')}
      legend="Can your application securely hide a client secret?"
      legendClassName="legend-label"
      name="oAuthApplicationType"
      required
    >
      <CheckboxRadioField
        type="radio"
        label="Yes"
        value="web"
        name="oAuthApplicationType"
        required
      />
      <CheckboxRadioField
        type="radio"
        label="No"
        value="native"
        name="oAuthApplicationType"
        required
      />
    </FieldSet>

    <TextField
      label="OAuth Redirect URI"
      name="oAuthRedirectURI"
      placeholder="http://localhost:8080/oauth/callback"
      required
      className={classNames(
        'vads-u-margin-top--4',
        'oauth-uri-input',
        'xsmall-screen:vads-l-col--10',
      )}
    />
  </div>
);

export { OAuthAcgAppInfo };
