import { describe, expect, test } from "vitest";
import { PaySelfPreferences } from "../../../../commands/Accounts/Self/Requests/PaySelfPreferences";
import { RepSelfPreferences } from "../../../../commands/Accounts/Self/Responses/RepSelfPreferences";
import { UserNotifications } from "@trakit/objects";

describe("PaySelfPreferences", () => {
	test("constructor creates instance with all preferences", () => {
		const payload = new PaySelfPreferences({ 
			language: "en-US",
			timezone: "America/New_York",
			notify: [{
				enabled: true,
				email: true,
				push: false
			}],
			formats: { date: "MM/DD/YYYY", time: "HH:mm:ss" },
			measurements: { distance: "miles", weight: "lbs" },
			options: { theme: "dark", notifications: "enabled" }
		});
		expect(payload.language).toBe("en-US");
		expect(payload.timezone?.code).toBe("America/New_York");
		expect(payload.notify).toHaveLength(1);
		expect(payload.notify?.[0]).toBeInstanceOf(UserNotifications);
		expect(payload.formats).toBeInstanceOf(Map);
		expect(payload.measurements).toBeInstanceOf(Map);
		expect(payload.options).toBeInstanceOf(Map);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PaySelfPreferences();
		expect(payload.language).toBeUndefined();
		expect(payload.timezone).toBeUndefined();
		expect(payload.notify).toBeUndefined();
		expect(payload.formats).toBeNull();
		expect(payload.measurements).toBeNull();
		expect(payload.options).toBeNull();
	});

	test("createReply returns RepSelfPreferences", () => {
		const payload = new PaySelfPreferences({ language: "fr-CA" });
		const reply = payload.createReply({});
		expect(reply).toBeInstanceOf(RepSelfPreferences);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PaySelfPreferences({ 
			language: "es-ES",
			timezone: "Europe/Madrid",
			formats: { date: "DD/MM/YYYY" }
		});
		const json = payload.toJSON();
		expect(json.language).toBe("es-ES");
		expect(json.timezone).toBe("Europe/Madrid");
		expect(json.formats).toBeDefined();
	});

	test("getAction returns correct metadata", () => {
		const payload = new PaySelfPreferences({ language: "en-US" });
		const action = payload.getAction();
		expect(action.kind).toBe("Merge");
		expect(action.object).toBe("Self");
		expect(action.filter).toBe("Preferences");
		expect(action.batch).toBe(false);
	});
});
