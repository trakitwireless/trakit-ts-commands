import { describe, it, expect } from "vitest";
import PayProviderList from "../../../../commands/Providers/Providers/Requests/PayProviderList";

describe("PayProviderList", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderList();
    expect(payload).toBeInstanceOf(PayProviderList);
  });

  it("should create an instance with JSON data", () => {
    const json = { CompanyId: 1 };
    const payload = new PayProviderList(json);
    expect(payload.CompanyId).toBe(1);
  });

  it("should set includeDeleted flag", () => {
    const json = { CompanyId: 1, includeDeleted: true };
    const payload = new PayProviderList(json);
    expect(payload.includeDeleted).toBe(true);
  });

  it("should create a reply", () => {
    const payload = new PayProviderList();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderList");
  });

  it("should serialize to JSON", () => {
    const json = { CompanyId: 1, includeDeleted: true };
    const payload = new PayProviderList(json);
    const result = payload.toJSON();
    expect(result.CompanyId).toBe(1);
    expect(result.includeDeleted).toBe(true);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderList();
    expect(payload.action).toBe("list");
  });
});
