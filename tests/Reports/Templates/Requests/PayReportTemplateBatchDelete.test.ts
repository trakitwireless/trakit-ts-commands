import { describe, it, expect } from "vitest";
import PayReportTemplateBatchDelete from "../../../../src/Reports/Templates/Requests/PayReportTemplateBatchDelete";

describe("PayReportTemplateBatchDelete", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportTemplateBatchDelete();
    expect(payload).toBeInstanceOf(PayReportTemplateBatchDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { TemplateIds: [1, 2, 3] };
    const payload = new PayReportTemplateBatchDelete(json);
    expect(payload.TemplateIds).toEqual([1, 2, 3]);
  });

  it("should create a reply", () => {
    const payload = new PayReportTemplateBatchDelete();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportTemplateBatchDelete");
  });

  it("should serialize to JSON", () => {
    const json = { TemplateIds: [1, 2, 3] };
    const payload = new PayReportTemplateBatchDelete(json);
    const result = payload.toJSON();
    expect(result.TemplateIds).toEqual([1, 2, 3]);
  });

  it("should have the correct action", () => {
    const payload = new PayReportTemplateBatchDelete();
    expect(payload.action).toBe("batch-delete");
  });
});
