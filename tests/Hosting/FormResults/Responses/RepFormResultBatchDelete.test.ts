import { describe, it, expect } from "vitest";
import RepFormResultBatchDelete from "../../../../src/Hosting/FormResults/Responses/RepFormResultBatchDelete";

describe("RepFormResultBatchDelete", () => {
  it("should create an empty instance", () => {
    const response = new RepFormResultBatchDelete();
    expect(response).toBeInstanceOf(RepFormResultBatchDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { success: true };
    const response = new RepFormResultBatchDelete(json);
    expect(response.success).toBe(true);
  });

  it("should serialize to JSON", () => {
    const json = { success: true };
    const response = new RepFormResultBatchDelete(json);
    const result = response.toJSON();
    expect(result.success).toBe(true);
  });

  it("should have the correct action", () => {
    const response = new RepFormResultBatchDelete();
    expect(response.action).toBe("batch-delete");
  });
});
