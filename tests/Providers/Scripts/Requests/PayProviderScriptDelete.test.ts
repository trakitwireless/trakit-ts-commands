import { describe, it, expect } from "vitest";
import PayProviderScriptDelete from "../../../../src/Providers/Scripts/Requests/PayProviderScriptDelete";

describe("PayProviderScriptDelete", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderScriptDelete();
    expect(payload).toBeInstanceOf(PayProviderScriptDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderScriptId: 1 };
    const payload = new PayProviderScriptDelete(json);
    expect(payload.ProviderScriptId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderScriptDelete();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderScriptDelete");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderScriptId: 1 };
    const payload = new PayProviderScriptDelete(json);
    const result = payload.toJSON();
    expect(result.ProviderScriptId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderScriptDelete();
    expect(payload.action).toBe("delete");
  });
});
