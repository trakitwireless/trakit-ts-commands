import { describe, it, expect } from "vitest";
import RepReportScheduleDelete from "../../../../src/Reports/Schedules/Responses/RepReportScheduleDelete";

describe("RepReportScheduleDelete", () => {
  it("should create an empty instance", () => {
    const response = new RepReportScheduleDelete();
    expect(response).toBeInstanceOf(RepReportScheduleDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { ScheduleId: 1 };
    const response = new RepReportScheduleDelete(json);
    expect(response.ScheduleId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ScheduleId: 1 };
    const response = new RepReportScheduleDelete(json);
    const result = response.toJSON();
    expect(result.ScheduleId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepReportScheduleDelete();
    expect(response.action).toBe("delete");
  });

  it("should get the object", () => {
    const json = { ScheduleId: 1 };
    const response = new RepReportScheduleDelete(json);
    const obj = response.getObject();
    expect(obj).toBe(1);
  });

  it("should get the companyId", () => {
    const json = { ScheduleId: 1, CompanyId: 100 };
    const response = new RepReportScheduleDelete(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
