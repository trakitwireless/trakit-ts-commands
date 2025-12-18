import { describe, it, expect } from "vitest";
import RepProviderConfigDelete from "../../../../commands/Providers/Configs/Responses/RepProviderConfigDelete";

describe("RepProviderConfigDelete", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderConfigDelete();
    expect(response).toBeInstanceOf(RepProviderConfigDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { success: true };
    const response = new RepProviderConfigDelete(json);
    expect(response.success).toBe(true);
  });

  it("should serialize to JSON", () => {
    const json = { success: true };
    const response = new RepProviderConfigDelete(json);
    const result = response.toJSON();
    expect(result.success).toBe(true);
  });

  it("should have the correct action", () => {
    const response = new RepProviderConfigDelete();
    expect(response.action).toBe("delete");
  });
});
