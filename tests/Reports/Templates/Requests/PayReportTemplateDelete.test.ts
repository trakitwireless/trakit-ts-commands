import { describe, it, expect } from "vitest";
import PayReportTemplateDelete from "../../../../commands/Reports/Templates/Requests/PayReportTemplateDelete";

describe("PayReportTemplateDelete", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportTemplateDelete();
    expect(payload).toBeInstanceOf(PayReportTemplateDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { TemplateId: 1 };
    const payload = new PayReportTemplateDelete(json);
    expect(payload.TemplateId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayReportTemplateDelete();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportTemplateDelete");
  });

  it("should serialize to JSON", () => {
    const json = { TemplateId: 1 };
    const payload = new PayReportTemplateDelete(json);
    const result = payload.toJSON();
    expect(result.TemplateId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayReportTemplateDelete();
    expect(payload.action).toBe("delete");
  });
});
