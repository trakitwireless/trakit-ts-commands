import { describe, it, expect } from "vitest";
import RepReportResultMerge from "../../../../src/Reports/Results/Responses/RepReportResultMerge";
import { ReportResult } from "@trakit/objects";

describe("RepReportResultMerge", () => {
  it("should create an empty instance", () => {
    const response = new RepReportResultMerge();
    expect(response).toBeInstanceOf(RepReportResultMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { Result: { ResultId: 1 } };
    const response = new RepReportResultMerge(json);
    expect(response.Result).toBeInstanceOf(ReportResult);
    expect(response.Result?.ResultId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { Result: { ResultId: 1 } };
    const response = new RepReportResultMerge(json);
    const result = response.toJSON();
    expect(result.Result?.ResultId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepReportResultMerge();
    expect(response.action).toBe("merge");
  });

  it("should get the object", () => {
    const json = { Result: { ResultId: 1 } };
    const response = new RepReportResultMerge(json);
    const obj = response.getObject();
    expect(obj).toBeInstanceOf(ReportResult);
    expect(obj?.ResultId).toBe(1);
  });

  it("should get the companyId", () => {
    const json = { Result: { ResultId: 1, CompanyId: 100 } };
    const response = new RepReportResultMerge(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
