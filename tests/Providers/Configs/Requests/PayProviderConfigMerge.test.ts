import { describe, it, expect } from "vitest";
import PayProviderConfigMerge from "../../../../commands/Providers/Configs/Requests/PayProviderConfigMerge";
import { ProviderConfig } from "@trakit/objects";

describe("PayProviderConfigMerge", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderConfigMerge();
    expect(payload).toBeInstanceOf(PayProviderConfigMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderConfig: { ProviderConfigId: 1 } };
    const payload = new PayProviderConfigMerge(json);
    expect(payload.ProviderConfig).toBeInstanceOf(ProviderConfig);
    expect(payload.ProviderConfig?.ProviderConfigId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderConfigMerge();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderConfigMerge");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderConfig: { ProviderConfigId: 1 } };
    const payload = new PayProviderConfigMerge(json);
    const result = payload.toJSON();
    expect(result.ProviderConfig?.ProviderConfigId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderConfigMerge();
    expect(payload.action).toBe("merge");
  });

  it("should get the key from the ProviderConfig", () => {
    const json = { ProviderConfig: { ProviderConfigId: 1 } };
    const payload = new PayProviderConfigMerge(json);
    expect(payload.getKey()).toBe("1");
  });
});
