import { describe, it, expect } from "vitest";
import PayProviderGeneralGet from "../../../../src/Providers/Providers/Requests/PayProviderGeneralGet";

describe("PayProviderGeneralGet", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderGeneralGet();
    expect(payload).toBeInstanceOf(PayProviderGeneralGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderId: 1 };
    const payload = new PayProviderGeneralGet(json);
    expect(payload.ProviderId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderGeneralGet();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderGeneralGet");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderId: 1 };
    const payload = new PayProviderGeneralGet(json);
    const result = payload.toJSON();
    expect(result.ProviderId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderGeneralGet();
    expect(payload.action).toBe("general-get");
  });
});
