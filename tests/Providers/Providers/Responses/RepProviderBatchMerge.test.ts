import { describe, it, expect } from "vitest";
import RepProviderBatchMerge from "../../../../commands/Providers/Providers/Responses/RepProviderBatchMerge";
import { Provider } from "@trakit/objects";

describe("RepProviderBatchMerge", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderBatchMerge();
    expect(response).toBeInstanceOf(RepProviderBatchMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { Providers: [{ ProviderId: 1 }, { ProviderId: 2 }] };
    const response = new RepProviderBatchMerge(json);
    expect(response.Providers).toHaveLength(2);
    expect(response.Providers?.[0]).toBeInstanceOf(Provider);
    expect(response.Providers?.[0]?.ProviderId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { Providers: [{ ProviderId: 1 }, { ProviderId: 2 }] };
    const response = new RepProviderBatchMerge(json);
    const result = response.toJSON();
    expect(result.Providers).toHaveLength(2);
    expect(result.Providers?.[0]?.ProviderId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderBatchMerge();
    expect(response.action).toBe("batch-merge");
  });

  it("should get the object", () => {
    const json = { Providers: [{ ProviderId: 1 }] };
    const response = new RepProviderBatchMerge(json);
    const objects = response.getObject();
    expect(objects).toHaveLength(1);
    expect(objects?.[0]).toBeInstanceOf(Provider);
  });

  it("should get the CompanyId", () => {
    const json = { Providers: [{ ProviderId: 1, CompanyId: 100 }] };
    const response = new RepProviderBatchMerge(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
