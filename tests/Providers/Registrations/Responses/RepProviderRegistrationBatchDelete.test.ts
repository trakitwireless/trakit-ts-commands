import { describe, it, expect } from "vitest";
import RepProviderRegistrationBatchDelete from "../../../../src/Providers/Registrations/Responses/RepProviderRegistrationBatchDelete";

describe("RepProviderRegistrationBatchDelete", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderRegistrationBatchDelete();
    expect(response).toBeInstanceOf(RepProviderRegistrationBatchDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { success: true };
    const response = new RepProviderRegistrationBatchDelete(json);
    expect(response.success).toBe(true);
  });

  it("should serialize to JSON", () => {
    const json = { success: true };
    const response = new RepProviderRegistrationBatchDelete(json);
    const result = response.toJSON();
    expect(result.success).toBe(true);
  });

  it("should have the correct action", () => {
    const response = new RepProviderRegistrationBatchDelete();
    expect(response.action).toBe("batch-delete");
  });
});
