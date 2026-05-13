import { describe, it, expect } from "vitest";
import RepProviderAdvancedGet from "../../../../src/Providers/Providers/Responses/RepProviderAdvancedGet";
import { ProviderAdvanced } from "@trakit/objects";

describe("RepProviderAdvancedGet", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderAdvancedGet();
    expect(response).toBeInstanceOf(RepProviderAdvancedGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderAdvanced: { ProviderId: 1 } };
    const response = new RepProviderAdvancedGet(json);
    expect(response.ProviderAdvanced).toBeInstanceOf(ProviderAdvanced);
    expect(response.ProviderAdvanced?.ProviderId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ProviderAdvanced: { ProviderId: 1 } };
    const response = new RepProviderAdvancedGet(json);
    const result = response.toJSON();
    expect(result.ProviderAdvanced?.ProviderId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderAdvancedGet();
    expect(response.action).toBe("advanced-get");
  });

  it("should get the object", () => {
    const json = { ProviderAdvanced: { ProviderId: 1 } };
    const response = new RepProviderAdvancedGet(json);
    expect(response.getObject()).toBeInstanceOf(ProviderAdvanced);
  });

  it("should get the CompanyId", () => {
    const json = { ProviderAdvanced: { ProviderId: 1, CompanyId: 100 } };
    const response = new RepProviderAdvancedGet(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
