import { describe, it, expect } from "vitest";
import RepProviderConfigurationList from "../../../../src/Providers/Configurations/Responses/RepProviderConfigurationList";
import { ProviderConfiguration } from "@trakit/objects";

describe("RepProviderConfigurationList", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderConfigurationList();
    expect(response).toBeInstanceOf(RepProviderConfigurationList);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderConfigurations: [{ ProviderConfigurationId: 1 }, { ProviderConfigurationId: 2 }] };
    const response = new RepProviderConfigurationList(json);
    expect(response.ProviderConfigurations).toHaveLength(2);
    expect(response.ProviderConfigurations?.[0]).toBeInstanceOf(ProviderConfiguration);
    expect(response.ProviderConfigurations?.[0]?.ProviderConfigurationId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ProviderConfigurations: [{ ProviderConfigurationId: 1 }, { ProviderConfigurationId: 2 }] };
    const response = new RepProviderConfigurationList(json);
    const result = response.toJSON();
    expect(result.ProviderConfigurations).toHaveLength(2);
    expect(result.ProviderConfigurations?.[0]?.ProviderConfigurationId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderConfigurationList();
    expect(response.action).toBe("list");
  });

  it("should get the object", () => {
    const json = { ProviderConfigurations: [{ ProviderConfigurationId: 1 }] };
    const response = new RepProviderConfigurationList(json);
    const objects = response.getObject();
    expect(objects).toHaveLength(1);
    expect(objects?.[0]).toBeInstanceOf(ProviderConfiguration);
  });

  it("should get the CompanyId", () => {
    const json = { ProviderConfigurations: [{ ProviderConfigurationId: 1, CompanyId: 100 }] };
    const response = new RepProviderConfigurationList(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
