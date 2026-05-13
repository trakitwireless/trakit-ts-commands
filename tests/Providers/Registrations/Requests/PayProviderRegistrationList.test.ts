import { describe, it, expect } from "vitest";
import PayProviderRegistrationList from "../../../../src/Providers/Registrations/Requests/PayProviderRegistrationList";

describe("PayProviderRegistrationList", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderRegistrationList();
    expect(payload).toBeInstanceOf(PayProviderRegistrationList);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderId: 1 };
    const payload = new PayProviderRegistrationList(json);
    expect(payload.ProviderId).toBe(1);
  });

  it("should set includeDeleted flag", () => {
    const json = { ProviderId: 1, includeDeleted: true };
    const payload = new PayProviderRegistrationList(json);
    expect(payload.includeDeleted).toBe(true);
  });

  it("should create a reply", () => {
    const payload = new PayProviderRegistrationList();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderRegistrationList");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderId: 1, includeDeleted: true };
    const payload = new PayProviderRegistrationList(json);
    const result = payload.toJSON();
    expect(result.ProviderId).toBe(1);
    expect(result.includeDeleted).toBe(true);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderRegistrationList();
    expect(payload.action).toBe("list");
  });
});
