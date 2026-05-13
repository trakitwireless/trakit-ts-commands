import { describe, it, expect } from "vitest";
import PayFormTemplateBatchMerge from "../../../../src/Hosting/FormTemplates/Requests/PayFormTemplateBatchMerge";
import { FormTemplate } from "@trakit/objects";

describe("PayFormTemplateBatchMerge", () => {
  it("should create an empty instance", () => {
    const payload = new PayFormTemplateBatchMerge();
    expect(payload).toBeInstanceOf(PayFormTemplateBatchMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { FormTemplates: [{ FormTemplateId: 1 }, { FormTemplateId: 2 }] };
    const payload = new PayFormTemplateBatchMerge(json);
    expect(payload.FormTemplates).toHaveLength(2);
    expect(payload.FormTemplates?.[0]).toBeInstanceOf(FormTemplate);
    expect(payload.FormTemplates?.[0]?.FormTemplateId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayFormTemplateBatchMerge();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepFormTemplateBatchMerge");
  });

  it("should serialize to JSON", () => {
    const json = { FormTemplates: [{ FormTemplateId: 1 }, { FormTemplateId: 2 }] };
    const payload = new PayFormTemplateBatchMerge(json);
    const result = payload.toJSON();
    expect(result.FormTemplates).toHaveLength(2);
    expect(result.FormTemplates?.[0]?.FormTemplateId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayFormTemplateBatchMerge();
    expect(payload.action).toBe("batch-merge");
  });

  it("should get the key from FormTemplates", () => {
    const json = { FormTemplates: [{ FormTemplateId: 1 }, { FormTemplateId: 2 }] };
    const payload = new PayFormTemplateBatchMerge(json);
    expect(payload.getKey()).toBe("1,2");
  });
});
