import { describe, it, expect } from "vitest";
import PayProviderScriptList from "../../../../src/Providers/Scripts/Requests/PayProviderScriptList";

describe("PayProviderScriptList", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderScriptList();
    expect(payload).toBeInstanceOf(PayProviderScriptList);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderId: 1 };
    const payload = new PayProviderScriptList(json);
    expect(payload.ProviderId).toBe(1);
  });

  it("should set includeDeleted flag", () => {
    const json = { ProviderId: 1, includeDeleted: true };
    const payload = new PayProviderScriptList(json);
    expect(payload.includeDeleted).toBe(true);
  });

  it("should create a reply", () => {
    const payload = new PayProviderScriptList();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderScriptList");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderId: 1, includeDeleted: true };
    const payload = new PayProviderScriptList(json);
    const result = payload.toJSON();
    expect(result.ProviderId).toBe(1);
    expect(result.includeDeleted).toBe(true);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderScriptList();
    expect(payload.action).toBe("list");
  });
});
