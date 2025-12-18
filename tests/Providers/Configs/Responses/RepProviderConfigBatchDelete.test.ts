import { describe, it, expect } from "vitest";
import RepProviderConfigBatchDelete from "../../../../commands/Providers/Configs/Responses/RepProviderConfigBatchDelete";

describe("RepProviderConfigBatchDelete", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderConfigBatchDelete();
    expect(response).toBeInstanceOf(RepProviderConfigBatchDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { success: true };
    const response = new RepProviderConfigBatchDelete(json);
    expect(response.success).toBe(true);
  });

  it("should serialize to JSON", () => {
    const json = { success: true };
    const response = new RepProviderConfigBatchDelete(json);
    const result = response.toJSON();
    expect(result.success).toBe(true);
  });

  it("should have the correct action", () => {
    const response = new RepProviderConfigBatchDelete();
    expect(response.action).toBe("batch-delete");
  });
});
