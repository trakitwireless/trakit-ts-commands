import { describe, it, expect } from "vitest";
import RepProviderRegistrationGet from "../../../../commands/Providers/Registrations/Responses/RepProviderRegistrationGet";
import { ProviderRegistration } from "@trakit/objects";

describe("RepProviderRegistrationGet", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderRegistrationGet();
    expect(response).toBeInstanceOf(RepProviderRegistrationGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderRegistration: { ProviderRegistrationId: 1 } };
    const response = new RepProviderRegistrationGet(json);
    expect(response.ProviderRegistration).toBeInstanceOf(ProviderRegistration);
    expect(response.ProviderRegistration?.ProviderRegistrationId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ProviderRegistration: { ProviderRegistrationId: 1 } };
    const response = new RepProviderRegistrationGet(json);
    const result = response.toJSON();
    expect(result.ProviderRegistration?.ProviderRegistrationId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderRegistrationGet();
    expect(response.action).toBe("get");
  });

  it("should get the object", () => {
    const json = { ProviderRegistration: { ProviderRegistrationId: 1 } };
    const response = new RepProviderRegistrationGet(json);
    expect(response.getObject()).toBeInstanceOf(ProviderRegistration);
  });

  it("should get the CompanyId", () => {
    const json = { ProviderRegistration: { ProviderRegistrationId: 1, CompanyId: 100 } };
    const response = new RepProviderRegistrationGet(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
