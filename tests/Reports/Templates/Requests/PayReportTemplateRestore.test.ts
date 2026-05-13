import { describe, it, expect } from "vitest";
import PayReportTemplateRestore from "../../../../src/Reports/Templates/Requests/PayReportTemplateRestore";

describe("PayReportTemplateRestore", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportTemplateRestore();
    expect(payload).toBeInstanceOf(PayReportTemplateRestore);
  });

  it("should create an instance with JSON data", () => {
    const json = { TemplateId: 1 };
    const payload = new PayReportTemplateRestore(json);
    expect(payload.TemplateId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayReportTemplateRestore();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportTemplateGet");
  });

  it("should serialize to JSON", () => {
    const json = { TemplateId: 1 };
    const payload = new PayReportTemplateRestore(json);
    const result = payload.toJSON();
    expect(result.TemplateId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayReportTemplateRestore();
    expect(payload.action).toBe("restore");
  });
});
