import { describe, it, expect } from "vitest";
import PayFormResultBatchDelete from "../../../../commands/Hosting/FormResults/Requests/PayFormResultBatchDelete";

describe("PayFormResultBatchDelete", () => {
  it("should create an empty instance", () => {
    const payload = new PayFormResultBatchDelete();
    expect(payload).toBeInstanceOf(PayFormResultBatchDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { FormResultIds: [1, 2, 3] };
    const payload = new PayFormResultBatchDelete(json);
    expect(payload.FormResultIds).toEqual([1, 2, 3]);
  });

  it("should create a reply", () => {
    const payload = new PayFormResultBatchDelete();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepFormResultBatchDelete");
  });

  it("should serialize to JSON", () => {
    const json = { FormResultIds: [1, 2, 3] };
    const payload = new PayFormResultBatchDelete(json);
    const result = payload.toJSON();
    expect(result.FormResultIds).toEqual([1, 2, 3]);
  });

  it("should have the correct action", () => {
    const payload = new PayFormResultBatchDelete();
    expect(payload.action).toBe("batch-delete");
  });
});
