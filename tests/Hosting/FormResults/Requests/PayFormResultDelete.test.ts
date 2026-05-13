import { describe, it, expect } from "vitest";
import PayFormResultDelete from "../../../../src/Hosting/FormResults/Requests/PayFormResultDelete";

describe("PayFormResultDelete", () => {
  it("should create an empty instance", () => {
    const payload = new PayFormResultDelete();
    expect(payload).toBeInstanceOf(PayFormResultDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { FormResultId: 1 };
    const payload = new PayFormResultDelete(json);
    expect(payload.FormResultId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayFormResultDelete();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepFormResultDelete");
  });

  it("should serialize to JSON", () => {
    const json = { FormResultId: 1 };
    const payload = new PayFormResultDelete(json);
    const result = payload.toJSON();
    expect(result.FormResultId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayFormResultDelete();
    expect(payload.action).toBe("delete");
  });
});
