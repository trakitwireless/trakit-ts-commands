import { describe, it, expect } from "vitest";
import PayReportScheduleList from "../../../../src/Reports/Schedules/Requests/PayReportScheduleList";

describe("PayReportScheduleList", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportScheduleList();
    expect(payload).toBeInstanceOf(PayReportScheduleList);
  });

  it("should create an instance with JSON data", () => {
    const json = { ReportId: 1 };
    const payload = new PayReportScheduleList(json);
    expect(payload.ReportId).toBe(1);
  });

  it("should set includeDeleted flag", () => {
    const json = { ReportId: 1, includeDeleted: true };
    const payload = new PayReportScheduleList(json);
    expect(payload.includeDeleted).toBe(true);
  });

  it("should create a reply", () => {
    const payload = new PayReportScheduleList();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportScheduleList");
  });

  it("should serialize to JSON", () => {
    const json = { ReportId: 1, includeDeleted: true };
    const payload = new PayReportScheduleList(json);
    const result = payload.toJSON();
    expect(result.ReportId).toBe(1);
    expect(result.includeDeleted).toBe(true);
  });

  it("should have the correct action", () => {
    const payload = new PayReportScheduleList();
    expect(payload.action).toBe("list");
  });
});
