import { describe, it, expect } from "vitest";
import RepReportTemplateBatchMerge from "../../../../src/Reports/Templates/Responses/RepReportTemplateBatchMerge";
import { ReportTemplate } from "@trakit/objects";

describe("RepReportTemplateBatchMerge", () => {
  it("should create an empty instance", () => {
    const response = new RepReportTemplateBatchMerge();
    expect(response).toBeInstanceOf(RepReportTemplateBatchMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { Templates: [{ TemplateId: 1 }, { TemplateId: 2 }] };
    const response = new RepReportTemplateBatchMerge(json);
    expect(response.Templates).toHaveLength(2);
    expect(response.Templates?.[0]).toBeInstanceOf(ReportTemplate);
    expect(response.Templates?.[0]?.TemplateId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { Templates: [{ TemplateId: 1 }, { TemplateId: 2 }] };
    const response = new RepReportTemplateBatchMerge(json);
    const result = response.toJSON();
    expect(result.Templates).toHaveLength(2);
    expect(result.Templates?.[0]?.TemplateId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepReportTemplateBatchMerge();
    expect(response.action).toBe("batch-merge");
  });

  it("should get the object", () => {
    const json = { Templates: [{ TemplateId: 1 }, { TemplateId: 2 }] };
    const response = new RepReportTemplateBatchMerge(json);
    const obj = response.getObject();
    expect(obj).toHaveLength(2);
    expect(obj?.[0]).toBeInstanceOf(ReportTemplate);
    expect(obj?.[0]?.TemplateId).toBe(1);
  });

  it("should get the companyId", () => {
    const json = { Templates: [{ TemplateId: 1, CompanyId: 100 }] };
    const response = new RepReportTemplateBatchMerge(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
