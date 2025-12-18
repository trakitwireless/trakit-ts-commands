import { describe, it, expect } from "vitest";
import PayFormTemplateRestore from "../../../../commands/Hosting/FormTemplates/Requests/PayFormTemplateRestore";

describe("PayFormTemplateRestore", () => {
  it("should create an empty instance", () => {
    const payload = new PayFormTemplateRestore();
    expect(payload).toBeInstanceOf(PayFormTemplateRestore);
  });

  it("should create an instance with JSON data", () => {
    const json = { FormTemplateId: 1 };
    const payload = new PayFormTemplateRestore(json);
    expect(payload.FormTemplateId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayFormTemplateRestore();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepFormTemplateGet");
  });

  it("should serialize to JSON", () => {
    const json = { FormTemplateId: 1 };
    const payload = new PayFormTemplateRestore(json);
    const result = payload.toJSON();
    expect(result.FormTemplateId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayFormTemplateRestore();
    expect(payload.action).toBe("restore");
  });
});
