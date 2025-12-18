import { describe, it, expect } from "vitest";
import PayProviderConfigurationGet from "../../../../commands/Providers/Configurations/Requests/PayProviderConfigurationGet";

describe("PayProviderConfigurationGet", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderConfigurationGet();
    expect(payload).toBeInstanceOf(PayProviderConfigurationGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderConfigurationId: 1 };
    const payload = new PayProviderConfigurationGet(json);
    expect(payload.ProviderConfigurationId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderConfigurationGet();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderConfigurationGet");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderConfigurationId: 1 };
    const payload = new PayProviderConfigurationGet(json);
    const result = payload.toJSON();
    expect(result.ProviderConfigurationId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderConfigurationGet();
    expect(payload.action).toBe("get");
  });
});
