import { describe, it, expect } from "vitest";
import PayReportResultGet from "../../../../commands/Reports/Results/Requests/PayReportResultGet";

describe("PayReportResultGet", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportResultGet();
    expect(payload).toBeInstanceOf(PayReportResultGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { ResultId: 1 };
    const payload = new PayReportResultGet(json);
    expect(payload.ResultId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayReportResultGet();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportResultGet");
  });

  it("should serialize to JSON", () => {
    const json = { ResultId: 1 };
    const payload = new PayReportResultGet(json);
    const result = payload.toJSON();
    expect(result.ResultId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayReportResultGet();
    expect(payload.action).toBe("get");
  });
});
