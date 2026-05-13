import { describe, it, expect } from "vitest";
import PayProviderGet from "../../../../src/Providers/Providers/Requests/PayProviderGet";

describe("PayProviderGet", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderGet();
    expect(payload).toBeInstanceOf(PayProviderGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderId: 1 };
    const payload = new PayProviderGet(json);
    expect(payload.ProviderId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderGet();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderGet");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderId: 1 };
    const payload = new PayProviderGet(json);
    const result = payload.toJSON();
    expect(result.ProviderId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderGet();
    expect(payload.action).toBe("get");
  });
});
