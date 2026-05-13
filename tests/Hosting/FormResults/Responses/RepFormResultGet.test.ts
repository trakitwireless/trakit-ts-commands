import { describe, it, expect } from "vitest";
import RepFormResultGet from "../../../../src/Hosting/FormResults/Responses/RepFormResultGet";
import { FormResult } from "@trakit/objects";

describe("RepFormResultGet", () => {
  it("should create an empty instance", () => {
    const response = new RepFormResultGet();
    expect(response).toBeInstanceOf(RepFormResultGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { FormResult: { FormResultId: 1 } };
    const response = new RepFormResultGet(json);
    expect(response.FormResult).toBeInstanceOf(FormResult);
    expect(response.FormResult?.FormResultId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { FormResult: { FormResultId: 1 } };
    const response = new RepFormResultGet(json);
    const result = response.toJSON();
    expect(result.FormResult?.FormResultId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepFormResultGet();
    expect(response.action).toBe("get");
  });

  it("should get the object", () => {
    const json = { FormResult: { FormResultId: 1 } };
    const response = new RepFormResultGet(json);
    expect(response.getObject()).toBeInstanceOf(FormResult);
  });

  it("should get the CompanyId", () => {
    const json = { FormResult: { FormResultId: 1, CompanyId: 100 } };
    const response = new RepFormResultGet(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
