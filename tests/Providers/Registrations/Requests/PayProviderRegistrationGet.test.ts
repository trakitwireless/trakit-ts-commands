import { describe, it, expect } from "vitest";
import PayProviderRegistrationGet from "../../../../src/Providers/Registrations/Requests/PayProviderRegistrationGet";

describe("PayProviderRegistrationGet", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderRegistrationGet();
    expect(payload).toBeInstanceOf(PayProviderRegistrationGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderRegistrationId: 1 };
    const payload = new PayProviderRegistrationGet(json);
    expect(payload.ProviderRegistrationId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderRegistrationGet();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderRegistrationGet");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderRegistrationId: 1 };
    const payload = new PayProviderRegistrationGet(json);
    const result = payload.toJSON();
    expect(result.ProviderRegistrationId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderRegistrationGet();
    expect(payload.action).toBe("get");
  });
});
