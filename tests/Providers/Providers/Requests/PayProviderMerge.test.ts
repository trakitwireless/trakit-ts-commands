import { describe, it, expect } from "vitest";
import PayProviderMerge from "../../../../src/Providers/Providers/Requests/PayProviderMerge";
import { Provider } from "@trakit/objects";

describe("PayProviderMerge", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderMerge();
    expect(payload).toBeInstanceOf(PayProviderMerge);
  });

  it("should create an instance with JSON data", () => {
    const json = { Provider: { ProviderId: 1 } };
    const payload = new PayProviderMerge(json);
    expect(payload.Provider).toBeInstanceOf(Provider);
    expect(payload.Provider?.ProviderId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderMerge();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderMerge");
  });

  it("should serialize to JSON", () => {
    const json = { Provider: { ProviderId: 1 } };
    const payload = new PayProviderMerge(json);
    const result = payload.toJSON();
    expect(result.Provider?.ProviderId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderMerge();
    expect(payload.action).toBe("merge");
  });

  it("should get the key from the Provider", () => {
    const json = { Provider: { ProviderId: 1 } };
    const payload = new PayProviderMerge(json);
    expect(payload.getKey()).toBe("1");
  });
});
