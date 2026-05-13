import { describe, it, expect } from "vitest";
import PayReportScheduleMerge from "../../../../src/Reports/Schedules/Requests/PayReportScheduleMerge";
import { ReportSchedule } from "@trakit/objects";

describe("PayReportScheduleMerge", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportScheduleMerge();
    expect(payload).toBeInstanceOf(PayReportScheduleMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { Schedule: { ScheduleId: 1 } };
    const payload = new PayReportScheduleMerge(json);
    expect(payload.Schedule).toBeInstanceOf(ReportSchedule);
    expect(payload.Schedule?.ScheduleId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayReportScheduleMerge();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportScheduleMerge");
  });

  it("should serialize to JSON", () => {
    const json = { Schedule: { ScheduleId: 1 } };
    const payload = new PayReportScheduleMerge(json);
    const result = payload.toJSON();
    expect(result.Schedule?.ScheduleId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayReportScheduleMerge();
    expect(payload.action).toBe("merge");
  });

  it("should get the key from the Schedule", () => {
    const json = { Schedule: { ScheduleId: 1 } };
    const payload = new PayReportScheduleMerge(json);
    expect(payload.getKey()).toBe("1");
  });
});
