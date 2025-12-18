import { describe, it, expect } from "vitest";
import PaySubscriptionDelete from "../../../commands/WebSocket/Requests/PaySubscriptionDelete";

describe("PaySubscriptionDelete", () => {
  it("should create an empty instance", () => {
    const payload = new PaySubscriptionDelete();
    expect(payload).toBeInstanceOf(PaySubscriptionDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { SubscriptionId: "sub-123" };
    const payload = new PaySubscriptionDelete(json);
    expect(payload.SubscriptionId).toBe("sub-123");
  });

  it("should create a reply", () => {
    const payload = new PaySubscriptionDelete();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepSubscription");
  });

  it("should serialize to JSON", () => {
    const json = { SubscriptionId: "sub-123" };
    const payload = new PaySubscriptionDelete(json);
    const result = payload.toJSON();
    expect(result.SubscriptionId).toBe("sub-123");
  });

  it("should have the correct action", () => {
    const payload = new PaySubscriptionDelete();
    expect(payload.action).toBe("delete");
  });
});
