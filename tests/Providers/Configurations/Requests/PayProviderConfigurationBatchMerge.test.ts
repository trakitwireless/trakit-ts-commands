import { describe, it, expect } from "vitest";
import PayProviderConfigurationBatchMerge from "../../../../src/Providers/Configurations/Requests/PayProviderConfigurationBatchMerge";
import { ProviderConfiguration } from "@trakit/objects";

describe("PayProviderConfigurationBatchMerge", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderConfigurationBatchMerge();
    expect(payload).toBeInstanceOf(PayProviderConfigurationBatchMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderConfigurations: [{ ProviderConfigurationId: 1 }, { ProviderConfigurationId: 2 }] };
    const payload = new PayProviderConfigurationBatchMerge(json);
    expect(payload.ProviderConfigurations).toHaveLength(2);
    expect(payload.ProviderConfigurations?.[0]).toBeInstanceOf(ProviderConfiguration);
    expect(payload.ProviderConfigurations?.[0]?.ProviderConfigurationId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderConfigurationBatchMerge();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderConfigurationBatchMerge");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderConfigurations: [{ ProviderConfigurationId: 1 }, { ProviderConfigurationId: 2 }] };
    const payload = new PayProviderConfigurationBatchMerge(json);
    const result = payload.toJSON();
    expect(result.ProviderConfigurations).toHaveLength(2);
    expect(result.ProviderConfigurations?.[0]?.ProviderConfigurationId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderConfigurationBatchMerge();
    expect(payload.action).toBe("batch-merge");
  });

  it("should get the key from ProviderConfigurations", () => {
    const json = { ProviderConfigurations: [{ ProviderConfigurationId: 1 }, { ProviderConfigurationId: 2 }] };
    const payload = new PayProviderConfigurationBatchMerge(json);
    expect(payload.getKey()).toBe("1,2");
  });
});
