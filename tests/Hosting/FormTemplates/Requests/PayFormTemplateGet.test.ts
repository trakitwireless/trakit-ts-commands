import { describe, it, expect } from "vitest";
import PayFormTemplateGet from "../../../../commands/Hosting/FormTemplates/Requests/PayFormTemplateGet";

describe("PayFormTemplateGet", () => {
  it("should create an empty instance", () => {
    const payload = new PayFormTemplateGet();
    expect(payload).toBeInstanceOf(PayFormTemplateGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { FormTemplateId: 1 };
    const payload = new PayFormTemplateGet(json);
    expect(payload.FormTemplateId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayFormTemplateGet();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepFormTemplateGet");
  });

  it("should serialize to JSON", () => {
    const json = { FormTemplateId: 1 };
    const payload = new PayFormTemplateGet(json);
    const result = payload.toJSON();
    expect(result.FormTemplateId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayFormTemplateGet();
    expect(payload.action).toBe("get");
  });
});
