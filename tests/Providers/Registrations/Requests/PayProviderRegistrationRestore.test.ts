import { describe, it, expect } from "vitest";
import PayProviderRegistrationRestore from "../../../../src/Providers/Registrations/Requests/PayProviderRegistrationRestore";

describe("PayProviderRegistrationRestore", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderRegistrationRestore();
    expect(payload).toBeInstanceOf(PayProviderRegistrationRestore);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderRegistrationId: 1 };
    const payload = new PayProviderRegistrationRestore(json);
    expect(payload.ProviderRegistrationId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderRegistrationRestore();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderRegistrationGet");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderRegistrationId: 1 };
    const payload = new PayProviderRegistrationRestore(json);
    const result = payload.toJSON();
    expect(result.ProviderRegistrationId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderRegistrationRestore();
    expect(payload.action).toBe("restore");
  });
});
