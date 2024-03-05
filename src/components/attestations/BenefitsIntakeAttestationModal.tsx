import React, { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';
import { VaModal } from '@department-of-veterans-affairs/component-library/dist/react-bindings';
import CheckboxRadioField from '../forms/CheckboxRadioField';
import { Values } from '../../index';

export const BenefitsIntakeAttestationModal = () => {
  const [showBenefitsIntakeAttestation, setShowBenefitsIntakeAttestation] = useState(false);
  const { errors, isSubmitting, values } = useFormikContext<Values>();

  useEffect(() => {
    if (
      values.typeAndApi === 'apikey/benefits' &&
      errors.benefitsIntakeAttestation &&
      !values.benefitsIntakeAttestation &&
      values.termsOfService &&
      isSubmitting
    ) {
      setShowBenefitsIntakeAttestation(true);
    }
  }, [errors.benefitsIntakeAttestation, isSubmitting]);

  return (
    <VaModal
      clickToClose
      id="benefits-intake-attestation-modal"
      large
      modalTitle="Requirements for the Benefits Intake API"
      onCloseEvent={(): void => setShowBenefitsIntakeAttestation(false)}
      visible={showBenefitsIntakeAttestation}
      primaryButtonText="Confirm"
      onPrimaryButtonClick={(): void => setShowBenefitsIntakeAttestation(false)}
      secondaryButtonText="Cancel"
      onSecondaryButtonClick={(): void => setShowBenefitsIntakeAttestation(false)}
      uswds
    >
      <p>
        By accessing or using the <span className="vads-u-font-weight--bold">Benefits Intake API</span> in the
        production environment provided by VA, you must affirm and attest that the end user of your application is:
      </p>
      <ol>
        <li>A VA benefits claimant;</li>
        <li>An individual accredited by VA to prepare, present, and prosecute VA benefits claims;</li>
        <li>
          An accredited representative of a Veteran Service Organization (VSO) recognized by VA to represent VA benefits
          claimants; or
        </li>
        <li>
          A person authorized by the VA secretary to prepare, present, and prosecute a VA benefits claim pursuant to 38
          C.F.R. § 14.630.
        </li>
      </ol>
      <p>
        You must agree that this API will not be accessed by individuals or entities who do not meet the specified
        criteria above, and to limit your application&apos;s scope as authorized and defined by VA. Any expansion of
        your application&apos;s scope requires prior approval from VA.
      </p>
      <p>
        Violation of these terms may result in revocation of API access and possible legal action. In addition, a
        willfully false statement or certification is a criminal offense and is punishable by law. See 18 U.S.C. § 1001.
      </p>
      <CheckboxRadioField
        className="vads-u-margin-x--2p5"
        type="checkbox"
        label="I attest that I have read, understood, and agree to the terms above."
        name="benefitsIntakeApiAttestation"
        required
        showError
      />
    </VaModal>
  );
};
