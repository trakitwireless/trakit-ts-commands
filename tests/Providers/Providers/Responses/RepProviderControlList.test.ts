import { describe, it, expect } from "vitest";
import RepProviderControlList from "../../../../commands/Providers/Providers/Responses/RepProviderControlList";
import { ProviderControl } from "@trakit/objects";

describe("RepProviderControlList", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderControlList();
    expect(response).toBeInstanceOf(RepProviderControlList);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderControls: [{ ProviderId: 1 }, { ProviderId: 2 }] };
    const response = new RepProviderControlList(json);
    expect(response.ProviderControls).toHaveLength(2);
    expect(response.ProviderControls?.[0]).toBeInstanceOf(ProviderControl);
    expect(response.ProviderControls?.[0]?.ProviderId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ProviderControls: [{ ProviderId: 1 }, { ProviderId: 2 }] };
    const response = new RepProviderControlList(json);
    const result = response.toJSON();
    expect(result.ProviderControls).toHaveLength(2);
    expect(result.ProviderControls?.[0]?.ProviderId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderControlList();
    expect(response.action).toBe("control-list");
  });

  it("should get the object", () => {
    const json = { ProviderControls: [{ ProviderId: 1 }] };
    const response = new RepProviderControlList(json);
    const objects = response.getObject();
    expect(objects).toHaveLength(1);
    expect(objects?.[0]).toBeInstanceOf(ProviderControl);
  });

  it("should get the CompanyId", () => {
    const json = { ProviderControls: [{ ProviderId: 1, CompanyId: 100 }] };
    const response = new RepProviderControlList(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
