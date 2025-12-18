import { describe, it, expect } from "vitest";
import PayProviderConfigGet from "../../../../commands/Providers/Configs/Requests/PayProviderConfigGet";

describe("PayProviderConfigGet", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderConfigGet();
    expect(payload).toBeInstanceOf(PayProviderConfigGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderConfigId: 1 };
    const payload = new PayProviderConfigGet(json);
    expect(payload.ProviderConfigId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderConfigGet();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderConfigGet");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderConfigId: 1 };
    const payload = new PayProviderConfigGet(json);
    const result = payload.toJSON();
    expect(result.ProviderConfigId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderConfigGet();
    expect(payload.action).toBe("get");
  });
});
