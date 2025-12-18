import { describe, it, expect } from "vitest";
import PayProviderScript from "../../../../commands/Providers/Scripts/Requests/PayProviderScript";

describe("PayProviderScript", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderScript();
    expect(payload).toBeInstanceOf(PayProviderScript);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderScriptId: 1 };
    const payload = new PayProviderScript(json);
    expect(payload.ProviderScriptId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderScript();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderScriptGet");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderScriptId: 1 };
    const payload = new PayProviderScript(json);
    const result = payload.toJSON();
    expect(result.ProviderScriptId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderScript();
    expect(payload.action).toBe("");
  });
});
