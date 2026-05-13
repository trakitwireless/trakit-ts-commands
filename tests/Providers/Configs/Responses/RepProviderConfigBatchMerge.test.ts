import { describe, it, expect } from "vitest";
import RepProviderConfigBatchMerge from "../../../../src/Providers/Configs/Responses/RepProviderConfigBatchMerge";
import { ProviderConfig } from "@trakit/objects";

describe("RepProviderConfigBatchMerge", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderConfigBatchMerge();
    expect(response).toBeInstanceOf(RepProviderConfigBatchMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderConfigs: [{ ProviderConfigId: 1 }, { ProviderConfigId: 2 }] };
    const response = new RepProviderConfigBatchMerge(json);
    expect(response.ProviderConfigs).toHaveLength(2);
    expect(response.ProviderConfigs?.[0]).toBeInstanceOf(ProviderConfig);
    expect(response.ProviderConfigs?.[0]?.ProviderConfigId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ProviderConfigs: [{ ProviderConfigId: 1 }, { ProviderConfigId: 2 }] };
    const response = new RepProviderConfigBatchMerge(json);
    const result = response.toJSON();
    expect(result.ProviderConfigs).toHaveLength(2);
    expect(result.ProviderConfigs?.[0]?.ProviderConfigId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderConfigBatchMerge();
    expect(response.action).toBe("batch-merge");
  });

  it("should get the object", () => {
    const json = { ProviderConfigs: [{ ProviderConfigId: 1 }] };
    const response = new RepProviderConfigBatchMerge(json);
    const objects = response.getObject();
    expect(objects).toHaveLength(1);
    expect(objects?.[0]).toBeInstanceOf(ProviderConfig);
  });

  it("should get the CompanyId", () => {
    const json = { ProviderConfigs: [{ ProviderConfigId: 1, CompanyId: 100 }] };
    const response = new RepProviderConfigBatchMerge(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
