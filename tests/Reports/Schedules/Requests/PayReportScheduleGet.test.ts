import { describe, it, expect } from "vitest";
import PayReportScheduleGet from "../../../../commands/Reports/Schedules/Requests/PayReportScheduleGet";

describe("PayReportScheduleGet", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportScheduleGet();
    expect(payload).toBeInstanceOf(PayReportScheduleGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { ScheduleId: 1 };
    const payload = new PayReportScheduleGet(json);
    expect(payload.ScheduleId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayReportScheduleGet();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportScheduleGet");
  });

  it("should serialize to JSON", () => {
    const json = { ScheduleId: 1 };
    const payload = new PayReportScheduleGet(json);
    const result = payload.toJSON();
    expect(result.ScheduleId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayReportScheduleGet();
    expect(payload.action).toBe("get");
  });
});
