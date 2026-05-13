import { describe, it, expect } from "vitest";
import PaySubscriptionList from "../../../src/WebSocket/Requests/PaySubscriptionList";

describe("PaySubscriptionList", () => {
  it("should create an empty instance", () => {
    const payload = new PaySubscriptionList();
    expect(payload).toBeInstanceOf(PaySubscriptionList);
  });

  it("should create an instance with JSON data", () => {
    const json = { ConnectionId: "conn-123" };
    const payload = new PaySubscriptionList(json);
    expect(payload.ConnectionId).toBe("conn-123");
  });

  it("should create a reply", () => {
    const payload = new PaySubscriptionList();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepSubscriptionList");
  });

  it("should serialize to JSON", () => {
    const json = { ConnectionId: "conn-123" };
    const payload = new PaySubscriptionList(json);
    const result = payload.toJSON();
    expect(result.ConnectionId).toBe("conn-123");
  });

  it("should have the correct action", () => {
    const payload = new PaySubscriptionList();
    expect(payload.action).toBe("list");
  });
});
