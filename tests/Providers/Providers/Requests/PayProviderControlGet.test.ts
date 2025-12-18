import { describe, it, expect } from "vitest";
import PayProviderControlGet from "../../../../commands/Providers/Providers/Requests/PayProviderControlGet";

describe("PayProviderControlGet", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderControlGet();
    expect(payload).toBeInstanceOf(PayProviderControlGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderId: 1 };
    const payload = new PayProviderControlGet(json);
    expect(payload.ProviderId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderControlGet();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderControlGet");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderId: 1 };
    const payload = new PayProviderControlGet(json);
    const result = payload.toJSON();
    expect(result.ProviderId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderControlGet();
    expect(payload.action).toBe("control-get");
  });
});
