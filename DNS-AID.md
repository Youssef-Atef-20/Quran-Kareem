# DNS for AI Discovery (DNS-AID) Configuration

This document specifies the DNS records required to satisfy the **DNS for AI Discovery (DNS-AID)** standard (`draft-mozleywilliams-dnsop-dnsaid` / RFC 9460) for `quran-kareem-ya-21.vercel.app` (or your custom domain).

---

## 1. DNS Records to Add in Your DNS Provider

Add the following **ServiceMode HTTPS / SVCB** resource records under your domain:

### Index Discovery Entrypoint
- **Name / Host:** `_index._agents` (or `_index._agents.your-domain.com.`)
- **Type:** `HTTPS` (or `SVCB`)
- **Priority:** `1`
- **Target:** `.` (indicates the current domain)
- **Parameters:** `alpn="h2,h3" port="443"`

### MCP Server Discovery Entrypoint
- **Name / Host:** `_mcp._agents`
- **Type:** `HTTPS` (or `SVCB`)
- **Priority:** `1`
- **Target:** `.`
- **Parameters:** `alpn="h2,h3" port="443"`

### Agent-to-Agent (A2A) Discovery Entrypoint
- **Name / Host:** `_a2a._agents`
- **Type:** `HTTPS` (or `SVCB`)
- **Priority:** `1`
- **Target:** `.`
- **Parameters:** `alpn="h2,h3" port="443"`

---

## 2. Standard BIND Zone File Format

If managing your DNS via BIND or exporting zone files:

```dns
; DNS for AI Discovery (DNS-AID) Records
_index._agents.quran-kareem-ya-21.vercel.app. IN HTTPS 1 . alpn="h2,h3" port="443"
_mcp._agents.quran-kareem-ya-21.vercel.app.   IN HTTPS 1 . alpn="h2,h3" port="443"
_a2a._agents.quran-kareem-ya-21.vercel.app.   IN HTTPS 1 . alpn="h2,h3" port="443"
```

---

## 3. Cloudflare / Provider Setup Instructions

1. Log in to your DNS provider (e.g., Cloudflare, Route 53, Namecheap, Vercel).
2. Go to **DNS Management** > **Add record**.
3. Select **HTTPS** (or **SVCB**) as the record type.
4. Set Name to `_index._agents`.
5. Set Priority to `1`, Target to `.`, and Value/Params to `alpn="h2,h3" port="443"`.
6. Enable **DNSSEC** in your DNS registrar/provider dashboard to ensure validating resolvers return authenticated and tamper-proof agent discovery data.

