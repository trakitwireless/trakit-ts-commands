import { describe, it, expect } from "vitest";
import RepReportScheduleBatchDelete from "../../../../commands/Reports/Schedules/Responses/RepReportScheduleBatchDelete";

describe("RepReportScheduleBatchDelete", () => {
  it("should create an empty instance", () => {
    const response = new RepReportScheduleBatchDelete();
    expect(response).toBeInstanceOf(RepReportScheduleBatchDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { ScheduleIds: [1, 2, 3] };
    const response = new RepReportScheduleBatchDelete(json);
    expect(response.ScheduleIds).toEqual([1, 2, 3]);
  });

  it("should serialize to JSON", () => {
    const json = { ScheduleIds: [1, 2, 3] };
    const response = new RepReportScheduleBatchDelete(json);
    const result = response.toJSON();
    expect(result.ScheduleIds).toEqual([1, 2, 3]);
  });

  it("should have the correct action", () => {
    const response = new RepReportScheduleBatchDelete();
    expect(response.action).toBe("batch-delete");
  });

  it("should get the object", () => {
    const json = { ScheduleIds: [1, 2, 3] };
    const response = new RepReportScheduleBatchDelete(json);
    const obj = response.getObject();
    expect(obj).toEqual([1, 2, 3]);
  });

  it("should get the companyId", () => {
    const json = { ScheduleIds: [1, 2, 3], CompanyId: 100 };
    const response = new RepReportScheduleBatchDelete(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
