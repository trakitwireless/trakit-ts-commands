import { describe, it, expect } from "vitest";
import PayReportResult from "../../../../commands/Reports/Results/Requests/PayReportResult";

describe("PayReportResult", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportResult();
    expect(payload).toBeInstanceOf(PayReportResult);
  });

  it("should create an instance with JSON data", () => {
    const json = { ResultId: 1 };
    const payload = new PayReportResult(json);
    expect(payload.ResultId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayReportResult();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportResultGet");
  });

  it("should serialize to JSON", () => {
    const json = { ResultId: 1 };
    const payload = new PayReportResult(json);
    const result = payload.toJSON();
    expect(result.ResultId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayReportResult();
    expect(payload.action).toBe("");
  });
});
