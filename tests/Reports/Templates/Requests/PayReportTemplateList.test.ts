import { describe, it, expect } from "vitest";
import PayReportTemplateList from "../../../../src/Reports/Templates/Requests/PayReportTemplateList";

describe("PayReportTemplateList", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportTemplateList();
    expect(payload).toBeInstanceOf(PayReportTemplateList);
  });

  it("should create an instance with JSON data", () => {
    const json = { CompanyId: 1 };
    const payload = new PayReportTemplateList(json);
    expect(payload.CompanyId).toBe(1);
  });

  it("should set includeDeleted flag", () => {
    const json = { CompanyId: 1, includeDeleted: true };
    const payload = new PayReportTemplateList(json);
    expect(payload.includeDeleted).toBe(true);
  });

  it("should create a reply", () => {
    const payload = new PayReportTemplateList();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportTemplateList");
  });

  it("should serialize to JSON", () => {
    const json = { CompanyId: 1, includeDeleted: true };
    const payload = new PayReportTemplateList(json);
    const result = payload.toJSON();
    expect(result.CompanyId).toBe(1);
    expect(result.includeDeleted).toBe(true);
  });

  it("should have the correct action", () => {
    const payload = new PayReportTemplateList();
    expect(payload.action).toBe("list");
  });
});
