import { describe, it, expect } from "vitest";
import PayProviderRegistration from "../../../../src/Providers/Registrations/Requests/PayProviderRegistration";

describe("PayProviderRegistration", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderRegistration();
    expect(payload).toBeInstanceOf(PayProviderRegistration);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderRegistrationId: 1 };
    const payload = new PayProviderRegistration(json);
    expect(payload.ProviderRegistrationId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderRegistration();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderRegistrationGet");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderRegistrationId: 1 };
    const payload = new PayProviderRegistration(json);
    const result = payload.toJSON();
    expect(result.ProviderRegistrationId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderRegistration();
    expect(payload.action).toBe("");
  });
});
