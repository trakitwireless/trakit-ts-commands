import { describe, it, expect } from "vitest";
import PayReportResultBatchMerge from "../../../../src/Reports/Results/Requests/PayReportResultBatchMerge";
import { ReportResult } from "@trakit/objects";

describe("PayReportResultBatchMerge", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportResultBatchMerge();
    expect(payload).toBeInstanceOf(PayReportResultBatchMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { Results: [{ ResultId: 1 }, { ResultId: 2 }] };
    const payload = new PayReportResultBatchMerge(json);
    expect(payload.Results).toHaveLength(2);
    expect(payload.Results?.[0]).toBeInstanceOf(ReportResult);
    expect(payload.Results?.[0]?.ResultId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayReportResultBatchMerge();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportResultBatchMerge");
  });

  it("should serialize to JSON", () => {
    const json = { Results: [{ ResultId: 1 }, { ResultId: 2 }] };
    const payload = new PayReportResultBatchMerge(json);
    const result = payload.toJSON();
    expect(result.Results).toHaveLength(2);
    expect(result.Results?.[0]?.ResultId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayReportResultBatchMerge();
    expect(payload.action).toBe("batch-merge");
  });

  it("should get the key from Results", () => {
    const json = { Results: [{ ResultId: 1 }, { ResultId: 2 }] };
    const payload = new PayReportResultBatchMerge(json);
    expect(payload.getKey()).toBe("1,2");
  });
});
