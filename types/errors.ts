// Error type definitions

export interface ApiError {
  statusCode: number; // HTTP status or semantic code
  code: string; // Machine-readable identifier
  message: string; // Human-readable description
  details?: Record<string, any>; // Optional context
}

export const ERROR_CODES = {
  // 4xx Client Errors
  QUIZ_NOT_FOUND: "QUIZ_NOT_FOUND",
  SESSION_NOT_FOUND: "SESSION_NOT_FOUND",
  INVALID_ROOM_CODE: "INVALID_ROOM_CODE",
  UNAUTHORIZED: "UNAUTHORIZED",
  FORBIDDEN: "FORBIDDEN",
  INVALID_NICKNAME: "INVALID_NICKNAME",
  DUPLICATE_NICKNAME: "DUPLICATE_NICKNAME",
  INVALID_ANSWER: "INVALID_ANSWER",
  SESSION_FULL: "SESSION_FULL",
  SESSION_ENDED: "SESSION_ENDED",

  // Ghost Mode specific
  GHOST_MODE_ENCRYPTION_REQUIRED: "GHOST_MODE_ENCRYPTION_REQUIRED",
  GHOST_MODE_INVALID_KEY: "GHOST_MODE_INVALID_KEY",

  // 5xx Server Errors
  INTERNAL_ERROR: "INTERNAL_ERROR",
  DATABASE_ERROR: "DATABASE_ERROR",
  REDIS_ERROR: "REDIS_ERROR",
  WEBSOCKET_ERROR: "WEBSOCKET_ERROR",
} as const;

export type ErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];
