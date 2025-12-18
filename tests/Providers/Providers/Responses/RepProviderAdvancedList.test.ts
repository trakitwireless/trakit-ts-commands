import { describe, it, expect } from "vitest";
import RepProviderAdvancedList from "../../../../commands/Providers/Providers/Responses/RepProviderAdvancedList";
import { ProviderAdvanced } from "@trakit/objects";

describe("RepProviderAdvancedList", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderAdvancedList();
    expect(response).toBeInstanceOf(RepProviderAdvancedList);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderAdvanceds: [{ ProviderId: 1 }, { ProviderId: 2 }] };
    const response = new RepProviderAdvancedList(json);
    expect(response.ProviderAdvanceds).toHaveLength(2);
    expect(response.ProviderAdvanceds?.[0]).toBeInstanceOf(ProviderAdvanced);
    expect(response.ProviderAdvanceds?.[0]?.ProviderId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ProviderAdvanceds: [{ ProviderId: 1 }, { ProviderId: 2 }] };
    const response = new RepProviderAdvancedList(json);
    const result = response.toJSON();
    expect(result.ProviderAdvanceds).toHaveLength(2);
    expect(result.ProviderAdvanceds?.[0]?.ProviderId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderAdvancedList();
    expect(response.action).toBe("advanced-list");
  });

  it("should get the object", () => {
    const json = { ProviderAdvanceds: [{ ProviderId: 1 }] };
    const response = new RepProviderAdvancedList(json);
    const objects = response.getObject();
    expect(objects).toHaveLength(1);
    expect(objects?.[0]).toBeInstanceOf(ProviderAdvanced);
  });

  it("should get the CompanyId", () => {
    const json = { ProviderAdvanceds: [{ ProviderId: 1, CompanyId: 100 }] };
    const response = new RepProviderAdvancedList(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
