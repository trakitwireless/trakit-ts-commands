import { describe, expect, test } from "vitest";
import { RepSelfGet } from "../../../../commands/Accounts/Self/Responses/RepSelfGet";

describe("RepSelfLogin (uses RepSelfGet)", () => {
	test("constructor creates instance with user and session for login", () => {
		const reply = new RepSelfGet({ 
			ghostId: "login-session-123",
			expiry: "2025-12-31T23:59:59Z",
			serverTime: "2025-12-17T12:00:00Z",
			user: {
				login: "test@example.com",
				company: 456n,
				nickname: "Test User",
				enabled: true
			}
		});
		expect(reply.ghostId).toBe("login-session-123");
		expect(reply.userLogin).toBe("test@example.com");
		expect(reply.expiry).toBeInstanceOf(Date);
		expect(reply.serverTime).toBeInstanceOf(Date);
	});

	test("constructor creates login response instance with policies", () => {
		const reply = new RepSelfGet({ 
			ghostId: "policy-session",
			expiry: "2025-12-31T23:59:59Z",
			serverTime: "2025-12-17T12:00:00Z",
			user: {
				login: "user@example.com",
				company: 123n
			},
			sessionPolicy: {
				timeout: 7200,
				maxSessions: 3
			},
			passwordPolicy: {
				minLength: 12,
				requireUppercase: true,
				requireLowercase: true
			}
		});
		expect(reply.sessionPolicy).toBeDefined();
		expect(reply.passwordPolicy).toBeDefined();
	});

	test("constructor creates login response instance without full user data", () => {
		const reply = new RepSelfGet({ 
			ghostId: "minimal-session",
			expiry: "2025-12-31T23:59:59Z",
			serverTime: "2025-12-17T12:00:00Z"
		});
		expect(reply.ghostId).toBe("minimal-session");
		expect(reply.userLogin).toBeUndefined();
	});

	test("toJSON returns correct structure for login response", () => {
		const reply = new RepSelfGet({ 
			ghostId: "json-session",
			expiry: "2025-12-31T23:59:59Z",
			serverTime: "2025-12-17T12:00:00Z",
			user: {
				login: "serialize@example.com",
				company: 789n,
				nickname: "Serialize User"
			}
		});
		const json = reply.toJSON();
		expect(json.ghostId).toBe("json-session");
		expect(json.expiry).toBeDefined();
		expect(json.serverTime).toBeDefined();
	});
});
