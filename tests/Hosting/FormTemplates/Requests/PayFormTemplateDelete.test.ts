import { describe, it, expect } from "vitest";
import PayFormTemplateDelete from "../../../../src/Hosting/FormTemplates/Requests/PayFormTemplateDelete";

describe("PayFormTemplateDelete", () => {
  it("should create an empty instance", () => {
    const payload = new PayFormTemplateDelete();
    expect(payload).toBeInstanceOf(PayFormTemplateDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { FormTemplateId: 1 };
    const payload = new PayFormTemplateDelete(json);
    expect(payload.FormTemplateId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayFormTemplateDelete();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepFormTemplateDelete");
  });

  it("should serialize to JSON", () => {
    const json = { FormTemplateId: 1 };
    const payload = new PayFormTemplateDelete(json);
    const result = payload.toJSON();
    expect(result.FormTemplateId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayFormTemplateDelete();
    expect(payload.action).toBe("delete");
  });
});
