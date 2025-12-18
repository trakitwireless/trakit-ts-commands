import { describe, it, expect } from "vitest";
import PayProvider from "../../../../commands/Providers/Providers/Requests/PayProvider";

describe("PayProvider", () => {
  it("should create an empty instance", () => {
    const payload = new PayProvider();
    expect(payload).toBeInstanceOf(PayProvider);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderId: 1 };
    const payload = new PayProvider(json);
    expect(payload.ProviderId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProvider();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderGet");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderId: 1 };
    const payload = new PayProvider(json);
    const result = payload.toJSON();
    expect(result.ProviderId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProvider();
    expect(payload.action).toBe("");
  });
});
