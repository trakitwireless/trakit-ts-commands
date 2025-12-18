import { describe, it, expect } from "vitest";
import PayFormTemplateMerge from "../../../../commands/Hosting/FormTemplates/Requests/PayFormTemplateMerge";
import { FormTemplate } from "@trakit/objects";

describe("PayFormTemplateMerge", () => {
  it("should create an empty instance", () => {
    const payload = new PayFormTemplateMerge();
    expect(payload).toBeInstanceOf(PayFormTemplateMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { FormTemplate: { FormTemplateId: 1 } };
    const payload = new PayFormTemplateMerge(json);
    expect(payload.FormTemplate).toBeInstanceOf(FormTemplate);
    expect(payload.FormTemplate?.FormTemplateId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayFormTemplateMerge();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepFormTemplateMerge");
  });

  it("should serialize to JSON", () => {
    const json = { FormTemplate: { FormTemplateId: 1 } };
    const payload = new PayFormTemplateMerge(json);
    const result = payload.toJSON();
    expect(result.FormTemplate?.FormTemplateId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayFormTemplateMerge();
    expect(payload.action).toBe("merge");
  });

  it("should get the key from the FormTemplate", () => {
    const json = { FormTemplate: { FormTemplateId: 1 } };
    const payload = new PayFormTemplateMerge(json);
    expect(payload.getKey()).toBe("1");
  });
});
