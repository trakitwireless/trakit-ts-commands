import { describe, it, expect } from "vitest";
import PayProviderConfigurationDelete from "../../../../commands/Providers/Configurations/Requests/PayProviderConfigurationDelete";

describe("PayProviderConfigurationDelete", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderConfigurationDelete();
    expect(payload).toBeInstanceOf(PayProviderConfigurationDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderConfigurationId: 1 };
    const payload = new PayProviderConfigurationDelete(json);
    expect(payload.ProviderConfigurationId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderConfigurationDelete();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderConfigurationDelete");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderConfigurationId: 1 };
    const payload = new PayProviderConfigurationDelete(json);
    const result = payload.toJSON();
    expect(result.ProviderConfigurationId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderConfigurationDelete();
    expect(payload.action).toBe("delete");
  });
});
