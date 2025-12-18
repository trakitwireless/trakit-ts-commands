import { describe, it, expect } from "vitest";
import RepFormResultMerge from "../../../../commands/Hosting/FormResults/Responses/RepFormResultMerge";
import { FormResult } from "@trakit/objects";

describe("RepFormResultMerge", () => {
  it("should create an empty instance", () => {
    const response = new RepFormResultMerge();
    expect(response).toBeInstanceOf(RepFormResultMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { FormResult: { FormResultId: 1 } };
    const response = new RepFormResultMerge(json);
    expect(response.FormResult).toBeInstanceOf(FormResult);
    expect(response.FormResult?.FormResultId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { FormResult: { FormResultId: 1 } };
    const response = new RepFormResultMerge(json);
    const result = response.toJSON();
    expect(result.FormResult?.FormResultId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepFormResultMerge();
    expect(response.action).toBe("merge");
  });

  it("should get the object", () => {
    const json = { FormResult: { FormResultId: 1 } };
    const response = new RepFormResultMerge(json);
    expect(response.getObject()).toBeInstanceOf(FormResult);
  });

  it("should get the CompanyId", () => {
    const json = { FormResult: { FormResultId: 1, CompanyId: 100 } };
    const response = new RepFormResultMerge(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
