import { describe, it, expect } from "bun:test";

describe("always passing test", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });
});
