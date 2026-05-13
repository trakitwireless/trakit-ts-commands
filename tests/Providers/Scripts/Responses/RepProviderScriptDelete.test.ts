import { describe, it, expect } from "vitest";
import RepProviderScriptDelete from "../../../../src/Providers/Scripts/Responses/RepProviderScriptDelete";

describe("RepProviderScriptDelete", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderScriptDelete();
    expect(response).toBeInstanceOf(RepProviderScriptDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderScriptId: 1 };
    const response = new RepProviderScriptDelete(json);
    expect(response.ProviderScriptId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ProviderScriptId: 1 };
    const response = new RepProviderScriptDelete(json);
    const result = response.toJSON();
    expect(result.ProviderScriptId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderScriptDelete();
    expect(response.action).toBe("delete");
  });

  it("should get the object", () => {
    const json = { ProviderScriptId: 1 };
    const response = new RepProviderScriptDelete(json);
    const obj = response.getObject();
    expect(obj).toBe(1);
  });

  it("should get the companyId", () => {
    const json = { ProviderScriptId: 1, CompanyId: 100 };
    const response = new RepProviderScriptDelete(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
