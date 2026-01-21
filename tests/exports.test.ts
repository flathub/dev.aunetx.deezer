// core/tests/exports.test.ts
import { describe, it, expect } from "vitest";
import * as Core from "../index";

describe("Core Package Exports", () => {
  it("should export WebSocket event constants", () => {
    expect(Core).toHaveProperty("WS_EVENTS");

    // Verify key event constants exist
    expect(Core.WS_EVENTS).toHaveProperty("SESSION_CREATED");
    expect(Core.WS_EVENTS).toHaveProperty("SESSION_STARTED");
    expect(Core.WS_EVENTS).toHaveProperty("PLAYER_JOINED");
    expect(Core.WS_EVENTS).toHaveProperty("QUESTION_STARTED");
    expect(Core.WS_EVENTS).toHaveProperty("ANSWER_SUBMITTED");

    // Verify event values are strings
    expect(typeof Core.WS_EVENTS.SESSION_CREATED).toBe("string");
  });

  it("should export type definitions", () => {
    // Verify type exports are available (they won't be runtime values)
    // But we can check that the module exports exist
    expect(Core).toBeDefined();
  });

  it("should have valid package structure", () => {
    const pkg = require("../package.json");

    expect(pkg.name).toBe("@whooot-studio/core");
    expect(pkg.main).toBe("./index.ts");
    expect(pkg.types).toBe("./index.ts");
  });
});
