# DNS for AI Discovery (DNS-AID) Configuration

This document specifies the DNS records required to satisfy the **DNS for AI Discovery (DNS-AID)** standard (`draft-mozleywilliams-dnsop-dnsaid` / RFC 9460).

---

## ⚠️ Important Note regarding `*.vercel.app` vs Custom Domains
- The scanner tests DNS-AID via DNS-over-HTTPS (DoH) against your domain.
- If your site is hosted directly on the free subdomain `quran-kareem-ya-21.vercel.app`, the root zone `vercel.app` is controlled by Vercel infrastructure, which does not allow users to publish custom DNS resource records under `_agents.quran-kareem-ya-21.vercel.app`.
- To pass this check on production, **connect a custom domain** (e.g., `quran.yourdomain.com` or `yourdomain.com`) to your Vercel project and add the records below to that domain's DNS provider (e.g., Cloudflare, Route 53, Namecheap, GoDaddy).

---

## 1. DNS Records to Add in Your DNS Provider

Add the following **ServiceMode HTTPS / SVCB** resource records under your domain:

### A2A (Agent-to-Agent) Discovery Entrypoint
- **Name / Host:** `_a2a._agents`
- **Type:** `HTTPS` (or `SVCB`)
- **TTL:** `3600`
- **Priority:** `1`
- **Target:** `.` (or your canonical flat domain)
- **Parameters:** `alpn="h2,h3" port="443" mandatory="alpn,port"`

### Index Discovery Entrypoint
- **Name / Host:** `_index._agents`
- **Type:** `HTTPS` (or `SVCB`)
- **TTL:** `3600`
- **Priority:** `1`
- **Target:** `.` (or your canonical flat domain)
- **Parameters:** `alpn="h2,h3" port="443" mandatory="alpn,port"`

### MCP Server Discovery Entrypoint
- **Name / Host:** `_mcp._agents`
- **Type:** `HTTPS` (or `SVCB`)
- **TTL:** `3600`
- **Priority:** `1`
- **Target:** `.`
- **Parameters:** `alpn="h2,h3" port="443" mandatory="alpn,port"`

---

## 2. Standard BIND Zone Format

```dns
; DNS for AI Discovery (DNS-AID) Records
_a2a._agents.yourdomain.com.   3600 IN HTTPS 1 . alpn="h2,h3" port="443" mandatory="alpn,port"
_index._agents.yourdomain.com. 3600 IN HTTPS 1 . alpn="h2,h3" port="443" mandatory="alpn,port"
_mcp._agents.yourdomain.com.   3600 IN HTTPS 1 . alpn="h2,h3" port="443" mandatory="alpn,port"
```

---

## 3. Enable DNSSEC

1. Open your DNS provider dashboard (e.g. Cloudflare, Route 53, Namecheap).
2. Go to **DNS** > **DNSSEC**.
3. Click **Enable DNSSEC** (and copy the DS records to your registrar if prompted).
4. DNSSEC signs your public discovery zone with cryptographic RRSIG records so that AI agent validating resolvers authenticate the records against DNS spoofing.
