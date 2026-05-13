import { describe, it, expect } from "vitest";
import PayProviderBatchDelete from "../../../../src/Providers/Providers/Requests/PayProviderBatchDelete";

describe("PayProviderBatchDelete", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderBatchDelete();
    expect(payload).toBeInstanceOf(PayProviderBatchDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderIds: [1, 2, 3] };
    const payload = new PayProviderBatchDelete(json);
    expect(payload.ProviderIds).toEqual([1, 2, 3]);
  });

  it("should create a reply", () => {
    const payload = new PayProviderBatchDelete();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderBatchDelete");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderIds: [1, 2, 3] };
    const payload = new PayProviderBatchDelete(json);
    const result = payload.toJSON();
    expect(result.ProviderIds).toEqual([1, 2, 3]);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderBatchDelete();
    expect(payload.action).toBe("batch-delete");
  });
});
