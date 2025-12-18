import { describe, it, expect } from "vitest";
import PayFormTemplateList from "../../../../commands/Hosting/FormTemplates/Requests/PayFormTemplateList";

describe("PayFormTemplateList", () => {
  it("should create an empty instance", () => {
    const payload = new PayFormTemplateList();
    expect(payload).toBeInstanceOf(PayFormTemplateList);
  });

  it("should create an instance with JSON data", () => {
    const json = { CompanyId: 1 };
    const payload = new PayFormTemplateList(json);
    expect(payload.CompanyId).toBe(1);
  });

  it("should set includeDeleted flag", () => {
    const json = { CompanyId: 1, includeDeleted: true };
    const payload = new PayFormTemplateList(json);
    expect(payload.includeDeleted).toBe(true);
  });

  it("should create a reply", () => {
    const payload = new PayFormTemplateList();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepFormTemplateList");
  });

  it("should serialize to JSON", () => {
    const json = { CompanyId: 1, includeDeleted: true };
    const payload = new PayFormTemplateList(json);
    const result = payload.toJSON();
    expect(result.CompanyId).toBe(1);
    expect(result.includeDeleted).toBe(true);
  });

  it("should have the correct action", () => {
    const payload = new PayFormTemplateList();
    expect(payload.action).toBe("list");
  });
});
