import { describe, it, expect } from "vitest";
import PaySubscriptionMerge from "../../../src/WebSocket/Requests/PaySubscriptionMerge";
import { Subscription } from "@trakit/objects";

describe("PaySubscriptionMerge", () => {
  it("should create an empty instance", () => {
    const payload = new PaySubscriptionMerge();
    expect(payload).toBeInstanceOf(PaySubscriptionMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { Subscription: { SubscriptionId: "sub-123" } };
    const payload = new PaySubscriptionMerge(json);
    expect(payload.Subscription).toBeInstanceOf(Subscription);
    expect(payload.Subscription?.SubscriptionId).toBe("sub-123");
  });

  it("should create a reply", () => {
    const payload = new PaySubscriptionMerge();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepSubscription");
  });

  it("should serialize to JSON", () => {
    const json = { Subscription: { SubscriptionId: "sub-123" } };
    const payload = new PaySubscriptionMerge(json);
    const result = payload.toJSON();
    expect(result.Subscription?.SubscriptionId).toBe("sub-123");
  });

  it("should have the correct action", () => {
    const payload = new PaySubscriptionMerge();
    expect(payload.action).toBe("merge");
  });

  it("should get the key from the Subscription", () => {
    const json = { Subscription: { SubscriptionId: "sub-123" } };
    const payload = new PaySubscriptionMerge(json);
    expect(payload.getKey()).toBe("sub-123");
  });
});
