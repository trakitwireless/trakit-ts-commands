import { describe, it, expect } from "vitest";
import PayFormTemplate from "../../../../src/Hosting/FormTemplates/Requests/PayFormTemplate";

describe("PayFormTemplate", () => {
  it("should create an empty instance", () => {
    const payload = new PayFormTemplate();
    expect(payload).toBeInstanceOf(PayFormTemplate);
  });

  it("should create an instance with JSON data", () => {
    const json = { FormTemplateId: 1 };
    const payload = new PayFormTemplate(json);
    expect(payload.FormTemplateId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayFormTemplate();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepFormTemplateGet");
  });

  it("should serialize to JSON", () => {
    const json = { FormTemplateId: 1 };
    const payload = new PayFormTemplate(json);
    const result = payload.toJSON();
    expect(result.FormTemplateId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayFormTemplate();
    expect(payload.action).toBe("");
  });
});
