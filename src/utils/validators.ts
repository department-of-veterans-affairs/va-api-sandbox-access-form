const EMAIL_PATTERN =
  /^[a-zA-Z0-9._-]+@(?!((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.[a-zA-Z]{2,6}))([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;
const PRESENCE_PATTERN = /^(?!\s*$).+/;
const PARTIAL_URL_PATTERN = /^http[s]?:[/][/][^/:?#]+(:[0-9]+)?([/][^?#]*)?$/;

export const validatePresence = (fieldName: string, value: string): string | undefined => {
  if (!PRESENCE_PATTERN.test(value)) {
    return `Enter your ${fieldName}.`;
  }

  return undefined;
};

export const validateOAuthApplicationType = (value: string): string | undefined => {
  if (!PRESENCE_PATTERN.test(value)) {
    return 'Choose an option.';
  }

  return undefined;
};

export const validateEmail = (value: string): string | undefined => {
  if (!EMAIL_PATTERN.test(value)) {
    return 'Enter a valid email address.';
  }

  return undefined;
};

export const validateOAuthRedirectURI = (value: string): string | undefined => {
  if (!PARTIAL_URL_PATTERN.test(value)) {
    return 'Enter an http or https URI.';
  }

  return undefined;
};

export const validateOAuthPublicKey = (value: string): string | undefined => {
  try {
    const jwk = JSON.parse(value) as {
      [key: string]: string;
    };

    if (!jwk.kty || !jwk.n || !jwk.e || jwk.kty !== 'RSA') {
      return 'Please enter a valid RSA-generated key in JSON Web Key format.';
    }

    return undefined;
  } catch (e: unknown) {
    return 'Please enter a valid RSA-generated key in JSON Web Key format.';
  }
};
