import { describe, it, expect } from "vitest";
import RepFormTemplateBatchDelete from "../../../../commands/Hosting/FormTemplates/Responses/RepFormTemplateBatchDelete";

describe("RepFormTemplateBatchDelete", () => {
  it("should create an empty instance", () => {
    const response = new RepFormTemplateBatchDelete();
    expect(response).toBeInstanceOf(RepFormTemplateBatchDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { success: true };
    const response = new RepFormTemplateBatchDelete(json);
    expect(response.success).toBe(true);
  });

  it("should serialize to JSON", () => {
    const json = { success: true };
    const response = new RepFormTemplateBatchDelete(json);
    const result = response.toJSON();
    expect(result.success).toBe(true);
  });

  it("should have the correct action", () => {
    const response = new RepFormTemplateBatchDelete();
    expect(response.action).toBe("batch-delete");
  });
});
