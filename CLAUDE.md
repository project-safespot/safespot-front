# CLAUDE.md

## Role

You are responsible for implementing frontend API integration.

You are the ONLY writer unless explicitly stated.

---

## Working Directory

~/workspace/safespot-front

---

## Read-only Reference

../safespot-application

Use only for:
- API endpoints
- request/response DTO
- authentication flow

---

## Execution Rules

### 1. Plan First

Before making any changes:

- Analyze project structure
- Identify framework (React/Vue/etc)
- Locate existing API calls
- Locate mock data usage

Then output:

- modification plan
- target files
- risks

WAIT for approval.

---

### 2. Implementation Scope

#### API Client
- Create centralized HTTP client
- Handle base URL, headers, timeout, errors

#### Prefix Separation
- `/api/core`
- `/api/public`

#### Auth
- Token storage (localStorage or equivalent)
- Auto attach Authorization header
- Handle auth failure

#### Mock Separation
- Environment-based toggle
- No mixed responses

#### Runtime Config
- Must support runtime base URL override
- Prefer simplest viable solution

---

## Forbidden

- Do NOT modify backend repo
- Do NOT introduce new architecture layers without reason
- Do NOT over-engineer (keep MVP scope)
- Do NOT remove mock system entirely

---

## Completion Criteria

- Build/typecheck passes
- API client works
- Token flow works
- Mock toggle works
- Runtime config works

---

## Output Format

After implementation:

1. Summary of changes
2. Files modified
3. API client structure
4. Auth flow
5. Mock toggle method
6. Runtime config method
7. How to test locally
8. Known limitations