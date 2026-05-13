import { describe, it, expect } from "vitest";
import PayReportScheduleRestore from "../../../../src/Reports/Schedules/Requests/PayReportScheduleRestore";

describe("PayReportScheduleRestore", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportScheduleRestore();
    expect(payload).toBeInstanceOf(PayReportScheduleRestore);
  });

  it("should create an instance with JSON data", () => {
    const json = { ScheduleId: 1 };
    const payload = new PayReportScheduleRestore(json);
    expect(payload.ScheduleId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayReportScheduleRestore();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportScheduleGet");
  });

  it("should serialize to JSON", () => {
    const json = { ScheduleId: 1 };
    const payload = new PayReportScheduleRestore(json);
    const result = payload.toJSON();
    expect(result.ScheduleId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayReportScheduleRestore();
    expect(payload.action).toBe("restore");
  });
});
