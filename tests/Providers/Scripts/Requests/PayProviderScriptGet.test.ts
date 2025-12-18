import { describe, it, expect } from "vitest";
import PayProviderScriptGet from "../../../../commands/Providers/Scripts/Requests/PayProviderScriptGet";

describe("PayProviderScriptGet", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderScriptGet();
    expect(payload).toBeInstanceOf(PayProviderScriptGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderScriptId: 1 };
    const payload = new PayProviderScriptGet(json);
    expect(payload.ProviderScriptId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderScriptGet();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderScriptGet");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderScriptId: 1 };
    const payload = new PayProviderScriptGet(json);
    const result = payload.toJSON();
    expect(result.ProviderScriptId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderScriptGet();
    expect(payload.action).toBe("get");
  });
});
