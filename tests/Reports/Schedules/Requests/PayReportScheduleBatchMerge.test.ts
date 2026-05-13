import { describe, it, expect } from "vitest";
import PayReportScheduleBatchMerge from "../../../../src/Reports/Schedules/Requests/PayReportScheduleBatchMerge";
import { ReportSchedule } from "@trakit/objects";

describe("PayReportScheduleBatchMerge", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportScheduleBatchMerge();
    expect(payload).toBeInstanceOf(PayReportScheduleBatchMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { Schedules: [{ ScheduleId: 1 }, { ScheduleId: 2 }] };
    const payload = new PayReportScheduleBatchMerge(json);
    expect(payload.Schedules).toHaveLength(2);
    expect(payload.Schedules?.[0]).toBeInstanceOf(ReportSchedule);
    expect(payload.Schedules?.[0]?.ScheduleId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayReportScheduleBatchMerge();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportScheduleBatchMerge");
  });

  it("should serialize to JSON", () => {
    const json = { Schedules: [{ ScheduleId: 1 }, { ScheduleId: 2 }] };
    const payload = new PayReportScheduleBatchMerge(json);
    const result = payload.toJSON();
    expect(result.Schedules).toHaveLength(2);
    expect(result.Schedules?.[0]?.ScheduleId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayReportScheduleBatchMerge();
    expect(payload.action).toBe("batch-merge");
  });

  it("should get the key from Schedules", () => {
    const json = { Schedules: [{ ScheduleId: 1 }, { ScheduleId: 2 }] };
    const payload = new PayReportScheduleBatchMerge(json);
    expect(payload.getKey()).toBe("1,2");
  });
});
