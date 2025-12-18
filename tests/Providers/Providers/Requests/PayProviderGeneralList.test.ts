import { describe, it, expect } from "vitest";
import PayProviderGeneralList from "../../../../commands/Providers/Providers/Requests/PayProviderGeneralList";

describe("PayProviderGeneralList", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderGeneralList();
    expect(payload).toBeInstanceOf(PayProviderGeneralList);
  });

  it("should create an instance with JSON data", () => {
    const json = { CompanyId: 1 };
    const payload = new PayProviderGeneralList(json);
    expect(payload.CompanyId).toBe(1);
  });

  it("should set includeDeleted flag", () => {
    const json = { CompanyId: 1, includeDeleted: true };
    const payload = new PayProviderGeneralList(json);
    expect(payload.includeDeleted).toBe(true);
  });

  it("should create a reply", () => {
    const payload = new PayProviderGeneralList();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderGeneralList");
  });

  it("should serialize to JSON", () => {
    const json = { CompanyId: 1, includeDeleted: true };
    const payload = new PayProviderGeneralList(json);
    const result = payload.toJSON();
    expect(result.CompanyId).toBe(1);
    expect(result.includeDeleted).toBe(true);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderGeneralList();
    expect(payload.action).toBe("general-list");
  });
});
