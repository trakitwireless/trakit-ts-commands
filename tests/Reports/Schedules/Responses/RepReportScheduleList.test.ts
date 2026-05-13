import { describe, it, expect } from "vitest";
import RepReportScheduleList from "../../../../src/Reports/Schedules/Responses/RepReportScheduleList";
import { ReportSchedule } from "@trakit/objects";

describe("RepReportScheduleList", () => {
  it("should create an empty instance", () => {
    const response = new RepReportScheduleList();
    expect(response).toBeInstanceOf(RepReportScheduleList);
  });

  it("should create an instance with JSON data", () => {
    const json = { Schedules: [{ ScheduleId: 1 }, { ScheduleId: 2 }] };
    const response = new RepReportScheduleList(json);
    expect(response.Schedules).toHaveLength(2);
    expect(response.Schedules?.[0]).toBeInstanceOf(ReportSchedule);
    expect(response.Schedules?.[0]?.ScheduleId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { Schedules: [{ ScheduleId: 1 }, { ScheduleId: 2 }] };
    const response = new RepReportScheduleList(json);
    const result = response.toJSON();
    expect(result.Schedules).toHaveLength(2);
    expect(result.Schedules?.[0]?.ScheduleId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepReportScheduleList();
    expect(response.action).toBe("list");
  });

  it("should get the object", () => {
    const json = { Schedules: [{ ScheduleId: 1 }, { ScheduleId: 2 }] };
    const response = new RepReportScheduleList(json);
    const obj = response.getObject();
    expect(obj).toHaveLength(2);
    expect(obj?.[0]).toBeInstanceOf(ReportSchedule);
    expect(obj?.[0]?.ScheduleId).toBe(1);
  });

  it("should get the companyId", () => {
    const json = { Schedules: [{ ScheduleId: 1, CompanyId: 100 }] };
    const response = new RepReportScheduleList(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
