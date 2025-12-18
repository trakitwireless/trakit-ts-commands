import { describe, it, expect } from "vitest";
import RepProviderConfigList from "../../../../commands/Providers/Configs/Responses/RepProviderConfigList";
import { ProviderConfig } from "@trakit/objects";

describe("RepProviderConfigList", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderConfigList();
    expect(response).toBeInstanceOf(RepProviderConfigList);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderConfigs: [{ ProviderConfigId: 1 }, { ProviderConfigId: 2 }] };
    const response = new RepProviderConfigList(json);
    expect(response.ProviderConfigs).toHaveLength(2);
    expect(response.ProviderConfigs?.[0]).toBeInstanceOf(ProviderConfig);
    expect(response.ProviderConfigs?.[0]?.ProviderConfigId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ProviderConfigs: [{ ProviderConfigId: 1 }, { ProviderConfigId: 2 }] };
    const response = new RepProviderConfigList(json);
    const result = response.toJSON();
    expect(result.ProviderConfigs).toHaveLength(2);
    expect(result.ProviderConfigs?.[0]?.ProviderConfigId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderConfigList();
    expect(response.action).toBe("list");
  });

  it("should get the object", () => {
    const json = { ProviderConfigs: [{ ProviderConfigId: 1 }] };
    const response = new RepProviderConfigList(json);
    const objects = response.getObject();
    expect(objects).toHaveLength(1);
    expect(objects?.[0]).toBeInstanceOf(ProviderConfig);
  });

  it("should get the CompanyId", () => {
    const json = { ProviderConfigs: [{ ProviderConfigId: 1, CompanyId: 100 }] };
    const response = new RepProviderConfigList(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
