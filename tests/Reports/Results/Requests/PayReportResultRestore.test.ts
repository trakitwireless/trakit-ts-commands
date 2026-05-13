import { describe, it, expect } from "vitest";
import PayReportResultRestore from "../../../../src/Reports/Results/Requests/PayReportResultRestore";

describe("PayReportResultRestore", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportResultRestore();
    expect(payload).toBeInstanceOf(PayReportResultRestore);
  });

  it("should create an instance with JSON data", () => {
    const json = { ResultId: 1 };
    const payload = new PayReportResultRestore(json);
    expect(payload.ResultId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayReportResultRestore();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportResultGet");
  });

  it("should serialize to JSON", () => {
    const json = { ResultId: 1 };
    const payload = new PayReportResultRestore(json);
    const result = payload.toJSON();
    expect(result.ResultId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayReportResultRestore();
    expect(payload.action).toBe("restore");
  });
});
