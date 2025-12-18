import { describe, it, expect } from "vitest";
import PayFormResultRestore from "../../../../commands/Hosting/FormResults/Requests/PayFormResultRestore";

describe("PayFormResultRestore", () => {
  it("should create an empty instance", () => {
    const payload = new PayFormResultRestore();
    expect(payload).toBeInstanceOf(PayFormResultRestore);
  });

  it("should create an instance with JSON data", () => {
    const json = { FormResultId: 1 };
    const payload = new PayFormResultRestore(json);
    expect(payload.FormResultId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayFormResultRestore();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepFormResultGet");
  });

  it("should serialize to JSON", () => {
    const json = { FormResultId: 1 };
    const payload = new PayFormResultRestore(json);
    const result = payload.toJSON();
    expect(result.FormResultId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayFormResultRestore();
    expect(payload.action).toBe("restore");
  });
});
