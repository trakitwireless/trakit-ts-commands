import { describe, it, expect } from "vitest";
import PayReportScheduleBatchDelete from "../../../../src/Reports/Schedules/Requests/PayReportScheduleBatchDelete";

describe("PayReportScheduleBatchDelete", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportScheduleBatchDelete();
    expect(payload).toBeInstanceOf(PayReportScheduleBatchDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { ScheduleIds: [1, 2, 3] };
    const payload = new PayReportScheduleBatchDelete(json);
    expect(payload.ScheduleIds).toEqual([1, 2, 3]);
  });

  it("should create a reply", () => {
    const payload = new PayReportScheduleBatchDelete();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportScheduleBatchDelete");
  });

  it("should serialize to JSON", () => {
    const json = { ScheduleIds: [1, 2, 3] };
    const payload = new PayReportScheduleBatchDelete(json);
    const result = payload.toJSON();
    expect(result.ScheduleIds).toEqual([1, 2, 3]);
  });

  it("should have the correct action", () => {
    const payload = new PayReportScheduleBatchDelete();
    expect(payload.action).toBe("batch-delete");
  });
});
