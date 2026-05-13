import { describe, it, expect } from "vitest";
import PayFormResult from "../../../../src/Hosting/FormResults/Requests/PayFormResult";

describe("PayFormResult", () => {
  it("should create an empty instance", () => {
    const payload = new PayFormResult();
    expect(payload).toBeInstanceOf(PayFormResult);
  });

  it("should create an instance with JSON data", () => {
    const json = { FormResultId: 1 };
    const payload = new PayFormResult(json);
    expect(payload.FormResultId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayFormResult();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepFormResultGet");
  });

  it("should serialize to JSON", () => {
    const json = { FormResultId: 1 };
    const payload = new PayFormResult(json);
    const result = payload.toJSON();
    expect(result.FormResultId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayFormResult();
    expect(payload.action).toBe("");
  });
});
