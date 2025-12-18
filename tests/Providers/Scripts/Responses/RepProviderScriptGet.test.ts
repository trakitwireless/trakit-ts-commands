import { describe, it, expect } from "vitest";
import RepProviderScriptGet from "../../../../commands/Providers/Scripts/Responses/RepProviderScriptGet";
import { ProviderScript } from "@trakit/objects";

describe("RepProviderScriptGet", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderScriptGet();
    expect(response).toBeInstanceOf(RepProviderScriptGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderScript: { ProviderScriptId: 1 } };
    const response = new RepProviderScriptGet(json);
    expect(response.ProviderScript).toBeInstanceOf(ProviderScript);
    expect(response.ProviderScript?.ProviderScriptId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ProviderScript: { ProviderScriptId: 1 } };
    const response = new RepProviderScriptGet(json);
    const result = response.toJSON();
    expect(result.ProviderScript?.ProviderScriptId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderScriptGet();
    expect(response.action).toBe("get");
  });

  it("should get the object", () => {
    const json = { ProviderScript: { ProviderScriptId: 1 } };
    const response = new RepProviderScriptGet(json);
    const obj = response.getObject();
    expect(obj).toBeInstanceOf(ProviderScript);
    expect(obj?.ProviderScriptId).toBe(1);
  });

  it("should get the companyId", () => {
    const json = { ProviderScript: { ProviderScriptId: 1, CompanyId: 100 } };
    const response = new RepProviderScriptGet(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
