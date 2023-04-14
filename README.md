# Sandbox Access Form

```
npm install git+ssh://git@github.com:department-of-veterans-affairs/va-api-sandbox-signup-form.git
```

```
<SandboxAccessForm
  apiIdentifier="" // apiRef
  authTypes={[]} // ['apikey' | 'acg' | 'ccg']
  internalOnly={false} // boolean
  onFailure={mockOnFailure} // failure on network request callback (form validation is client side)
  onSuccess={mockOnSuccess} // successful signup (interface DevApplicationResponse)
  urls={{
    acgPkceAuthUrl: '', // Documentation url for PKCE Auth
    ccgPublicKeyUrl: '', // Documentation url for CCG token generation
    postUrl: '', // Post url for submitting form
    termsOfServiceUrl: '', // Terms of Service url
  }}
/>
```