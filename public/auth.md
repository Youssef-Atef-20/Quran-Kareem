# Quran Kareem auth.md

Welcome to Quran Kareem. This document specifies the authentication, registration, and discovery instructions for AI agents and automated clients according to the WorkOS Auth.md protocol.

## Access Policy
Quran Kareem resources are publicly and openly accessible for both human users and autonomous AI agents. No tokens, paid registrations, or API keys are required for general read operations.

## Machine-Readable Discovery
- **OAuth 2.0 Authorization Server Metadata (RFC 8414)**: `/.well-known/oauth-authorization-server`
- **OAuth 2.0 Protected Resource Metadata (RFC 9728)**: `/.well-known/oauth-protected-resource`
- **OpenID Connect Discovery 1.0**: `/.well-known/openid-configuration`
- **API Catalog (RFC 9727)**: `/.well-known/api-catalog`
- **ARD Capability Catalog**: `/.well-known/ai-catalog.json`

## Agent Auth & Registration Specification
For autonomous agents integrating via the WorkOS Agent Auth standard, discovery is advertised in `/.well-known/oauth-authorization-server` under the `agent_auth` block:

- **Skill URI**: `https://quran-kareem-ya-21.vercel.app/auth.md`
- **Registration URI (`register_uri`)**: `https://quran-kareem-ya-21.vercel.app/oauth/register`
- **Identity Endpoint (`identity_endpoint`)**: `https://quran-kareem-ya-21.vercel.app/oauth/identity`
- **Supported Identity Types (`identity_types_supported`)**:
  - `anonymous` (for instant zero-configuration agent probing and public querying)
  - `identity_assertion` (for ID-JAG token exchange or verified email assertion)
- **Supported Assertion Types**:
  - `urn:ietf:params:oauth:token-type:id-jag`
  - `verified_email`
- **Supported Credential Types**:
  - `bearer_token`
  - `api_key`
- **Claim URI (`claim_uri`)**: `https://quran-kareem-ya-21.vercel.app/oauth/claim`
- **Revocation URI (`revocation_uri`)**: `https://quran-kareem-ya-21.vercel.app/oauth/revoke`

## Public Read Operations
All Quranic text, surah indexes, and verse search operations can be accessed directly without an access token:

```http
GET / HTTP/1.1
Host: quran-kareem-ya-21.vercel.app
Accept: text/markdown
```

Or programmatically fetch individual surahs:
```http
GET /surah/{id} HTTP/1.1
Host: quran-kareem-ya-21.vercel.app
```
(where `{id}` is between 1 and 114).
