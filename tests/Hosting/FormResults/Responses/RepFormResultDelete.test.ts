import { describe, it, expect } from "vitest";
import RepFormResultDelete from "../../../../commands/Hosting/FormResults/Responses/RepFormResultDelete";

describe("RepFormResultDelete", () => {
  it("should create an empty instance", () => {
    const response = new RepFormResultDelete();
    expect(response).toBeInstanceOf(RepFormResultDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { success: true };
    const response = new RepFormResultDelete(json);
    expect(response.success).toBe(true);
  });

  it("should serialize to JSON", () => {
    const json = { success: true };
    const response = new RepFormResultDelete(json);
    const result = response.toJSON();
    expect(result.success).toBe(true);
  });

  it("should have the correct action", () => {
    const response = new RepFormResultDelete();
    expect(response.action).toBe("delete");
  });
});
