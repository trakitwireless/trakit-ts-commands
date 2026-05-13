import { describe, it, expect } from "vitest";
import PayReportResultMerge from "../../../../src/Reports/Results/Requests/PayReportResultMerge";
import { ReportResult } from "@trakit/objects";

describe("PayReportResultMerge", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportResultMerge();
    expect(payload).toBeInstanceOf(PayReportResultMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { Result: { ResultId: 1 } };
    const payload = new PayReportResultMerge(json);
    expect(payload.Result).toBeInstanceOf(ReportResult);
    expect(payload.Result?.ResultId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayReportResultMerge();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportResultMerge");
  });

  it("should serialize to JSON", () => {
    const json = { Result: { ResultId: 1 } };
    const payload = new PayReportResultMerge(json);
    const result = payload.toJSON();
    expect(result.Result?.ResultId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayReportResultMerge();
    expect(payload.action).toBe("merge");
  });

  it("should get the key from the Result", () => {
    const json = { Result: { ResultId: 1 } };
    const payload = new PayReportResultMerge(json);
    expect(payload.getKey()).toBe("1");
  });
});
