import { describe, it, expect } from "vitest";
import PayProviderAdvancedGet from "../../../../commands/Providers/Providers/Requests/PayProviderAdvancedGet";

describe("PayProviderAdvancedGet", () => {
  it("should create an empty instance", () => {
    const payload = new PayProviderAdvancedGet();
    expect(payload).toBeInstanceOf(PayProviderAdvancedGet);
  });

  it("should create an instance with JSON data", () => {
    const json = { ProviderId: 1 };
    const payload = new PayProviderAdvancedGet(json);
    expect(payload.ProviderId).toBe(1);
  });

  it("should create a reply", () => {
    const payload = new PayProviderAdvancedGet();
    const reply = payload.createReply();
    expect(reply.constructor.name).toBe("RepProviderAdvancedGet");
  });

  it("should serialize to JSON", () => {
    const json = { ProviderId: 1 };
    const payload = new PayProviderAdvancedGet(json);
    const result = payload.toJSON();
    expect(result.ProviderId).toBe(1);
  });

  it("should have the correct action", () => {
    const payload = new PayProviderAdvancedGet();
    expect(payload.action).toBe("advanced-get");
  });
});
