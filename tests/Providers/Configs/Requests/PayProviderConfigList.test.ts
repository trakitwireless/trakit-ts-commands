import { describe, it, expect } from "vitest";
import PayProviderConfigList from "../../../../commands/Providers/Configs/Requests/PayProviderConfigList";

describe("PayProviderConfigList", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderConfigList();
    expect(payload).toBeInstanceOf(PayProviderConfigList);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderId: 1 };
    const payload = new PayProviderConfigList(json);
    expect(payload.ProviderId).toBe(1);
  });

  it("should set includeDeleted flag", () => {
    const json = { ProviderId: 1, includeDeleted: true };
    const payload = new PayProviderConfigList(json);
    expect(payload.includeDeleted).toBe(true);
  });

  it("should create a reply", () => {
    const payload = new PayProviderConfigList();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderConfigList");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderId: 1, includeDeleted: true };
    const payload = new PayProviderConfigList(json);
    const result = payload.toJSON();
    expect(result.ProviderId).toBe(1);
    expect(result.includeDeleted).toBe(true);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderConfigList();
    expect(payload.action).toBe("list");
  });
});
