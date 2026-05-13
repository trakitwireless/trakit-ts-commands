import { describe, it, expect } from "vitest";
import PayReportResultBatchDelete from "../../../../src/Reports/Results/Requests/PayReportResultBatchDelete";

describe("PayReportResultBatchDelete", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportResultBatchDelete();
    expect(payload).toBeInstanceOf(PayReportResultBatchDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { ResultIds: [1, 2, 3] };
    const payload = new PayReportResultBatchDelete(json);
    expect(payload.ResultIds).toEqual([1, 2, 3]);
  });

  it("should create a reply", () => {
    const payload = new PayReportResultBatchDelete();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportResultBatchDelete");
  });

  it("should serialize to JSON", () => {
    const json = { ResultIds: [1, 2, 3] };
    const payload = new PayReportResultBatchDelete(json);
    const result = payload.toJSON();
    expect(result.ResultIds).toEqual([1, 2, 3]);
  });

  it("should have the correct action", () => {
    const payload = new PayReportResultBatchDelete();
    expect(payload.action).toBe("batch-delete");
  });
});
