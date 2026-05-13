import { describe, it, expect } from "vitest";
import PayFormResultMerge from "../../../../src/Hosting/FormResults/Requests/PayFormResultMerge";
import { FormResult } from "@trakit/objects";

describe("PayFormResultMerge", () => {
  it("should create an empty instance", () => {
    const payload = new PayFormResultMerge();
    expect(payload).toBeInstanceOf(PayFormResultMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { FormResult: { FormResultId: 1 } };
    const payload = new PayFormResultMerge(json);
    expect(payload.FormResult).toBeInstanceOf(FormResult);
    expect(payload.FormResult?.FormResultId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayFormResultMerge();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepFormResultMerge");
  });

  it("should serialize to JSON", () => {
    const json = { FormResult: { FormResultId: 1 } };
    const payload = new PayFormResultMerge(json);
    const result = payload.toJSON();
    expect(result.FormResult?.FormResultId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayFormResultMerge();
    expect(payload.action).toBe("merge");
  });

  it("should get the key from the FormResult", () => {
    const json = { FormResult: { FormResultId: 1 } };
    const payload = new PayFormResultMerge(json);
    expect(payload.getKey()).toBe("1");
  });
});
