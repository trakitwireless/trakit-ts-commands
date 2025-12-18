import { describe, it, expect } from "vitest";
import PayFormResultGet from "../../../../commands/Hosting/FormResults/Requests/PayFormResultGet";

describe("PayFormResultGet", () => {
  it("should create an empty instance", () => {
    const payload = new PayFormResultGet();
    expect(payload).toBeInstanceOf(PayFormResultGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { FormResultId: 1 };
    const payload = new PayFormResultGet(json);
    expect(payload.FormResultId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayFormResultGet();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepFormResultGet");
  });

  it("should serialize to JSON", () => {
    const json = { FormResultId: 1 };
    const payload = new PayFormResultGet(json);
    const result = payload.toJSON();
    expect(result.FormResultId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayFormResultGet();
    expect(payload.action).toBe("get");
  });
});
