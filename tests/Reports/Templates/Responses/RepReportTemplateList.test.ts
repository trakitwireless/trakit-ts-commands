import { describe, it, expect } from "vitest";
import RepReportTemplateList from "../../../../commands/Reports/Templates/Responses/RepReportTemplateList";
import { ReportTemplate } from "@trakit/objects";

describe("RepReportTemplateList", () => {
  it("should create an empty instance", () => {
    const response = new RepReportTemplateList();
    expect(response).toBeInstanceOf(RepReportTemplateList);
  });

  it("should create an instance with JSON data", () => {
    const json = { Templates: [{ TemplateId: 1 }, { TemplateId: 2 }] };
    const response = new RepReportTemplateList(json);
    expect(response.Templates).toHaveLength(2);
    expect(response.Templates?.[0]).toBeInstanceOf(ReportTemplate);
    expect(response.Templates?.[0]?.TemplateId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { Templates: [{ TemplateId: 1 }, { TemplateId: 2 }] };
    const response = new RepReportTemplateList(json);
    const result = response.toJSON();
    expect(result.Templates).toHaveLength(2);
    expect(result.Templates?.[0]?.TemplateId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepReportTemplateList();
    expect(response.action).toBe("list");
  });

  it("should get the object", () => {
    const json = { Templates: [{ TemplateId: 1 }, { TemplateId: 2 }] };
    const response = new RepReportTemplateList(json);
    const obj = response.getObject();
    expect(obj).toHaveLength(2);
    expect(obj?.[0]).toBeInstanceOf(ReportTemplate);
    expect(obj?.[0]?.TemplateId).toBe(1);
  });

  it("should get the companyId", () => {
    const json = { Templates: [{ TemplateId: 1, CompanyId: 100 }] };
    const response = new RepReportTemplateList(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
