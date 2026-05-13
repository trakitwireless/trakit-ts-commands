import { describe, expect, test } from "vitest";
import { ParamSelfPreferences } from "../../../../../src/Accounts/Self/Requests/Parameters/ParamSelfPreferences";
import { UserNotifications } from "@trakit/objects";

describe("ParamSelfPreferences", () => {
	test("constructor creates instance with all preferences", () => {
		const param = new ParamSelfPreferences({ 
			timezone: "America/New_York",
			language: "en-US",
			formats: { date: "MM/DD/YYYY", time: "HH:mm:ss" },
			measurements: { distance: "miles", weight: "lbs" },
			options: { theme: "dark", showNotifications: "true" },
			notify: [{
				enabled: true,
				email: true,
				push: false
			}]
		});
		expect(param.timezone?.code).toBe("America/New_York");
		expect(param.language).toBe("en-US");
		expect(param.formats).toBeInstanceOf(Map);
		expect(param.measurements).toBeInstanceOf(Map);
		expect(param.options).toBeInstanceOf(Map);
		expect(param.notify).toHaveLength(1);
		expect(param.notify?.[0]).toBeInstanceOf(UserNotifications);
	});

	test("constructor creates instance without parameters", () => {
		const param = new ParamSelfPreferences();
		expect(param.timezone).toBeUndefined();
		expect(param.language).toBeUndefined();
		expect(param.formats).toBeNull();
		expect(param.measurements).toBeNull();
		expect(param.options).toBeNull();
		expect(param.notify).toBeUndefined();
	});

	test("toJSON returns correct structure with all properties", () => {
		const param = new ParamSelfPreferences({ 
			timezone: "Europe/London",
			language: "en-GB",
			formats: { date: "DD/MM/YYYY" },
			measurements: { distance: "kilometers" },
			options: { feature: "enabled" }
		});
		const json = param.toJSON();
		expect(json.timezone).toBe("Europe/London");
		expect(json.language).toBe("en-GB");
		expect(json.formats).toBeDefined();
		expect(json.measurements).toBeDefined();
		expect(json.options).toBeDefined();
	});

	test("toJSON omits undefined or null values", () => {
		const param = new ParamSelfPreferences({ language: "fr-CA" });
		const json = param.toJSON();
		expect(json.language).toBe("fr-CA");
		expect(json.timezone).toBeUndefined();
		expect(json.formats).toBeUndefined();
	});
});
