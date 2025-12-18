import { describe, it, expect } from "vitest";
import PayProviderDelete from "../../../../commands/Providers/Providers/Requests/PayProviderDelete";

describe("PayProviderDelete", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderDelete();
    expect(payload).toBeInstanceOf(PayProviderDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderId: 1 };
    const payload = new PayProviderDelete(json);
    expect(payload.ProviderId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderDelete();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderDelete");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderId: 1 };
    const payload = new PayProviderDelete(json);
    const result = payload.toJSON();
    expect(result.ProviderId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderDelete();
    expect(payload.action).toBe("delete");
  });
});
