import { describe, it, expect } from "vitest";
import PayReportTemplateMerge from "../../../../commands/Reports/Templates/Requests/PayReportTemplateMerge";
import { ReportTemplate } from "@trakit/objects";

describe("PayReportTemplateMerge", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportTemplateMerge();
    expect(payload).toBeInstanceOf(PayReportTemplateMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { Template: { TemplateId: 1 } };
    const payload = new PayReportTemplateMerge(json);
    expect(payload.Template).toBeInstanceOf(ReportTemplate);
    expect(payload.Template?.TemplateId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayReportTemplateMerge();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportTemplateMerge");
  });

  it("should serialize to JSON", () => {
    const json = { Template: { TemplateId: 1 } };
    const payload = new PayReportTemplateMerge(json);
    const result = payload.toJSON();
    expect(result.Template?.TemplateId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayReportTemplateMerge();
    expect(payload.action).toBe("merge");
  });

  it("should get the key from the Template", () => {
    const json = { Template: { TemplateId: 1 } };
    const payload = new PayReportTemplateMerge(json);
    expect(payload.getKey()).toBe("1");
  });
});
