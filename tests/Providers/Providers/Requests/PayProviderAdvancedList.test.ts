import { describe, it, expect } from "vitest";
import PayProviderAdvancedList from "../../../../src/Providers/Providers/Requests/PayProviderAdvancedList";

describe("PayProviderAdvancedList", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderAdvancedList();
    expect(payload).toBeInstanceOf(PayProviderAdvancedList);
  });

  it("should create an instance with JSON data", () => {
    const json = { CompanyId: 1 };
    const payload = new PayProviderAdvancedList(json);
    expect(payload.CompanyId).toBe(1);
  });

  it("should set includeDeleted flag", () => {
    const json = { CompanyId: 1, includeDeleted: true };
    const payload = new PayProviderAdvancedList(json);
    expect(payload.includeDeleted).toBe(true);
  });

  it("should create a reply", () => {
    const payload = new PayProviderAdvancedList();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderAdvancedList");
  });

  it("should serialize to JSON", () => {
    const json = { CompanyId: 1, includeDeleted: true };
    const payload = new PayProviderAdvancedList(json);
    const result = payload.toJSON();
    expect(result.CompanyId).toBe(1);
    expect(result.includeDeleted).toBe(true);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderAdvancedList();
    expect(payload.action).toBe("advanced-list");
  });
});
