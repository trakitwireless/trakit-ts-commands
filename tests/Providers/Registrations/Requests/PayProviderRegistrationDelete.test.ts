import { describe, it, expect } from "vitest";
import PayProviderRegistrationDelete from "../../../../src/Providers/Registrations/Requests/PayProviderRegistrationDelete";

describe("PayProviderRegistrationDelete", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderRegistrationDelete();
    expect(payload).toBeInstanceOf(PayProviderRegistrationDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderRegistrationId: 1 };
    const payload = new PayProviderRegistrationDelete(json);
    expect(payload.ProviderRegistrationId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderRegistrationDelete();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderRegistrationDelete");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderRegistrationId: 1 };
    const payload = new PayProviderRegistrationDelete(json);
    const result = payload.toJSON();
    expect(result.ProviderRegistrationId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderRegistrationDelete();
    expect(payload.action).toBe("delete");
  });
});
