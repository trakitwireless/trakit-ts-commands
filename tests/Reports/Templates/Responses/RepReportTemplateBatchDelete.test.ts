import { describe, it, expect } from "vitest";
import RepReportTemplateBatchDelete from "../../../../commands/Reports/Templates/Responses/RepReportTemplateBatchDelete";

describe("RepReportTemplateBatchDelete", () => {
  it("should create an empty instance", () => {
    const response = new RepReportTemplateBatchDelete();
    expect(response).toBeInstanceOf(RepReportTemplateBatchDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { TemplateIds: [1, 2, 3] };
    const response = new RepReportTemplateBatchDelete(json);
    expect(response.TemplateIds).toEqual([1, 2, 3]);
  });

  it("should serialize to JSON", () => {
    const json = { TemplateIds: [1, 2, 3] };
    const response = new RepReportTemplateBatchDelete(json);
    const result = response.toJSON();
    expect(result.TemplateIds).toEqual([1, 2, 3]);
  });

  it("should have the correct action", () => {
    const response = new RepReportTemplateBatchDelete();
    expect(response.action).toBe("batch-delete");
  });

  it("should get the object", () => {
    const json = { TemplateIds: [1, 2, 3] };
    const response = new RepReportTemplateBatchDelete(json);
    const obj = response.getObject();
    expect(obj).toEqual([1, 2, 3]);
  });

  it("should get the companyId", () => {
    const json = { TemplateIds: [1, 2, 3], CompanyId: 100 };
    const response = new RepReportTemplateBatchDelete(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
