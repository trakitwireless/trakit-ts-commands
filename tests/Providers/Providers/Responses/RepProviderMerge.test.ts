import { describe, it, expect } from "vitest";
import RepProviderMerge from "../../../../src/Providers/Providers/Responses/RepProviderMerge";
import { Provider } from "@trakit/objects";

describe("RepProviderMerge", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderMerge();
    expect(response).toBeInstanceOf(RepProviderMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { Provider: { ProviderId: 1 } };
    const response = new RepProviderMerge(json);
    expect(response.Provider).toBeInstanceOf(Provider);
    expect(response.Provider?.ProviderId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { Provider: { ProviderId: 1 } };
    const response = new RepProviderMerge(json);
    const result = response.toJSON();
    expect(result.Provider?.ProviderId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderMerge();
    expect(response.action).toBe("merge");
  });

  it("should get the object", () => {
    const json = { Provider: { ProviderId: 1 } };
    const response = new RepProviderMerge(json);
    expect(response.getObject()).toBeInstanceOf(Provider);
  });

  it("should get the CompanyId", () => {
    const json = { Provider: { ProviderId: 1, CompanyId: 100 } };
    const response = new RepProviderMerge(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
