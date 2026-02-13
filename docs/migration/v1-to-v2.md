# API v1 to v2 Migration Guide

## Overview
API v1 will be sunset on **April 1, 2026**. This guide helps you migrate to v2.

## Breaking Changes

### 1. Response Envelope
**v1 (flat):**
```json
{ "id": "123", "name": "Widget" }
```

**v2 (envelope):**
```json
{ "data": { "id": "123", "name": "Widget" }, "meta": { "api_version": "v2" } }
```

### 2. Pagination
**v1:** Offset-based (`?page=2&per_page=20`)
**v2:** Cursor-based (`?cursor=abc123&limit=20`)

### 3. Authentication
**v1:** API key in query param (`?api_key=xxx`)
**v2:** Bearer token in header (`Authorization: Bearer xxx`)

### 4. Date Format
**v1:** Unix timestamps (`1706745600`)
**v2:** ISO 8601 (`2026-01-31T12:00:00Z`)

## Timeline
- **Now:** v2 available alongside v1
- **March 1, 2026:** v1 returns deprecation warnings
- **April 1, 2026:** v1 sunset
