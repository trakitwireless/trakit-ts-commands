import { describe, it, expect } from "vitest";
import RepReportResultBatchMerge from "../../../../src/Reports/Results/Responses/RepReportResultBatchMerge";
import { ReportResult } from "@trakit/objects";

describe("RepReportResultBatchMerge", () => {
  it("should create an empty instance", () => {
    const response = new RepReportResultBatchMerge();
    expect(response).toBeInstanceOf(RepReportResultBatchMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { Results: [{ ResultId: 1 }, { ResultId: 2 }] };
    const response = new RepReportResultBatchMerge(json);
    expect(response.Results).toHaveLength(2);
    expect(response.Results?.[0]).toBeInstanceOf(ReportResult);
    expect(response.Results?.[0]?.ResultId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { Results: [{ ResultId: 1 }, { ResultId: 2 }] };
    const response = new RepReportResultBatchMerge(json);
    const result = response.toJSON();
    expect(result.Results).toHaveLength(2);
    expect(result.Results?.[0]?.ResultId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepReportResultBatchMerge();
    expect(response.action).toBe("batch-merge");
  });

  it("should get the object", () => {
    const json = { Results: [{ ResultId: 1 }, { ResultId: 2 }] };
    const response = new RepReportResultBatchMerge(json);
    const obj = response.getObject();
    expect(obj).toHaveLength(2);
    expect(obj?.[0]).toBeInstanceOf(ReportResult);
    expect(obj?.[0]?.ResultId).toBe(1);
  });

  it("should get the companyId", () => {
    const json = { Results: [{ ResultId: 1, CompanyId: 100 }] };
    const response = new RepReportResultBatchMerge(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
