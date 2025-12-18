import { describe, it, expect } from "vitest";
import PayProviderConfigBatchDelete from "../../../../commands/Providers/Configs/Requests/PayProviderConfigBatchDelete";

describe("PayProviderConfigBatchDelete", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderConfigBatchDelete();
    expect(payload).toBeInstanceOf(PayProviderConfigBatchDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderConfigIds: [1, 2, 3] };
    const payload = new PayProviderConfigBatchDelete(json);
    expect(payload.ProviderConfigIds).toEqual([1, 2, 3]);
  });

  it("should create a reply", () => {
    const payload = new PayProviderConfigBatchDelete();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderConfigBatchDelete");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderConfigIds: [1, 2, 3] };
    const payload = new PayProviderConfigBatchDelete(json);
    const result = payload.toJSON();
    expect(result.ProviderConfigIds).toEqual([1, 2, 3]);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderConfigBatchDelete();
    expect(payload.action).toBe("batch-delete");
  });
});
