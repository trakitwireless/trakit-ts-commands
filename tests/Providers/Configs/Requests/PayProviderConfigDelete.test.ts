import { describe, it, expect } from "vitest";
import PayProviderConfigDelete from "../../../../commands/Providers/Configs/Requests/PayProviderConfigDelete";

describe("PayProviderConfigDelete", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderConfigDelete();
    expect(payload).toBeInstanceOf(PayProviderConfigDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderConfigId: 1 };
    const payload = new PayProviderConfigDelete(json);
    expect(payload.ProviderConfigId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderConfigDelete();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderConfigDelete");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderConfigId: 1 };
    const payload = new PayProviderConfigDelete(json);
    const result = payload.toJSON();
    expect(result.ProviderConfigId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderConfigDelete();
    expect(payload.action).toBe("delete");
  });
});
