import { describe, it, expect } from "vitest";
import PayProviderScriptBatchDelete from "../../../../commands/Providers/Scripts/Requests/PayProviderScriptBatchDelete";

describe("PayProviderScriptBatchDelete", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderScriptBatchDelete();
    expect(payload).toBeInstanceOf(PayProviderScriptBatchDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderScriptIds: [1, 2, 3] };
    const payload = new PayProviderScriptBatchDelete(json);
    expect(payload.ProviderScriptIds).toEqual([1, 2, 3]);
  });

  it("should create a reply", () => {
    const payload = new PayProviderScriptBatchDelete();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderScriptBatchDelete");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderScriptIds: [1, 2, 3] };
    const payload = new PayProviderScriptBatchDelete(json);
    const result = payload.toJSON();
    expect(result.ProviderScriptIds).toEqual([1, 2, 3]);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderScriptBatchDelete();
    expect(payload.action).toBe("batch-delete");
  });
});
