import { describe, it, expect } from "vitest";
import RepProviderRegistrationBatchMerge from "../../../../src/Providers/Registrations/Responses/RepProviderRegistrationBatchMerge";
import { ProviderRegistration } from "@trakit/objects";

describe("RepProviderRegistrationBatchMerge", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderRegistrationBatchMerge();
    expect(response).toBeInstanceOf(RepProviderRegistrationBatchMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderRegistrations: [{ ProviderRegistrationId: 1 }, { ProviderRegistrationId: 2 }] };
    const response = new RepProviderRegistrationBatchMerge(json);
    expect(response.ProviderRegistrations).toHaveLength(2);
    expect(response.ProviderRegistrations?.[0]).toBeInstanceOf(ProviderRegistration);
    expect(response.ProviderRegistrations?.[0]?.ProviderRegistrationId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ProviderRegistrations: [{ ProviderRegistrationId: 1 }, { ProviderRegistrationId: 2 }] };
    const response = new RepProviderRegistrationBatchMerge(json);
    const result = response.toJSON();
    expect(result.ProviderRegistrations).toHaveLength(2);
    expect(result.ProviderRegistrations?.[0]?.ProviderRegistrationId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderRegistrationBatchMerge();
    expect(response.action).toBe("batch-merge");
  });

  it("should get the object", () => {
    const json = { ProviderRegistrations: [{ ProviderRegistrationId: 1 }] };
    const response = new RepProviderRegistrationBatchMerge(json);
    const objects = response.getObject();
    expect(objects).toHaveLength(1);
    expect(objects?.[0]).toBeInstanceOf(ProviderRegistration);
  });

  it("should get the CompanyId", () => {
    const json = { ProviderRegistrations: [{ ProviderRegistrationId: 1, CompanyId: 100 }] };
    const response = new RepProviderRegistrationBatchMerge(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
