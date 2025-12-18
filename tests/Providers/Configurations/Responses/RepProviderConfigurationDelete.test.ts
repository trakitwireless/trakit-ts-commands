import { describe, it, expect } from "vitest";
import RepProviderConfigurationDelete from "../../../../commands/Providers/Configurations/Responses/RepProviderConfigurationDelete";

describe("RepProviderConfigurationDelete", () => {
  it("should create an empty instance", () => {
    const response = new RepProviderConfigurationDelete();
    expect(response).toBeInstanceOf(RepProviderConfigurationDelete);
  });

  it("should create an instance with JSON data", () => {
    const json = { success: true };
    const response = new RepProviderConfigurationDelete(json);
    expect(response.success).toBe(true);
  });

  it("should serialize to JSON", () => {
    const json = { success: true };
    const response = new RepProviderConfigurationDelete(json);
    const result = response.toJSON();
    expect(result.success).toBe(true);
  });

  it("should have the correct action", () => {
    const response = new RepProviderConfigurationDelete();
    expect(response.action).toBe("delete");
  });
});
