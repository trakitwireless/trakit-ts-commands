import { describe, it, expect } from "vitest";
import RepReportScheduleMerge from "../../../../commands/Reports/Schedules/Responses/RepReportScheduleMerge";
import { ReportSchedule } from "@trakit/objects";

describe("RepReportScheduleMerge", () => {
  it("should create an empty instance", () => {
    const response = new RepReportScheduleMerge();
    expect(response).toBeInstanceOf(RepReportScheduleMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { Schedule: { ScheduleId: 1 } };
    const response = new RepReportScheduleMerge(json);
    expect(response.Schedule).toBeInstanceOf(ReportSchedule);
    expect(response.Schedule?.ScheduleId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { Schedule: { ScheduleId: 1 } };
    const response = new RepReportScheduleMerge(json);
    const result = response.toJSON();
    expect(result.Schedule?.ScheduleId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepReportScheduleMerge();
    expect(response.action).toBe("merge");
  });

  it("should get the object", () => {
    const json = { Schedule: { ScheduleId: 1 } };
    const response = new RepReportScheduleMerge(json);
    const obj = response.getObject();
    expect(obj).toBeInstanceOf(ReportSchedule);
    expect(obj?.ScheduleId).toBe(1);
  });

  it("should get the companyId", () => {
    const json = { Schedule: { ScheduleId: 1, CompanyId: 100 } };
    const response = new RepReportScheduleMerge(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
