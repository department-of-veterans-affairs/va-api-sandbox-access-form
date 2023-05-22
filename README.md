# Sandbox Access Form

```
<SandboxAccessForm
  apiIdentifier="" // apiRef
  authTypes={[]} // ['apikey' | 'acg' | 'ccg']
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