import { describe, it, expect } from "vitest";
import RepProviderRegistrationDelete from "../../../../commands/Providers/Registrations/Responses/RepProviderRegistrationDelete";

describe("RepProviderRegistrationDelete", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderRegistrationDelete();
    expect(response).toBeInstanceOf(RepProviderRegistrationDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { success: true };
    const response = new RepProviderRegistrationDelete(json);
    expect(response.success).toBe(true);
  });

  it("should serialize to JSON", () => {
    const json = { success: true };
    const response = new RepProviderRegistrationDelete(json);
    const result = response.toJSON();
    expect(result.success).toBe(true);
  });

  it("should have the correct action", () => {
    const response = new RepProviderRegistrationDelete();
    expect(response.action).toBe("delete");
  });
});
