# AGENTS.md

## Scope

This repository is the SafeSpot frontend.

- Modify ONLY this repository.
- `../safespot-application` is read-only reference.
- Do NOT modify backend code or contracts.

---

## Objective

Prepare frontend for real API integration with:

- api-core (/api/core)
- api-public-read (/api/public)

Target: local Kubernetes test environment

---

## Responsibilities

### 1. API Integration
- Introduce centralized API client
- Separate API layer from UI components

### 2. API Prefix Rules
- `/api/core` → write/admin/auth
- `/api/public` → read-only endpoints

Do NOT mix frontend routes with backend API paths.

---

### 3. Authentication
- Store access token after login
- Attach `Authorization: Bearer <token>` automatically
- Handle 401/403 explicitly

---

### 4. Mock vs Real API
- Must support runtime switching
- Mock must NOT override real API unintentionally

---

### 5. Runtime Config
- API base URL must be configurable at runtime
- Must support local K8s / ingress environments

---

## Constraints

- No hardcoded URLs scattered across files
- No backend contract modification
- No token logging
- No breaking existing UI unless necessary

---

## Deliverables

- Build must pass
- API base path centrally managed
- Clear separation of /api/core and /api/public
- Mock/real toggle documented