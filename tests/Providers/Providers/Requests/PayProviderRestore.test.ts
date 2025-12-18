import { describe, it, expect } from "vitest";
import PayProviderRestore from "../../../../commands/Providers/Providers/Requests/PayProviderRestore";

describe("PayProviderRestore", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderRestore();
    expect(payload).toBeInstanceOf(PayProviderRestore);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderId: 1 };
    const payload = new PayProviderRestore(json);
    expect(payload.ProviderId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderRestore();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderGet");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderId: 1 };
    const payload = new PayProviderRestore(json);
    const result = payload.toJSON();
    expect(result.ProviderId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderRestore();
    expect(payload.action).toBe("restore");
  });
});
