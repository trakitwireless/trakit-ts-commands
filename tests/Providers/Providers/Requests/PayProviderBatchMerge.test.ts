import { describe, it, expect } from "vitest";
import PayProviderBatchMerge from "../../../../commands/Providers/Providers/Requests/PayProviderBatchMerge";
import { Provider } from "@trakit/objects";

describe("PayProviderBatchMerge", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderBatchMerge();
    expect(payload).toBeInstanceOf(PayProviderBatchMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { Providers: [{ ProviderId: 1 }, { ProviderId: 2 }] };
    const payload = new PayProviderBatchMerge(json);
    expect(payload.Providers).toHaveLength(2);
    expect(payload.Providers?.[0]).toBeInstanceOf(Provider);
    expect(payload.Providers?.[0]?.ProviderId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderBatchMerge();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderBatchMerge");
  });

  it("should serialize to JSON", () => {
    const json = { Providers: [{ ProviderId: 1 }, { ProviderId: 2 }] };
    const payload = new PayProviderBatchMerge(json);
    const result = payload.toJSON();
    expect(result.Providers).toHaveLength(2);
    expect(result.Providers?.[0]?.ProviderId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderBatchMerge();
    expect(payload.action).toBe("batch-merge");
  });

  it("should get the key from Providers", () => {
    const json = { Providers: [{ ProviderId: 1 }, { ProviderId: 2 }] };
    const payload = new PayProviderBatchMerge(json);
    expect(payload.getKey()).toBe("1,2");
  });
});
