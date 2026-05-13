import { describe, it, expect } from "vitest";
import PayReportTemplate from "../../../../src/Reports/Templates/Requests/PayReportTemplate";

describe("PayReportTemplate", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportTemplate();
    expect(payload).toBeInstanceOf(PayReportTemplate);
  });

  it("should create an instance with JSON data", () => {
    const json = { TemplateId: 1 };
    const payload = new PayReportTemplate(json);
    expect(payload.TemplateId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayReportTemplate();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportTemplateGet");
  });

  it("should serialize to JSON", () => {
    const json = { TemplateId: 1 };
    const payload = new PayReportTemplate(json);
    const result = payload.toJSON();
    expect(result.TemplateId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayReportTemplate();
    expect(payload.action).toBe("");
  });
});
