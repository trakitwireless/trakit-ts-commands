import { describe, it, expect } from "vitest";
import RepProviderScriptList from "../../../../commands/Providers/Scripts/Responses/RepProviderScriptList";
import { ProviderScript } from "@trakit/objects";

describe("RepProviderScriptList", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderScriptList();
    expect(response).toBeInstanceOf(RepProviderScriptList);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderScripts: [{ ProviderScriptId: 1 }, { ProviderScriptId: 2 }] };
    const response = new RepProviderScriptList(json);
    expect(response.ProviderScripts).toHaveLength(2);
    expect(response.ProviderScripts?.[0]).toBeInstanceOf(ProviderScript);
    expect(response.ProviderScripts?.[0]?.ProviderScriptId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ProviderScripts: [{ ProviderScriptId: 1 }, { ProviderScriptId: 2 }] };
    const response = new RepProviderScriptList(json);
    const result = response.toJSON();
    expect(result.ProviderScripts).toHaveLength(2);
    expect(result.ProviderScripts?.[0]?.ProviderScriptId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepProviderScriptList();
    expect(response.action).toBe("list");
  });

  it("should get the object", () => {
    const json = { ProviderScripts: [{ ProviderScriptId: 1 }, { ProviderScriptId: 2 }] };
    const response = new RepProviderScriptList(json);
    const obj = response.getObject();
    expect(obj).toHaveLength(2);
    expect(obj?.[0]).toBeInstanceOf(ProviderScript);
    expect(obj?.[0]?.ProviderScriptId).toBe(1);
  });

  it("should get the companyId", () => {
    const json = { ProviderScripts: [{ ProviderScriptId: 1, CompanyId: 100 }] };
    const response = new RepProviderScriptList(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
