import { describe, it, expect } from "vitest";
import RepProviderGeneralList from "../../../../commands/Providers/Providers/Responses/RepProviderGeneralList";
import { ProviderGeneral } from "@trakit/objects";

describe("RepProviderGeneralList", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderGeneralList();
    expect(response).toBeInstanceOf(RepProviderGeneralList);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderGenerals: [{ ProviderId: 1 }, { ProviderId: 2 }] };
    const response = new RepProviderGeneralList(json);
    expect(response.ProviderGenerals).toHaveLength(2);
    expect(response.ProviderGenerals?.[0]).toBeInstanceOf(ProviderGeneral);
    expect(response.ProviderGenerals?.[0]?.ProviderId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ProviderGenerals: [{ ProviderId: 1 }, { ProviderId: 2 }] };
    const response = new RepProviderGeneralList(json);
    const result = response.toJSON();
    expect(result.ProviderGenerals).toHaveLength(2);
    expect(result.ProviderGenerals?.[0]?.ProviderId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderGeneralList();
    expect(response.action).toBe("general-list");
  });

  it("should get the object", () => {
    const json = { ProviderGenerals: [{ ProviderId: 1 }] };
    const response = new RepProviderGeneralList(json);
    const objects = response.getObject();
    expect(objects).toHaveLength(1);
    expect(objects?.[0]).toBeInstanceOf(ProviderGeneral);
  });

  it("should get the CompanyId", () => {
    const json = { ProviderGenerals: [{ ProviderId: 1, CompanyId: 100 }] };
    const response = new RepProviderGeneralList(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
