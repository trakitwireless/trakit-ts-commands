import { describe, it, expect } from "vitest";
import PayReportTemplateBatchMerge from "../../../../commands/Reports/Templates/Requests/PayReportTemplateBatchMerge";
import { ReportTemplate } from "@trakit/objects";

describe("PayReportTemplateBatchMerge", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportTemplateBatchMerge();
    expect(payload).toBeInstanceOf(PayReportTemplateBatchMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { Templates: [{ TemplateId: 1 }, { TemplateId: 2 }] };
    const payload = new PayReportTemplateBatchMerge(json);
    expect(payload.Templates).toHaveLength(2);
    expect(payload.Templates?.[0]).toBeInstanceOf(ReportTemplate);
    expect(payload.Templates?.[0]?.TemplateId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayReportTemplateBatchMerge();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportTemplateBatchMerge");
  });

  it("should serialize to JSON", () => {
    const json = { Templates: [{ TemplateId: 1 }, { TemplateId: 2 }] };
    const payload = new PayReportTemplateBatchMerge(json);
    const result = payload.toJSON();
    expect(result.Templates).toHaveLength(2);
    expect(result.Templates?.[0]?.TemplateId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayReportTemplateBatchMerge();
    expect(payload.action).toBe("batch-merge");
  });

  it("should get the key from Templates", () => {
    const json = { Templates: [{ TemplateId: 1 }, { TemplateId: 2 }] };
    const payload = new PayReportTemplateBatchMerge(json);
    expect(payload.getKey()).toBe("1,2");
  });
});
