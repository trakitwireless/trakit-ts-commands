import { describe, it, expect } from "vitest";
import PayProviderConfigBatchMerge from "../../../../commands/Providers/Configs/Requests/PayProviderConfigBatchMerge";
import { ProviderConfig } from "@trakit/objects";

describe("PayProviderConfigBatchMerge", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderConfigBatchMerge();
    expect(payload).toBeInstanceOf(PayProviderConfigBatchMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderConfigs: [{ ProviderConfigId: 1 }, { ProviderConfigId: 2 }] };
    const payload = new PayProviderConfigBatchMerge(json);
    expect(payload.ProviderConfigs).toHaveLength(2);
    expect(payload.ProviderConfigs?.[0]).toBeInstanceOf(ProviderConfig);
    expect(payload.ProviderConfigs?.[0]?.ProviderConfigId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderConfigBatchMerge();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderConfigBatchMerge");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderConfigs: [{ ProviderConfigId: 1 }, { ProviderConfigId: 2 }] };
    const payload = new PayProviderConfigBatchMerge(json);
    const result = payload.toJSON();
    expect(result.ProviderConfigs).toHaveLength(2);
    expect(result.ProviderConfigs?.[0]?.ProviderConfigId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderConfigBatchMerge();
    expect(payload.action).toBe("batch-merge");
  });

  it("should get the key from ProviderConfigs", () => {
    const json = { ProviderConfigs: [{ ProviderConfigId: 1 }, { ProviderConfigId: 2 }] };
    const payload = new PayProviderConfigBatchMerge(json);
    expect(payload.getKey()).toBe("1,2");
  });
});
