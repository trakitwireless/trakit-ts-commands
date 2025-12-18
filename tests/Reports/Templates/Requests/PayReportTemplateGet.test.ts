import { describe, it, expect } from "vitest";
import PayReportTemplateGet from "../../../../commands/Reports/Templates/Requests/PayReportTemplateGet";

describe("PayReportTemplateGet", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportTemplateGet();
    expect(payload).toBeInstanceOf(PayReportTemplateGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { TemplateId: 1 };
    const payload = new PayReportTemplateGet(json);
    expect(payload.TemplateId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayReportTemplateGet();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportTemplateGet");
  });

  it("should serialize to JSON", () => {
    const json = { TemplateId: 1 };
    const payload = new PayReportTemplateGet(json);
    const result = payload.toJSON();
    expect(result.TemplateId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayReportTemplateGet();
    expect(payload.action).toBe("get");
  });
});
