import { describe, expect, test } from "vitest";
import { RepSelfLogout } from "../../../../commands/Accounts/Self/Responses/RepSelfLogout";

describe("RepSelfLogout", () => {
	test("constructor creates instance with ghostId and expiry", () => {
		const reply = new RepSelfLogout({ 
			ghostId: "expired-session-123",
			expiry: "2025-12-17T12:00:00Z"
		});
		expect(reply.ghostId).toBe("expired-session-123");
		expect(reply.expiry).toBeInstanceOf(Date);
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepSelfLogout({});
		expect(reply.ghostId).toBe("");
		expect(reply.expiry).toBeInstanceOf(Date);
	});

	test("constructor handles null ghostId", () => {
		const reply = new RepSelfLogout({ 
			ghostId: null,
			expiry: "2025-12-17T12:00:00Z"
		});
		expect(reply.ghostId).toBe("");
		expect(reply.expiry).toBeInstanceOf(Date);
	});

	test("toJSON inherits from Reply", () => {
		const reply = new RepSelfLogout({ 
			ghostId: "test-session",
			expiry: "2025-12-17T12:00:00Z"
		});
		const json = reply.toJSON();
		expect(json).toBeDefined();
	});
});
