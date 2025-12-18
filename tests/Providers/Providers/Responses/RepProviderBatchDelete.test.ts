import { describe, it, expect } from "vitest";
import RepProviderBatchDelete from "../../../../commands/Providers/Providers/Responses/RepProviderBatchDelete";

describe("RepProviderBatchDelete", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderBatchDelete();
    expect(response).toBeInstanceOf(RepProviderBatchDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { success: true };
    const response = new RepProviderBatchDelete(json);
    expect(response.success).toBe(true);
  });

  it("should serialize to JSON", () => {
    const json = { success: true };
    const response = new RepProviderBatchDelete(json);
    const result = response.toJSON();
    expect(result.success).toBe(true);
  });

  it("should have the correct action", () => {
    const response = new RepProviderBatchDelete();
    expect(response.action).toBe("batch-delete");
  });
});
