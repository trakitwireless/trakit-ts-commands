import { describe, it, expect } from "vitest";
import PayProviderScriptBatchMerge from "../../../../src/Providers/Scripts/Requests/PayProviderScriptBatchMerge";
import { ProviderScript } from "@trakit/objects";

describe("PayProviderScriptBatchMerge", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderScriptBatchMerge();
    expect(payload).toBeInstanceOf(PayProviderScriptBatchMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderScripts: [{ ProviderScriptId: 1 }, { ProviderScriptId: 2 }] };
    const payload = new PayProviderScriptBatchMerge(json);
    expect(payload.ProviderScripts).toHaveLength(2);
    expect(payload.ProviderScripts?.[0]).toBeInstanceOf(ProviderScript);
    expect(payload.ProviderScripts?.[0]?.ProviderScriptId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderScriptBatchMerge();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderScriptBatchMerge");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderScripts: [{ ProviderScriptId: 1 }, { ProviderScriptId: 2 }] };
    const payload = new PayProviderScriptBatchMerge(json);
    const result = payload.toJSON();
    expect(result.ProviderScripts).toHaveLength(2);
    expect(result.ProviderScripts?.[0]?.ProviderScriptId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderScriptBatchMerge();
    expect(payload.action).toBe("batch-merge");
  });

  it("should get the key from ProviderScripts", () => {
    const json = { ProviderScripts: [{ ProviderScriptId: 1 }, { ProviderScriptId: 2 }] };
    const payload = new PayProviderScriptBatchMerge(json);
    expect(payload.getKey()).toBe("1,2");
  });
});
