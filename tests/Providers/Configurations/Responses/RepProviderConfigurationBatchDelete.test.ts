import { describe, it, expect } from "vitest";
import RepProviderConfigurationBatchDelete from "../../../../commands/Providers/Configurations/Responses/RepProviderConfigurationBatchDelete";

describe("RepProviderConfigurationBatchDelete", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderConfigurationBatchDelete();
    expect(response).toBeInstanceOf(RepProviderConfigurationBatchDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { success: true };
    const response = new RepProviderConfigurationBatchDelete(json);
    expect(response.success).toBe(true);
  });

  it("should serialize to JSON", () => {
    const json = { success: true };
    const response = new RepProviderConfigurationBatchDelete(json);
    const result = response.toJSON();
    expect(result.success).toBe(true);
  });

  it("should have the correct action", () => {
    const response = new RepProviderConfigurationBatchDelete();
    expect(response.action).toBe("batch-delete");
  });
});
