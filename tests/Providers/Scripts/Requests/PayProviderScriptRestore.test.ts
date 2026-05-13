import { describe, it, expect } from "vitest";
import PayProviderScriptRestore from "../../../../src/Providers/Scripts/Requests/PayProviderScriptRestore";

describe("PayProviderScriptRestore", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderScriptRestore();
    expect(payload).toBeInstanceOf(PayProviderScriptRestore);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderScriptId: 1 };
    const payload = new PayProviderScriptRestore(json);
    expect(payload.ProviderScriptId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderScriptRestore();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderScriptGet");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderScriptId: 1 };
    const payload = new PayProviderScriptRestore(json);
    const result = payload.toJSON();
    expect(result.ProviderScriptId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderScriptRestore();
    expect(payload.action).toBe("restore");
  });
});
