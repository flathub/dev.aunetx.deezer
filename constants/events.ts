// WebSocket event constants

export const WS_EVENTS = {
  // Session lifecycle
  SESSION_CREATED: "session:created",
  SESSION_STARTED: "session:started",
  SESSION_ENDED: "session:ended",
  SESSION_PAUSED: "session:paused",

  // Player events
  PLAYER_JOINED: "player:joined",
  PLAYER_LEFT: "player:left",
  PLAYER_RECONNECTED: "player:reconnected",

  // Question events
  QUESTION_STARTED: "question:started",
  QUESTION_ENDED: "question:ended",
  ANSWER_SUBMITTED: "answer:submitted",
  SCORES_UPDATED: "scores:updated",

  // Ghost Mode specific
  GHOST_ENCRYPTED_PAYLOAD: "ghost:encrypted",
  GHOST_KEY_EXCHANGE: "ghost:key",

  // Error events
  ERROR_OCCURRED: "error:occurred",
} as const;

export type WebSocketEvent = (typeof WS_EVENTS)[keyof typeof WS_EVENTS];

// WebSocket message envelope
export interface WebSocketMessage<T = any> {
  type: string; // Event name from WS_EVENTS
  data: T | null; // Payload (null on error)
  error: import("../types/errors.js").ApiError | null; // Error (null on success)
}
