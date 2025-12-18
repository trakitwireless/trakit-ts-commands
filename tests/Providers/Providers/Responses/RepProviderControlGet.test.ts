import { describe, it, expect } from "vitest";
import RepProviderControlGet from "../../../../commands/Providers/Providers/Responses/RepProviderControlGet";
import { ProviderControl } from "@trakit/objects";

describe("RepProviderControlGet", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderControlGet();
    expect(response).toBeInstanceOf(RepProviderControlGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderControl: { ProviderId: 1 } };
    const response = new RepProviderControlGet(json);
    expect(response.ProviderControl).toBeInstanceOf(ProviderControl);
    expect(response.ProviderControl?.ProviderId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ProviderControl: { ProviderId: 1 } };
    const response = new RepProviderControlGet(json);
    const result = response.toJSON();
    expect(result.ProviderControl?.ProviderId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderControlGet();
    expect(response.action).toBe("control-get");
  });

  it("should get the object", () => {
    const json = { ProviderControl: { ProviderId: 1 } };
    const response = new RepProviderControlGet(json);
    expect(response.getObject()).toBeInstanceOf(ProviderControl);
  });

  it("should get the CompanyId", () => {
    const json = { ProviderControl: { ProviderId: 1, CompanyId: 100 } };
    const response = new RepProviderControlGet(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
