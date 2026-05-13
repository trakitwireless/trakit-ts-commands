import { describe, it, expect } from "vitest";
import PayReportResultList from "../../../../src/Reports/Results/Requests/PayReportResultList";

describe("PayReportResultList", () => {
  it("should create an empty instance", () => {
    const payload = new PayReportResultList();
    expect(payload).toBeInstanceOf(PayReportResultList);
  });

  it("should create an instance with JSON data", () => {
    const json = { ReportId: 1 };
    const payload = new PayReportResultList(json);
    expect(payload.ReportId).toBe(1);
  });

  it("should set includeDeleted flag", () => {
    const json = { ReportId: 1, includeDeleted: true };
    const payload = new PayReportResultList(json);
    expect(payload.includeDeleted).toBe(true);
  });

  it("should create a reply", () => {
    const payload = new PayReportResultList();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepReportResultList");
  });

  it("should serialize to JSON", () => {
    const json = { ReportId: 1, includeDeleted: true };
    const payload = new PayReportResultList(json);
    const result = payload.toJSON();
    expect(result.ReportId).toBe(1);
    expect(result.includeDeleted).toBe(true);
  });

  it("should have the correct action", () => {
    const payload = new PayReportResultList();
    expect(payload.action).toBe("list");
  });
});
