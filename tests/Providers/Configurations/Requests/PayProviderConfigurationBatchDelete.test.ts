import { describe, it, expect } from "vitest";
import PayProviderConfigurationBatchDelete from "../../../../src/Providers/Configurations/Requests/PayProviderConfigurationBatchDelete";

describe("PayProviderConfigurationBatchDelete", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderConfigurationBatchDelete();
    expect(payload).toBeInstanceOf(PayProviderConfigurationBatchDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderConfigurationIds: [1, 2, 3] };
    const payload = new PayProviderConfigurationBatchDelete(json);
    expect(payload.ProviderConfigurationIds).toEqual([1, 2, 3]);
  });

  it("should create a reply", () => {
    const payload = new PayProviderConfigurationBatchDelete();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderConfigurationBatchDelete");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderConfigurationIds: [1, 2, 3] };
    const payload = new PayProviderConfigurationBatchDelete(json);
    const result = payload.toJSON();
    expect(result.ProviderConfigurationIds).toEqual([1, 2, 3]);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderConfigurationBatchDelete();
    expect(payload.action).toBe("batch-delete");
  });
});
