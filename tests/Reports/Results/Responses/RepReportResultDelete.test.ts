import { describe, it, expect } from "vitest";
import RepReportResultDelete from "../../../../src/Reports/Results/Responses/RepReportResultDelete";

describe("RepReportResultDelete", () => {
  it("should create an empty instance", () => {
    const response = new RepReportResultDelete();
    expect(response).toBeInstanceOf(RepReportResultDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { ResultId: 1 };
    const response = new RepReportResultDelete(json);
    expect(response.ResultId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { ResultId: 1 };
    const response = new RepReportResultDelete(json);
    const result = response.toJSON();
    expect(result.ResultId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepReportResultDelete();
    expect(response.action).toBe("delete");
  });

  it("should get the object", () => {
    const json = { ResultId: 1 };
    const response = new RepReportResultDelete(json);
    const obj = response.getObject();
    expect(obj).toBe(1);
  });

  it("should get the companyId", () => {
    const json = { ResultId: 1, CompanyId: 100 };
    const response = new RepReportResultDelete(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
