import { describe, it, expect } from "vitest";
import PayProviderConfigurationMerge from "../../../../commands/Providers/Configurations/Requests/PayProviderConfigurationMerge";
import { ProviderConfiguration } from "@trakit/objects";

describe("PayProviderConfigurationMerge", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderConfigurationMerge();
    expect(payload).toBeInstanceOf(PayProviderConfigurationMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderConfiguration: { ProviderConfigurationId: 1 } };
    const payload = new PayProviderConfigurationMerge(json);
    expect(payload.ProviderConfiguration).toBeInstanceOf(ProviderConfiguration);
    expect(payload.ProviderConfiguration?.ProviderConfigurationId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderConfigurationMerge();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderConfigurationMerge");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderConfiguration: { ProviderConfigurationId: 1 } };
    const payload = new PayProviderConfigurationMerge(json);
    const result = payload.toJSON();
    expect(result.ProviderConfiguration?.ProviderConfigurationId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderConfigurationMerge();
    expect(payload.action).toBe("merge");
  });

  it("should get the key from the ProviderConfiguration", () => {
    const json = { ProviderConfiguration: { ProviderConfigurationId: 1 } };
    const payload = new PayProviderConfigurationMerge(json);
    expect(payload.getKey()).toBe("1");
  });
});
