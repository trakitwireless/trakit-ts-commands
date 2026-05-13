import { describe, it, expect } from "vitest";
import RepProviderConfigurationMerge from "../../../../src/Providers/Configurations/Responses/RepProviderConfigurationMerge";
import { ProviderConfiguration } from "@trakit/objects";

describe("RepProviderConfigurationMerge", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderConfigurationMerge();
    expect(response).toBeInstanceOf(RepProviderConfigurationMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderConfiguration: { ProviderConfigurationId: 1 } };
    const response = new RepProviderConfigurationMerge(json);
    expect(response.ProviderConfiguration).toBeInstanceOf(ProviderConfiguration);
    expect(response.ProviderConfiguration?.ProviderConfigurationId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ProviderConfiguration: { ProviderConfigurationId: 1 } };
    const response = new RepProviderConfigurationMerge(json);
    const result = response.toJSON();
    expect(result.ProviderConfiguration?.ProviderConfigurationId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderConfigurationMerge();
    expect(response.action).toBe("merge");
  });

  it("should get the object", () => {
    const json = { ProviderConfiguration: { ProviderConfigurationId: 1 } };
    const response = new RepProviderConfigurationMerge(json);
    expect(response.getObject()).toBeInstanceOf(ProviderConfiguration);
  });

  it("should get the CompanyId", () => {
    const json = { ProviderConfiguration: { ProviderConfigurationId: 1, CompanyId: 100 } };
    const response = new RepProviderConfigurationMerge(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
