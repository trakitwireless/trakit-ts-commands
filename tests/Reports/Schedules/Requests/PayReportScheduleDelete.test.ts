import { describe, it, expect } from "vitest";
import PayReportScheduleDelete from "../../../../commands/Reports/Schedules/Requests/PayReportScheduleDelete";

describe("PayReportScheduleDelete", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportScheduleDelete();
    expect(payload).toBeInstanceOf(PayReportScheduleDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { ScheduleId: 1 };
    const payload = new PayReportScheduleDelete(json);
    expect(payload.ScheduleId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayReportScheduleDelete();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportScheduleDelete");
  });

  it("should serialize to JSON", () => {
    const json = { ScheduleId: 1 };
    const payload = new PayReportScheduleDelete(json);
    const result = payload.toJSON();
    expect(result.ScheduleId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayReportScheduleDelete();
    expect(payload.action).toBe("delete");
  });
});
