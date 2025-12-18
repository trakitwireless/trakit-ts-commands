import { describe, expect, test } from "vitest";
import { RepSelfPassword } from "../../../../commands/Accounts/Self/Responses/RepSelfPassword";

describe("RepSelfPassword", () => {
	test("constructor creates instance with expires and passwordPolicy", () => {
		const reply = new RepSelfPassword({ 
			expires: "2026-12-17T12:00:00Z",
			passwordPolicy: {
				minLength: 8,
				requireUppercase: true,
				requireLowercase: true,
				requireNumbers: true,
				requireSpecialChars: false
			}
		});
		expect(reply.expires).toBeInstanceOf(Date);
		expect(reply.passwordPolicy).toBeDefined();
	});

	test("constructor creates instance without passwordPolicy", () => {
		const reply = new RepSelfPassword({ 
			expires: "2026-06-01T00:00:00Z"
		});
		expect(reply.expires).toBeInstanceOf(Date);
		expect(reply.passwordPolicy).toBeNull();
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepSelfPassword({});
		expect(reply.expires).toBeInstanceOf(Date);
		expect(reply.passwordPolicy).toBeNull();
	});

	test("constructor handles null expires", () => {
		const reply = new RepSelfPassword({ 
			expires: null
		});
		expect(reply.expires).toBeInstanceOf(Date);
	});

	test("toJSON inherits from Reply", () => {
		const reply = new RepSelfPassword({ 
			expires: "2026-12-17T12:00:00Z",
			passwordPolicy: {
				minLength: 10
			}
		});
		const json = reply.toJSON();
		expect(json).toBeDefined();
	});
});
