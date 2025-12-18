import { describe, it, expect } from "vitest";
import PayReportSchedule from "../../../../commands/Reports/Schedules/Requests/PayReportSchedule";

describe("PayReportSchedule", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportSchedule();
    expect(payload).toBeInstanceOf(PayReportSchedule);
  });

  it("should create an instance with JSON data", () => {
    const json = { ScheduleId: 1 };
    const payload = new PayReportSchedule(json);
    expect(payload.ScheduleId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayReportSchedule();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportScheduleGet");
  });

  it("should serialize to JSON", () => {
    const json = { ScheduleId: 1 };
    const payload = new PayReportSchedule(json);
    const result = payload.toJSON();
    expect(result.ScheduleId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayReportSchedule();
    expect(payload.action).toBe("");
  });
});
