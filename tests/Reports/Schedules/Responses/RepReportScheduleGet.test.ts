import { describe, it, expect } from "vitest";
import RepReportScheduleGet from "../../../../src/Reports/Schedules/Responses/RepReportScheduleGet";
import { ReportSchedule } from "@trakit/objects";

describe("RepReportScheduleGet", () => {
  it("should create an empty instance", () => {
    const response = new RepReportScheduleGet();
    expect(response).toBeInstanceOf(RepReportScheduleGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { Schedule: { ScheduleId: 1 } };
    const response = new RepReportScheduleGet(json);
    expect(response.Schedule).toBeInstanceOf(ReportSchedule);
    expect(response.Schedule?.ScheduleId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { Schedule: { ScheduleId: 1 } };
    const response = new RepReportScheduleGet(json);
    const result = response.toJSON();
    expect(result.Schedule?.ScheduleId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepReportScheduleGet();
    expect(response.action).toBe("get");
  });

  it("should get the object", () => {
    const json = { Schedule: { ScheduleId: 1 } };
    const response = new RepReportScheduleGet(json);
    const obj = response.getObject();
    expect(obj).toBeInstanceOf(ReportSchedule);
    expect(obj?.ScheduleId).toBe(1);
  });

  it("should get the companyId", () => {
    const json = { Schedule: { ScheduleId: 1, CompanyId: 100 } };
    const response = new RepReportScheduleGet(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
