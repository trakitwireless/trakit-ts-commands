import { describe, it, expect } from "vitest";
import RepSubscriptionList from "../../../src/WebSocket/Responses/RepSubscriptionList";
import { Subscription } from "@trakit/objects";

describe("RepSubscriptionList", () => {
  it("should create an empty instance", () => {
    const response = new RepSubscriptionList();
    expect(response).toBeInstanceOf(RepSubscriptionList);
  });

  it("should create an instance with JSON data", () => {
    const json = { Subscriptions: [{ SubscriptionId: "sub-123" }, { SubscriptionId: "sub-456" }] };
    const response = new RepSubscriptionList(json);
    expect(response.Subscriptions).toHaveLength(2);
    expect(response.Subscriptions?.[0]).toBeInstanceOf(Subscription);
    expect(response.Subscriptions?.[0]?.SubscriptionId).toBe("sub-123");
  });

  it("should serialize to JSON", () => {
    const json = { Subscriptions: [{ SubscriptionId: "sub-123" }, { SubscriptionId: "sub-456" }] };
    const response = new RepSubscriptionList(json);
    const result = response.toJSON();
    expect(result.Subscriptions).toHaveLength(2);
    expect(result.Subscriptions?.[0]?.SubscriptionId).toBe("sub-123");
  });

  it("should have the correct action", () => {
    const response = new RepSubscriptionList();
    expect(response.action).toBe("list");
  });

  it("should get the object", () => {
    const json = { Subscriptions: [{ SubscriptionId: "sub-123" }, { SubscriptionId: "sub-456" }] };
    const response = new RepSubscriptionList(json);
    const obj = response.getObject();
    expect(obj).toHaveLength(2);
    expect(obj?.[0]).toBeInstanceOf(Subscription);
    expect(obj?.[0]?.SubscriptionId).toBe("sub-123");
  });

  it("should get the companyId", () => {
    const json = { Subscriptions: [{ SubscriptionId: "sub-123", CompanyId: 100 }] };
    const response = new RepSubscriptionList(json);
    expect(response.getCompanyId()).toBe(100);
  });
});
