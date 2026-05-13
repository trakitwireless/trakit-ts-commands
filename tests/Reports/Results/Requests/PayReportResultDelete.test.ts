import { describe, it, expect } from "vitest";
import PayReportResultDelete from "../../../../src/Reports/Results/Requests/PayReportResultDelete";

describe("PayReportResultDelete", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportResultDelete();
    expect(payload).toBeInstanceOf(PayReportResultDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { ResultId: 1 };
    const payload = new PayReportResultDelete(json);
    expect(payload.ResultId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayReportResultDelete();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportResultDelete");
  });

  it("should serialize to JSON", () => {
    const json = { ResultId: 1 };
    const payload = new PayReportResultDelete(json);
    const result = payload.toJSON();
    expect(result.ResultId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayReportResultDelete();
    expect(payload.action).toBe("delete");
  });
});
