// Session and game state type definitions

export interface SessionState {
  id: string;
  quizId: string;
  mode: SessionMode;
  roomCode: string;
  status: SessionStatus;
  currentQuestionIndex: number;
  players: PlayerState[];
  createdAt: string; // ISO 8601
  startedAt?: string; // ISO 8601
  endedAt?: string; // ISO 8601
}

export type SessionMode = "ghost" | "monitored";

export type SessionStatus = "waiting" | "active" | "paused" | "ended";

export interface PlayerState {
  sessionToken: string;
  nickname: string;
  connectionId: string;
  score: number;
  answers: PlayerAnswer[];
  joinedAt: number; // timestamp
  lastSeen: number; // timestamp
  isActive: boolean;
}

export interface PlayerAnswer {
  questionId: string;
  selectedIndices: number[];
  submittedAt: number; // timestamp
  isCorrect: boolean;
  pointsEarned: number;
}

export interface SessionRetentionSettings {
  retentionDays: 30 | 60 | 90 | 180 | "indefinite";
  autoDeleteEnabled: boolean;
  deleteAt?: string; // ISO 8601
}
