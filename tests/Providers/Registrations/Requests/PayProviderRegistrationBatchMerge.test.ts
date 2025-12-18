import { describe, it, expect } from "vitest";
import PayProviderRegistrationBatchMerge from "../../../../commands/Providers/Registrations/Requests/PayProviderRegistrationBatchMerge";
import { ProviderRegistration } from "@trakit/objects";

describe("PayProviderRegistrationBatchMerge", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderRegistrationBatchMerge();
    expect(payload).toBeInstanceOf(PayProviderRegistrationBatchMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderRegistrations: [{ ProviderRegistrationId: 1 }, { ProviderRegistrationId: 2 }] };
    const payload = new PayProviderRegistrationBatchMerge(json);
    expect(payload.ProviderRegistrations).toHaveLength(2);
    expect(payload.ProviderRegistrations?.[0]).toBeInstanceOf(ProviderRegistration);
    expect(payload.ProviderRegistrations?.[0]?.ProviderRegistrationId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderRegistrationBatchMerge();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderRegistrationBatchMerge");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderRegistrations: [{ ProviderRegistrationId: 1 }, { ProviderRegistrationId: 2 }] };
    const payload = new PayProviderRegistrationBatchMerge(json);
    const result = payload.toJSON();
    expect(result.ProviderRegistrations).toHaveLength(2);
    expect(result.ProviderRegistrations?.[0]?.ProviderRegistrationId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderRegistrationBatchMerge();
    expect(payload.action).toBe("batch-merge");
  });

  it("should get the key from ProviderRegistrations", () => {
    const json = { ProviderRegistrations: [{ ProviderRegistrationId: 1 }, { ProviderRegistrationId: 2 }] };
    const payload = new PayProviderRegistrationBatchMerge(json);
    expect(payload.getKey()).toBe("1,2");
  });
});
