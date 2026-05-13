import { describe, it, expect } from "vitest";
import RepFormResultList from "../../../../src/Hosting/FormResults/Responses/RepFormResultList";
import { FormResult } from "@trakit/objects";

describe("RepFormResultList", () => {
  it("should create an empty instance", () => {
    const response = new RepFormResultList();
    expect(response).toBeInstanceOf(RepFormResultList);
  });

  it("should create an instance with JSON data", () => {
    const json = { FormResults: [{ FormResultId: 1 }, { FormResultId: 2 }] };
    const response = new RepFormResultList(json);
    expect(response.FormResults).toHaveLength(2);
    expect(response.FormResults?.[0]).toBeInstanceOf(FormResult);
    expect(response.FormResults?.[0]?.FormResultId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { FormResults: [{ FormResultId: 1 }, { FormResultId: 2 }] };
    const response = new RepFormResultList(json);
    const result = response.toJSON();
    expect(result.FormResults).toHaveLength(2);
    expect(result.FormResults?.[0]?.FormResultId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepFormResultList();
    expect(response.action).toBe("list");
  });

  it("should get the object", () => {
    const json = { FormResults: [{ FormResultId: 1 }] };
    const response = new RepFormResultList(json);
    const objects = response.getObject();
    expect(objects).toHaveLength(1);
    expect(objects?.[0]).toBeInstanceOf(FormResult);
  });

  it("should get the CompanyId", () => {
    const json = { FormResults: [{ FormResultId: 1, CompanyId: 100 }] };
    const response = new RepFormResultList(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
