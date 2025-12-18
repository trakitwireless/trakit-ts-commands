import { describe, it, expect } from "vitest";
import PayProviderConfigurationRestore from "../../../../commands/Providers/Configurations/Requests/PayProviderConfigurationRestore";

describe("PayProviderConfigurationRestore", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderConfigurationRestore();
    expect(payload).toBeInstanceOf(PayProviderConfigurationRestore);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderConfigurationId: 1 };
    const payload = new PayProviderConfigurationRestore(json);
    expect(payload.ProviderConfigurationId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderConfigurationRestore();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderConfigurationGet");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderConfigurationId: 1 };
    const payload = new PayProviderConfigurationRestore(json);
    const result = payload.toJSON();
    expect(result.ProviderConfigurationId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderConfigurationRestore();
    expect(payload.action).toBe("restore");
  });
});
