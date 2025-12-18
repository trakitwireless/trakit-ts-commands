import { describe, it, expect } from "vitest";
import PayProviderRegistrationBatchDelete from "../../../../commands/Providers/Registrations/Requests/PayProviderRegistrationBatchDelete";

describe("PayProviderRegistrationBatchDelete", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderRegistrationBatchDelete();
    expect(payload).toBeInstanceOf(PayProviderRegistrationBatchDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderRegistrationIds: [1, 2, 3] };
    const payload = new PayProviderRegistrationBatchDelete(json);
    expect(payload.ProviderRegistrationIds).toEqual([1, 2, 3]);
  });

  it("should create a reply", () => {
    const payload = new PayProviderRegistrationBatchDelete();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderRegistrationBatchDelete");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderRegistrationIds: [1, 2, 3] };
    const payload = new PayProviderRegistrationBatchDelete(json);
    const result = payload.toJSON();
    expect(result.ProviderRegistrationIds).toEqual([1, 2, 3]);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderRegistrationBatchDelete();
    expect(payload.action).toBe("batch-delete");
  });
});
