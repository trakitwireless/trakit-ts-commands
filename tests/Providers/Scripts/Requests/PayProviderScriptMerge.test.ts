import { describe, it, expect } from "vitest";
import PayProviderScriptMerge from "../../../../commands/Providers/Scripts/Requests/PayProviderScriptMerge";
import { ProviderScript } from "@trakit/objects";

describe("PayProviderScriptMerge", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderScriptMerge();
    expect(payload).toBeInstanceOf(PayProviderScriptMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderScript: { ProviderScriptId: 1 } };
    const payload = new PayProviderScriptMerge(json);
    expect(payload.ProviderScript).toBeInstanceOf(ProviderScript);
    expect(payload.ProviderScript?.ProviderScriptId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderScriptMerge();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderScriptMerge");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderScript: { ProviderScriptId: 1 } };
    const payload = new PayProviderScriptMerge(json);
    const result = payload.toJSON();
    expect(result.ProviderScript?.ProviderScriptId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderScriptMerge();
    expect(payload.action).toBe("merge");
  });

  it("should get the key from the ProviderScript", () => {
    const json = { ProviderScript: { ProviderScriptId: 1 } };
    const payload = new PayProviderScriptMerge(json);
    expect(payload.getKey()).toBe("1");
  });
});
