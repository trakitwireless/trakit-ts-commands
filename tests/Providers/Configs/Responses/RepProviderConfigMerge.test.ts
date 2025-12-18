import { describe, it, expect } from "vitest";
import RepProviderConfigMerge from "../../../../commands/Providers/Configs/Responses/RepProviderConfigMerge";
import { ProviderConfig } from "@trakit/objects";

describe("RepProviderConfigMerge", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderConfigMerge();
    expect(response).toBeInstanceOf(RepProviderConfigMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderConfig: { ProviderConfigId: 1 } };
    const response = new RepProviderConfigMerge(json);
    expect(response.ProviderConfig).toBeInstanceOf(ProviderConfig);
    expect(response.ProviderConfig?.ProviderConfigId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ProviderConfig: { ProviderConfigId: 1 } };
    const response = new RepProviderConfigMerge(json);
    const result = response.toJSON();
    expect(result.ProviderConfig?.ProviderConfigId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderConfigMerge();
    expect(response.action).toBe("merge");
  });

  it("should get the object", () => {
    const json = { ProviderConfig: { ProviderConfigId: 1 } };
    const response = new RepProviderConfigMerge(json);
    expect(response.getObject()).toBeInstanceOf(ProviderConfig);
  });

  it("should get the CompanyId", () => {
    const json = { ProviderConfig: { ProviderConfigId: 1, CompanyId: 100 } };
    const response = new RepProviderConfigMerge(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
