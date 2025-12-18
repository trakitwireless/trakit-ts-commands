import { describe, it, expect } from "vitest";
import PayFormResultList from "../../../../commands/Hosting/FormResults/Requests/PayFormResultList";

describe("PayFormResultList", () => {
  it("should create an empty instance", () => {
    const payload = new PayFormResultList();
    expect(payload).toBeInstanceOf(PayFormResultList);
  });

  it("should create an instance with JSON data", () => {
    const json = { FormTemplateId: 1 };
    const payload = new PayFormResultList(json);
    expect(payload.FormTemplateId).toBe(1);
  });

  it("should set includeDeleted flag", () => {
    const json = { FormTemplateId: 1, includeDeleted: true };
    const payload = new PayFormResultList(json);
    expect(payload.includeDeleted).toBe(true);
  });

  it("should create a reply", () => {
    const payload = new PayFormResultList();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepFormResultList");
  });

  it("should serialize to JSON", () => {
    const json = { FormTemplateId: 1, includeDeleted: true };
    const payload = new PayFormResultList(json);
    const result = payload.toJSON();
    expect(result.FormTemplateId).toBe(1);
    expect(result.includeDeleted).toBe(true);
  });

  it("should have the correct action", () => {
    const payload = new PayFormResultList();
    expect(payload.action).toBe("list");
  });
});
