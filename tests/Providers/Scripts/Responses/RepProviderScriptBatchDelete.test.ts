import { describe, it, expect } from "vitest";
import RepProviderScriptBatchDelete from "../../../../src/Providers/Scripts/Responses/RepProviderScriptBatchDelete";

describe("RepProviderScriptBatchDelete", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderScriptBatchDelete();
    expect(response).toBeInstanceOf(RepProviderScriptBatchDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderScriptIds: [1, 2, 3] };
    const response = new RepProviderScriptBatchDelete(json);
    expect(response.ProviderScriptIds).toEqual([1, 2, 3]);
  });

  it("should serialize to JSON", () => {
    const json = { ProviderScriptIds: [1, 2, 3] };
    const response = new RepProviderScriptBatchDelete(json);
    const result = response.toJSON();
    expect(result.ProviderScriptIds).toEqual([1, 2, 3]);
  });

  it("should have the correct action", () => {
    const response = new RepProviderScriptBatchDelete();
    expect(response.action).toBe("batch-delete");
  });

  it("should get the object", () => {
    const json = { ProviderScriptIds: [1, 2, 3] };
    const response = new RepProviderScriptBatchDelete(json);
    const obj = response.getObject();
    expect(obj).toEqual([1, 2, 3]);
  });

  it("should get the companyId", () => {
    const json = { ProviderScriptIds: [1, 2, 3], CompanyId: 100 };
    const response = new RepProviderScriptBatchDelete(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
