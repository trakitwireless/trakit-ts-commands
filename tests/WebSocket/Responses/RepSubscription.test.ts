import { describe, it, expect } from "vitest";
import RepSubscription from "../../../src/WebSocket/Responses/RepSubscription";
import { Subscription } from "@trakit/objects";

describe("RepSubscription", () => {
  it("should create an empty instance", () => {
    const response = new RepSubscription();
    expect(response).toBeInstanceOf(RepSubscription);
  });

  it("should create an instance with JSON data", () => {
    const json = { Subscription: { SubscriptionId: "sub-123" } };
    const response = new RepSubscription(json);
    expect(response.Subscription).toBeInstanceOf(Subscription);
    expect(response.Subscription?.SubscriptionId).toBe("sub-123");
  });

  it("should serialize to JSON", () => {
    const json = { Subscription: { SubscriptionId: "sub-123" } };
    const response = new RepSubscription(json);
    const result = response.toJSON();
    expect(result.Subscription?.SubscriptionId).toBe("sub-123");
  });

  it("should have the correct action", () => {
    const response = new RepSubscription();
    expect(response.action).toBe("");
  });

  it("should get the object", () => {
    const json = { Subscription: { SubscriptionId: "sub-123" } };
    const response = new RepSubscription(json);
    const obj = response.getObject();
    expect(obj).toBeInstanceOf(Subscription);
    expect(obj?.SubscriptionId).toBe("sub-123");
  });

  it("should get the companyId", () => {
    const json = { Subscription: { SubscriptionId: "sub-123", CompanyId: 100 } };
    const response = new RepSubscription(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
