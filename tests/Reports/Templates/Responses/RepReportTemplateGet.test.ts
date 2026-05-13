import { describe, it, expect } from "vitest";
import RepReportTemplateGet from "../../../../src/Reports/Templates/Responses/RepReportTemplateGet";
import { ReportTemplate } from "@trakit/objects";

describe("RepReportTemplateGet", () => {
  it("should create an empty instance", () => {
    const response = new RepReportTemplateGet();
    expect(response).toBeInstanceOf(RepReportTemplateGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { Template: { TemplateId: 1 } };
    const response = new RepReportTemplateGet(json);
    expect(response.Template).toBeInstanceOf(ReportTemplate);
    expect(response.Template?.TemplateId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { Template: { TemplateId: 1 } };
    const response = new RepReportTemplateGet(json);
    const result = response.toJSON();
    expect(result.Template?.TemplateId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepReportTemplateGet();
    expect(response.action).toBe("get");
  });

  it("should get the object", () => {
    const json = { Template: { TemplateId: 1 } };
    const response = new RepReportTemplateGet(json);
    const obj = response.getObject();
    expect(obj).toBeInstanceOf(ReportTemplate);
    expect(obj?.TemplateId).toBe(1);
  });

  it("should get the companyId", () => {
    const json = { Template: { TemplateId: 1, CompanyId: 100 } };
    const response = new RepReportTemplateGet(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
