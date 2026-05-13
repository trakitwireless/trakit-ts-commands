import { describe, it, expect } from "vitest";
import RepReportResultBatchDelete from "../../../../src/Reports/Results/Responses/RepReportResultBatchDelete";

describe("RepReportResultBatchDelete", () => {
  it("should create an empty instance", () => {
    const response = new RepReportResultBatchDelete();
    expect(response).toBeInstanceOf(RepReportResultBatchDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { ResultIds: [1, 2, 3] };
    const response = new RepReportResultBatchDelete(json);
    expect(response.ResultIds).toEqual([1, 2, 3]);
  });

  it("should serialize to JSON", () => {
    const json = { ResultIds: [1, 2, 3] };
    const response = new RepReportResultBatchDelete(json);
    const result = response.toJSON();
    expect(result.ResultIds).toEqual([1, 2, 3]);
  });

  it("should have the correct action", () => {
    const response = new RepReportResultBatchDelete();
    expect(response.action).toBe("batch-delete");
  });

  it("should get the object", () => {
    const json = { ResultIds: [1, 2, 3] };
    const response = new RepReportResultBatchDelete(json);
    const obj = response.getObject();
    expect(obj).toEqual([1, 2, 3]);
  });

  it("should get the companyId", () => {
    const json = { ResultIds: [1, 2, 3], CompanyId: 100 };
    const response = new RepReportResultBatchDelete(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
