import { describe, it, expect } from "vitest";
import RepFormTemplateList from "../../../../src/Hosting/FormTemplates/Responses/RepFormTemplateList";
import { FormTemplate } from "@trakit/objects";

describe("RepFormTemplateList", () => {
  it("should create an empty instance", () => {
    const response = new RepFormTemplateList();
    expect(response).toBeInstanceOf(RepFormTemplateList);
  });

  it("should create an instance with JSON data", () => {
    const json = { FormTemplates: [{ FormTemplateId: 1 }, { FormTemplateId: 2 }] };
    const response = new RepFormTemplateList(json);
    expect(response.FormTemplates).toHaveLength(2);
    expect(response.FormTemplates?.[0]).toBeInstanceOf(FormTemplate);
    expect(response.FormTemplates?.[0]?.FormTemplateId).toBe(1);
  });

  it("should serialize to JSON", () => {
    const json = { FormTemplates: [{ FormTemplateId: 1 }, { FormTemplateId: 2 }] };
    const response = new RepFormTemplateList(json);
    const result = response.toJSON();
    expect(result.FormTemplates).toHaveLength(2);
    expect(result.FormTemplates?.[0]?.FormTemplateId).toBe(1);
  });

  it("should have the correct action", () => {
    const response = new RepFormTemplateList();
    expect(response.action).toBe("list");
  });

  it("should get the object", () => {
    const json = { FormTemplates: [{ FormTemplateId: 1 }] };
    const response = new RepFormTemplateList(json);
    const objects = response.getObject();
    expect(objects).toHaveLength(1);
    expect(objects?.[0]).toBeInstanceOf(FormTemplate);
  });

  it("should get the CompanyId", () => {
    const json = { FormTemplates: [{ FormTemplateId: 1, CompanyId: 100 }] };
    const response = new RepFormTemplateList(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
