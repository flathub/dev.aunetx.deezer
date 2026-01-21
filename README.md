# @whooot-studio/core

Shared types, utilities, and constants for the whooot project.

## Purpose

This package provides a single source of truth for:

- Type definitions (Quiz, Session, User, etc.)
- WebSocket event constants
- Error codes and types
- Common utilities

## Usage

```typescript
import { Quiz, SessionState, WS_EVENTS, ERROR_CODES } from "@whooot-studio/core";
```

## Structure

```
core/
├── types/          # TypeScript type definitions
│   ├── quiz.ts
│   ├── session.ts
│   ├── errors.ts
│   └── auth.ts
├── constants/      # Constants (events, error codes)
│   └── events.ts
└── index.ts        # Main export
```

## Development

```bash
# Type check
npm run type-check
```
