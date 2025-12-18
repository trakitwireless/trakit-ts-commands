import { describe, it, expect } from "vitest";
import RepProviderScriptMerge from "../../../../commands/Providers/Scripts/Responses/RepProviderScriptMerge";
import { ProviderScript } from "@trakit/objects";

describe("RepProviderScriptMerge", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderScriptMerge();
    expect(response).toBeInstanceOf(RepProviderScriptMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderScript: { ProviderScriptId: 1 } };
    const response = new RepProviderScriptMerge(json);
    expect(response.ProviderScript).toBeInstanceOf(ProviderScript);
    expect(response.ProviderScript?.ProviderScriptId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ProviderScript: { ProviderScriptId: 1 } };
    const response = new RepProviderScriptMerge(json);
    const result = response.toJSON();
    expect(result.ProviderScript?.ProviderScriptId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderScriptMerge();
    expect(response.action).toBe("merge");
  });

  it("should get the object", () => {
    const json = { ProviderScript: { ProviderScriptId: 1 } };
    const response = new RepProviderScriptMerge(json);
    const obj = response.getObject();
    expect(obj).toBeInstanceOf(ProviderScript);
    expect(obj?.ProviderScriptId).toBe(1);
  });

  it("should get the companyId", () => {
    const json = { ProviderScript: { ProviderScriptId: 1, CompanyId: 100 } };
    const response = new RepProviderScriptMerge(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
