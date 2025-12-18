import { describe, it, expect } from "vitest";
import PayFormTemplateBatchDelete from "../../../../commands/Hosting/FormTemplates/Requests/PayFormTemplateBatchDelete";

describe("PayFormTemplateBatchDelete", () => {
  it("should create an empty instance", () => {
    const payload = new PayFormTemplateBatchDelete();
    expect(payload).toBeInstanceOf(PayFormTemplateBatchDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { FormTemplateIds: [1, 2, 3] };
    const payload = new PayFormTemplateBatchDelete(json);
    expect(payload.FormTemplateIds).toEqual([1, 2, 3]);
  });

  it("should create a reply", () => {
    const payload = new PayFormTemplateBatchDelete();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepFormTemplateBatchDelete");
  });

  it("should serialize to JSON", () => {
    const json = { FormTemplateIds: [1, 2, 3] };
    const payload = new PayFormTemplateBatchDelete(json);
    const result = payload.toJSON();
    expect(result.FormTemplateIds).toEqual([1, 2, 3]);
  });

  it("should have the correct action", () => {
    const payload = new PayFormTemplateBatchDelete();
    expect(payload.action).toBe("batch-delete");
  });
});
