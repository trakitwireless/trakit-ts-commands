import { describe, it, expect } from "vitest";
import RepProviderRegistrationMerge from "../../../../commands/Providers/Registrations/Responses/RepProviderRegistrationMerge";
import { ProviderRegistration } from "@trakit/objects";

describe("RepProviderRegistrationMerge", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderRegistrationMerge();
    expect(response).toBeInstanceOf(RepProviderRegistrationMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderRegistration: { ProviderRegistrationId: 1 } };
    const response = new RepProviderRegistrationMerge(json);
    expect(response.ProviderRegistration).toBeInstanceOf(ProviderRegistration);
    expect(response.ProviderRegistration?.ProviderRegistrationId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ProviderRegistration: { ProviderRegistrationId: 1 } };
    const response = new RepProviderRegistrationMerge(json);
    const result = response.toJSON();
    expect(result.ProviderRegistration?.ProviderRegistrationId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderRegistrationMerge();
    expect(response.action).toBe("merge");
  });

  it("should get the object", () => {
    const json = { ProviderRegistration: { ProviderRegistrationId: 1 } };
    const response = new RepProviderRegistrationMerge(json);
    expect(response.getObject()).toBeInstanceOf(ProviderRegistration);
  });

  it("should get the CompanyId", () => {
    const json = { ProviderRegistration: { ProviderRegistrationId: 1, CompanyId: 100 } };
    const response = new RepProviderRegistrationMerge(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
