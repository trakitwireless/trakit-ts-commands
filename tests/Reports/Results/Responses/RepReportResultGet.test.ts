import { describe, it, expect } from "vitest";
import RepReportResultGet from "../../../../commands/Reports/Results/Responses/RepReportResultGet";
import { ReportResult } from "@trakit/objects";

describe("RepReportResultGet", () => {
  it("should create an empty instance", () => {
    const response = new RepReportResultGet();
    expect(response).toBeInstanceOf(RepReportResultGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { Result: { ResultId: 1 } };
    const response = new RepReportResultGet(json);
    expect(response.Result).toBeInstanceOf(ReportResult);
    expect(response.Result?.ResultId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { Result: { ResultId: 1 } };
    const response = new RepReportResultGet(json);
    const result = response.toJSON();
    expect(result.Result?.ResultId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepReportResultGet();
    expect(response.action).toBe("get");
  });

  it("should get the object", () => {
    const json = { Result: { ResultId: 1 } };
    const response = new RepReportResultGet(json);
    const obj = response.getObject();
    expect(obj).toBeInstanceOf(ReportResult);
    expect(obj?.ResultId).toBe(1);
  });

  it("should get the companyId", () => {
    const json = { Result: { ResultId: 1, CompanyId: 100 } };
    const response = new RepReportResultGet(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
