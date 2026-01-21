// Quiz-related type definitions

export interface Quiz {
  id: string;
  title: string;
  description?: string;
  teacherId: string;
  questions: Question[];
  createdAt: string; // ISO 8601
  updatedAt: string; // ISO 8601
}

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  propositions: Proposition[];
  correctAnswerIndices: number[]; // Support multiple correct answers
  timeLimit?: number; // seconds
  settings: QuestionSettings;
}

export type QuestionType =
  | "mcq" // Multiple choice (single answer)
  | "multi-answer" // Multiple choice (multiple answers)
  | "true-false" // Binary question
  | "open-ended" // Text input
  | "word-cloud" // Word cloud/grid display
  | "poll"; // Poll (no correct answer)

export interface Proposition {
  id: string;
  text: string;
  order: number;
}

export interface QuestionSettings {
  answerCount: number;
  displayMode: "standard" | "grid" | "list";
  allowMultipleAnswers: boolean;
  showCorrectAnswer: boolean;
}

export interface CompetitivenessSettings {
  pointsPerCorrectAnswer: number;
  timeBonusEnabled: boolean;
  timeBonusMultiplier: number;
  streakMultiplierEnabled: boolean;
  streakMultiplier: number;
}
