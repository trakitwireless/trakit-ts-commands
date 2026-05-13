import { describe, it, expect } from "vitest";
import PayProviderConfig from "../../../../src/Providers/Configs/Requests/PayProviderConfig";

describe("PayProviderConfig", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderConfig();
    expect(payload).toBeInstanceOf(PayProviderConfig);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderConfigId: 1 };
    const payload = new PayProviderConfig(json);
    expect(payload.ProviderConfigId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderConfig();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderConfigGet");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderConfigId: 1 };
    const payload = new PayProviderConfig(json);
    const result = payload.toJSON();
    expect(result.ProviderConfigId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderConfig();
    expect(payload.action).toBe("");
  });
});
