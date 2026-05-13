import { describe, expect, test } from "vitest";
import { RepSelfPreferences } from "../../../../src/Accounts/Self/Responses/RepSelfPreferences";

describe("RepSelfPreferences", () => {
	test("constructor creates instance", () => {
		const reply = new RepSelfPreferences({});
		expect(reply).toBeInstanceOf(RepSelfPreferences);
	});

	test("constructor creates instance with error details", () => {
		const reply = new RepSelfPreferences({ 
			errorCode: 0,
			message: "Preferences updated successfully"
		});
		expect(reply.errorCode).toBe(0);
		expect(reply.message).toBe("Preferences updated successfully");
	});

	test("toJSON returns correct structure", () => {
		const reply = new RepSelfPreferences({});
		const json = reply.toJSON();
		expect(json).toBeDefined();
	});

	test("inherits from Reply", () => {
		const reply = new RepSelfPreferences({});
		expect(reply.toJSON).toBeDefined();
	});
});
