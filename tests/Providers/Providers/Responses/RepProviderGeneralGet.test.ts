import { describe, it, expect } from "vitest";
import RepProviderGeneralGet from "../../../../src/Providers/Providers/Responses/RepProviderGeneralGet";
import { ProviderGeneral } from "@trakit/objects";

describe("RepProviderGeneralGet", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderGeneralGet();
    expect(response).toBeInstanceOf(RepProviderGeneralGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderGeneral: { ProviderId: 1 } };
    const response = new RepProviderGeneralGet(json);
    expect(response.ProviderGeneral).toBeInstanceOf(ProviderGeneral);
    expect(response.ProviderGeneral?.ProviderId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ProviderGeneral: { ProviderId: 1 } };
    const response = new RepProviderGeneralGet(json);
    const result = response.toJSON();
    expect(result.ProviderGeneral?.ProviderId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderGeneralGet();
    expect(response.action).toBe("general-get");
  });

  it("should get the object", () => {
    const json = { ProviderGeneral: { ProviderId: 1 } };
    const response = new RepProviderGeneralGet(json);
    expect(response.getObject()).toBeInstanceOf(ProviderGeneral);
  });

  it("should get the CompanyId", () => {
    const json = { ProviderGeneral: { ProviderId: 1, CompanyId: 100 } };
    const response = new RepProviderGeneralGet(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
