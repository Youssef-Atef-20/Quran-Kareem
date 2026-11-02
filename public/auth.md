# Quran Kareem auth.md

Welcome to Quran Kareem. This service provides free and open access to the Holy Quran text, surahs, and verses.

## Access Policy
Quran Kareem resources are publicly accessible for both human users and autonomous AI agents. No authentication or API keys are required for general read operations.

## Specifications Supported
- **OAuth 2.0 Authorization Server Metadata (RFC 8414)**: `/.well-known/oauth-authorization-server`
- **OAuth 2.0 Protected Resource Metadata (RFC 9728)**: `/.well-known/oauth-protected-resource`
- **OpenID Connect Discovery 1.0**: `/.well-known/openid-configuration`
- **Agent Auth Protocol**: WorkOS auth.md compliant

## Agent Registration
For agents supporting the WorkOS Agent Auth protocol:
- **Registration URI**: `https://quran-kareem-ya-21.vercel.app/oauth/register`
- **Supported Identity Types**: `anonymous`, `identity_assertion`
- **Supported Credential Types**: `bearer_token`, `api_key`
- **Claim URL**: `https://quran-kareem-ya-21.vercel.app/oauth/claim`
- **Revocation URL**: `https://quran-kareem-ya-21.vercel.app/oauth/revoke`

## Public Read Access
All Quranic data, surah lists, and search queries can be queried directly with no token:
```http
GET / HTTP/1.1
Host: quran-kareem-ya-21.vercel.app
Accept: text/markdown
```

Or programmatically discover resources using the API Catalog at `/.well-known/api-catalog` and ARD Manifest at `/.well-known/ai-catalog.json`.
