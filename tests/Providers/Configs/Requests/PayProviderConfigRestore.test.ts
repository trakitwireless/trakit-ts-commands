import { describe, it, expect } from "vitest";
import PayProviderConfigRestore from "../../../../commands/Providers/Configs/Requests/PayProviderConfigRestore";

describe("PayProviderConfigRestore", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderConfigRestore();
    expect(payload).toBeInstanceOf(PayProviderConfigRestore);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderConfigId: 1 };
    const payload = new PayProviderConfigRestore(json);
    expect(payload.ProviderConfigId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderConfigRestore();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderConfigGet");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderConfigId: 1 };
    const payload = new PayProviderConfigRestore(json);
    const result = payload.toJSON();
    expect(result.ProviderConfigId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderConfigRestore();
    expect(payload.action).toBe("restore");
  });
});
