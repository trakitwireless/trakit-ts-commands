import { describe, it, expect } from "vitest";
import PayFormResultBatchMerge from "../../../../src/Hosting/FormResults/Requests/PayFormResultBatchMerge";
import { FormResult } from "@trakit/objects";

describe("PayFormResultBatchMerge", () => {
  it("should create an empty instance", () => {
    const payload = new PayFormResultBatchMerge();
    expect(payload).toBeInstanceOf(PayFormResultBatchMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { FormResults: [{ FormResultId: 1 }, { FormResultId: 2 }] };
    const payload = new PayFormResultBatchMerge(json);
    expect(payload.FormResults).toHaveLength(2);
    expect(payload.FormResults?.[0]).toBeInstanceOf(FormResult);
    expect(payload.FormResults?.[0]?.FormResultId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayFormResultBatchMerge();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepFormResultBatchMerge");
  });

  it("should serialize to JSON", () => {
    const json = { FormResults: [{ FormResultId: 1 }, { FormResultId: 2 }] };
    const payload = new PayFormResultBatchMerge(json);
    const result = payload.toJSON();
    expect(result.FormResults).toHaveLength(2);
    expect(result.FormResults?.[0]?.FormResultId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayFormResultBatchMerge();
    expect(payload.action).toBe("batch-merge");
  });

  it("should get the key from FormResults", () => {
    const json = { FormResults: [{ FormResultId: 1 }, { FormResultId: 2 }] };
    const payload = new PayFormResultBatchMerge(json);
    expect(payload.getKey()).toBe("1,2");
  });
});
