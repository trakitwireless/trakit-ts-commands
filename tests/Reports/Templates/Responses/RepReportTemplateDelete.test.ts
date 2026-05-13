import { describe, it, expect } from "vitest";
import RepReportTemplateDelete from "../../../../src/Reports/Templates/Responses/RepReportTemplateDelete";

describe("RepReportTemplateDelete", () => {
  it("should create an empty instance", () => {
    const response = new RepReportTemplateDelete();
    expect(response).toBeInstanceOf(RepReportTemplateDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { TemplateId: 1 };
    const response = new RepReportTemplateDelete(json);
    expect(response.TemplateId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { TemplateId: 1 };
    const response = new RepReportTemplateDelete(json);
    const result = response.toJSON();
    expect(result.TemplateId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepReportTemplateDelete();
    expect(response.action).toBe("delete");
  });

  it("should get the object", () => {
    const json = { TemplateId: 1 };
    const response = new RepReportTemplateDelete(json);
    const obj = response.getObject();
    expect(obj).toBe(1);
  });

  it("should get the companyId", () => {
    const json = { TemplateId: 1, CompanyId: 100 };
    const response = new RepReportTemplateDelete(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
