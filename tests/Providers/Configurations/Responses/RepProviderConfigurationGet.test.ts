import { describe, it, expect } from "vitest";
import RepProviderConfigurationGet from "../../../../commands/Providers/Configurations/Responses/RepProviderConfigurationGet";
import { ProviderConfiguration } from "@trakit/objects";

describe("RepProviderConfigurationGet", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderConfigurationGet();
    expect(response).toBeInstanceOf(RepProviderConfigurationGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderConfiguration: { ProviderConfigurationId: 1 } };
    const response = new RepProviderConfigurationGet(json);
    expect(response.ProviderConfiguration).toBeInstanceOf(ProviderConfiguration);
    expect(response.ProviderConfiguration?.ProviderConfigurationId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ProviderConfiguration: { ProviderConfigurationId: 1 } };
    const response = new RepProviderConfigurationGet(json);
    const result = response.toJSON();
    expect(result.ProviderConfiguration?.ProviderConfigurationId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderConfigurationGet();
    expect(response.action).toBe("get");
  });

  it("should get the object", () => {
    const json = { ProviderConfiguration: { ProviderConfigurationId: 1 } };
    const response = new RepProviderConfigurationGet(json);
    expect(response.getObject()).toBeInstanceOf(ProviderConfiguration);
  });

  it("should get the CompanyId", () => {
    const json = { ProviderConfiguration: { ProviderConfigurationId: 1, CompanyId: 100 } };
    const response = new RepProviderConfigurationGet(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
