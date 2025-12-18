import { describe, it, expect } from "vitest";
import RepProviderRegistrationList from "../../../../commands/Providers/Registrations/Responses/RepProviderRegistrationList";
import { ProviderRegistration } from "@trakit/objects";

describe("RepProviderRegistrationList", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderRegistrationList();
    expect(response).toBeInstanceOf(RepProviderRegistrationList);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderRegistrations: [{ ProviderRegistrationId: 1 }, { ProviderRegistrationId: 2 }] };
    const response = new RepProviderRegistrationList(json);
    expect(response.ProviderRegistrations).toHaveLength(2);
    expect(response.ProviderRegistrations?.[0]).toBeInstanceOf(ProviderRegistration);
    expect(response.ProviderRegistrations?.[0]?.ProviderRegistrationId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ProviderRegistrations: [{ ProviderRegistrationId: 1 }, { ProviderRegistrationId: 2 }] };
    const response = new RepProviderRegistrationList(json);
    const result = response.toJSON();
    expect(result.ProviderRegistrations).toHaveLength(2);
    expect(result.ProviderRegistrations?.[0]?.ProviderRegistrationId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderRegistrationList();
    expect(response.action).toBe("list");
  });

  it("should get the object", () => {
    const json = { ProviderRegistrations: [{ ProviderRegistrationId: 1 }] };
    const response = new RepProviderRegistrationList(json);
    const objects = response.getObject();
    expect(objects).toHaveLength(1);
    expect(objects?.[0]).toBeInstanceOf(ProviderRegistration);
  });

  it("should get the CompanyId", () => {
    const json = { ProviderRegistrations: [{ ProviderRegistrationId: 1, CompanyId: 100 }] };
    const response = new RepProviderRegistrationList(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
