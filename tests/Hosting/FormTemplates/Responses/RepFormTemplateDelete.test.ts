import { describe, it, expect } from "vitest";
import RepFormTemplateDelete from "../../../../commands/Hosting/FormTemplates/Responses/RepFormTemplateDelete";

describe("RepFormTemplateDelete", () => {
  it("should create an empty instance", () => {
    const response = new RepFormTemplateDelete();
    expect(response).toBeInstanceOf(RepFormTemplateDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { success: true };
    const response = new RepFormTemplateDelete(json);
    expect(response.success).toBe(true);
  });

  it("should serialize to JSON", () => {
    const json = { success: true };
    const response = new RepFormTemplateDelete(json);
    const result = response.toJSON();
    expect(result.success).toBe(true);
  });

  it("should have the correct action", () => {
    const response = new RepFormTemplateDelete();
    expect(response.action).toBe("delete");
  });
});
