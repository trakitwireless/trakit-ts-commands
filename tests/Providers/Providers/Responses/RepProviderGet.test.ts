import { describe, it, expect } from "vitest";
import RepProviderGet from "../../../../commands/Providers/Providers/Responses/RepProviderGet";
import { Provider } from "@trakit/objects";

describe("RepProviderGet", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderGet();
    expect(response).toBeInstanceOf(RepProviderGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { Provider: { ProviderId: 1 } };
    const response = new RepProviderGet(json);
    expect(response.Provider).toBeInstanceOf(Provider);
    expect(response.Provider?.ProviderId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { Provider: { ProviderId: 1 } };
    const response = new RepProviderGet(json);
    const result = response.toJSON();
    expect(result.Provider?.ProviderId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderGet();
    expect(response.action).toBe("get");
  });

  it("should get the object", () => {
    const json = { Provider: { ProviderId: 1 } };
    const response = new RepProviderGet(json);
    expect(response.getObject()).toBeInstanceOf(Provider);
  });

  it("should get the CompanyId", () => {
    const json = { Provider: { ProviderId: 1, CompanyId: 100 } };
    const response = new RepProviderGet(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
