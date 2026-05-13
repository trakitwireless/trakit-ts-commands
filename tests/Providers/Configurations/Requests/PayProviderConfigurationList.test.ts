import { describe, it, expect } from "vitest";
import PayProviderConfigurationList from "../../../../src/Providers/Configurations/Requests/PayProviderConfigurationList";

describe("PayProviderConfigurationList", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderConfigurationList();
    expect(payload).toBeInstanceOf(PayProviderConfigurationList);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderId: 1 };
    const payload = new PayProviderConfigurationList(json);
    expect(payload.ProviderId).toBe(1);
  });

  it("should set includeDeleted flag", () => {
    const json = { ProviderId: 1, includeDeleted: true };
    const payload = new PayProviderConfigurationList(json);
    expect(payload.includeDeleted).toBe(true);
  });

  it("should create a reply", () => {
    const payload = new PayProviderConfigurationList();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderConfigurationList");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderId: 1, includeDeleted: true };
    const payload = new PayProviderConfigurationList(json);
    const result = payload.toJSON();
    expect(result.ProviderId).toBe(1);
    expect(result.includeDeleted).toBe(true);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderConfigurationList();
    expect(payload.action).toBe("list");
  });
});
