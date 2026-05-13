import { describe, it, expect } from "vitest";
import RepProviderDelete from "../../../../src/Providers/Providers/Responses/RepProviderDelete";

describe("RepProviderDelete", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderDelete();
    expect(response).toBeInstanceOf(RepProviderDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { success: true };
    const response = new RepProviderDelete(json);
    expect(response.success).toBe(true);
  });

  it("should serialize to JSON", () => {
    const json = { success: true };
    const response = new RepProviderDelete(json);
    const result = response.toJSON();
    expect(result.success).toBe(true);
  });

  it("should have the correct action", () => {
    const response = new RepProviderDelete();
    expect(response.action).toBe("delete");
  });
});
