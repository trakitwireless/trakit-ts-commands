import { describe, it, expect } from "vitest";
import PayProviderRegistrationMerge from "../../../../src/Providers/Registrations/Requests/PayProviderRegistrationMerge";
import { ProviderRegistration } from "@trakit/objects";

describe("PayProviderRegistrationMerge", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderRegistrationMerge();
    expect(payload).toBeInstanceOf(PayProviderRegistrationMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderRegistration: { ProviderRegistrationId: 1 } };
    const payload = new PayProviderRegistrationMerge(json);
    expect(payload.ProviderRegistration).toBeInstanceOf(ProviderRegistration);
    expect(payload.ProviderRegistration?.ProviderRegistrationId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderRegistrationMerge();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderRegistrationMerge");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderRegistration: { ProviderRegistrationId: 1 } };
    const payload = new PayProviderRegistrationMerge(json);
    const result = payload.toJSON();
    expect(result.ProviderRegistration?.ProviderRegistrationId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderRegistrationMerge();
    expect(payload.action).toBe("merge");
  });

  it("should get the key from the ProviderRegistration", () => {
    const json = { ProviderRegistration: { ProviderRegistrationId: 1 } };
    const payload = new PayProviderRegistrationMerge(json);
    expect(payload.getKey()).toBe("1");
  });
});
