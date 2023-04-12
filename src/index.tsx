/* eslint-disable no-console */
import React, { FC } from 'react';

interface SandboxAccessFormProps {
  apiIdentifier: string;
  authTypes: string[];
  onSuccess: (results: unknown) => void;
  urls: {
    acgPkceAuthUrl: string;
    ccgPublicKeyUrl: string;
    postUrl: string;
    termsOfServiceUrl: string;
  };
}

const SandboxAccessForm: FC<SandboxAccessFormProps> = ({
  apiIdentifier,
  authTypes,
  onSuccess,
  urls,
}) => {
  console.log(authTypes, onSuccess, urls);
  return (
    <h1>Form for {apiIdentifier}</h1>
  );
};

export { SandboxAccessForm };
