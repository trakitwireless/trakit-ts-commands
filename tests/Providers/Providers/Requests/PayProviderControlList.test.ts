import { describe, it, expect } from "vitest";
import PayProviderControlList from "../../../../commands/Providers/Providers/Requests/PayProviderControlList";

describe("PayProviderControlList", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderControlList();
    expect(payload).toBeInstanceOf(PayProviderControlList);
  });

  it("should create an instance with JSON data", () => {
    const json = { CompanyId: 1 };
    const payload = new PayProviderControlList(json);
    expect(payload.CompanyId).toBe(1);
  });

  it("should set includeDeleted flag", () => {
    const json = { CompanyId: 1, includeDeleted: true };
    const payload = new PayProviderControlList(json);
    expect(payload.includeDeleted).toBe(true);
  });

  it("should create a reply", () => {
    const payload = new PayProviderControlList();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderControlList");
  });

  it("should serialize to JSON", () => {
    const json = { CompanyId: 1, includeDeleted: true };
    const payload = new PayProviderControlList(json);
    const result = payload.toJSON();
    expect(result.CompanyId).toBe(1);
    expect(result.includeDeleted).toBe(true);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderControlList();
    expect(payload.action).toBe("control-list");
  });
});
