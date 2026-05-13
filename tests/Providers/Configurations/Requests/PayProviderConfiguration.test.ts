import { describe, it, expect } from "vitest";
import PayProviderConfiguration from "../../../../src/Providers/Configurations/Requests/PayProviderConfiguration";

describe("PayProviderConfiguration", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderConfiguration();
    expect(payload).toBeInstanceOf(PayProviderConfiguration);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderConfigurationId: 1 };
    const payload = new PayProviderConfiguration(json);
    expect(payload.ProviderConfigurationId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderConfiguration();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderConfigurationGet");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderConfigurationId: 1 };
    const payload = new PayProviderConfiguration(json);
    const result = payload.toJSON();
    expect(result.ProviderConfigurationId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderConfiguration();
    expect(payload.action).toBe("");
  });
});
