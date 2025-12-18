import { describe, it, expect } from "vitest";
import RepFormTemplateGet from "../../../../commands/Hosting/FormTemplates/Responses/RepFormTemplateGet";
import { FormTemplate } from "@trakit/objects";

describe("RepFormTemplateGet", () => {
  it("should create an empty instance", () => {
    const response = new RepFormTemplateGet();
    expect(response).toBeInstanceOf(RepFormTemplateGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { FormTemplate: { FormTemplateId: 1 } };
    const response = new RepFormTemplateGet(json);
    expect(response.FormTemplate).toBeInstanceOf(FormTemplate);
    expect(response.FormTemplate?.FormTemplateId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { FormTemplate: { FormTemplateId: 1 } };
    const response = new RepFormTemplateGet(json);
    const result = response.toJSON();
    expect(result.FormTemplate?.FormTemplateId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepFormTemplateGet();
    expect(response.action).toBe("get");
  });

  it("should get the object", () => {
    const json = { FormTemplate: { FormTemplateId: 1 } };
    const response = new RepFormTemplateGet(json);
    expect(response.getObject()).toBeInstanceOf(FormTemplate);
  });

  it("should get the CompanyId", () => {
    const json = { FormTemplate: { FormTemplateId: 1, CompanyId: 100 } };
    const response = new RepFormTemplateGet(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
