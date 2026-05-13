import { describe, expect, test } from "vitest";
import { RepSelfGet } from "../../../../src/Accounts/Self/Responses/RepSelfGet";
import { User } from "@trakit/objects";

describe("RepSelfGet", () => {
	test("constructor creates instance with user", () => {
		const reply = new RepSelfGet({ 
			ghostId: "test-session-123",
			expiry: "2025-12-31T23:59:59Z",
			serverTime: "2025-12-17T12:00:00Z",
			user: {
				login: "test@example.com",
				company: 456n,
				nickname: "Test User",
				enabled: true
			}
		});
		expect(reply.ghostId).toBe("test-session-123");
		expect(reply.expiry).toBeInstanceOf(Date);
		expect(reply.serverTime).toBeInstanceOf(Date);
		expect(reply.userLogin).toBe("test@example.com");
	});

	test("constructor creates instance with machine", () => {
		const reply = new RepSelfGet({ 
			ghostId: "machine-session-456",
			expiry: "2025-12-31T23:59:59Z",
			serverTime: "2025-12-17T12:00:00Z",
			machine: {
				key: "machine-key-123",
				company: 789n
			}
		});
		expect(reply.ghostId).toBe("machine-session-456");
		expect(reply.machineKey).toBe("machine-key-123");
		expect(reply.userLogin).toBeUndefined();
	});

	test("constructor creates instance with policies", () => {
		const reply = new RepSelfGet({ 
			ghostId: "session-789",
			expiry: "2025-12-31T23:59:59Z",
			serverTime: "2025-12-17T12:00:00Z",
			sessionPolicy: {
				timeout: 3600,
				maxSessions: 5
			},
			passwordPolicy: {
				minLength: 8,
				requireUppercase: true
			}
		});
		expect(reply.sessionPolicy).toBeDefined();
		expect(reply.passwordPolicy).toBeDefined();
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepSelfGet({});
		expect(reply.ghostId).toBe("");
		expect(reply.userLogin).toBeUndefined();
		expect(reply.machineKey).toBeUndefined();
	});

	test("toJSON returns correct structure with user", () => {
		const reply = new RepSelfGet({ 
			ghostId: "json-session",
			expiry: "2025-12-31T23:59:59Z",
			serverTime: "2025-12-17T12:00:00Z",
			user: {
				login: "json@example.com",
				company: 123n,
				nickname: "JSON User"
			}
		});
		const json = reply.toJSON();
		expect(json.ghostId).toBe("json-session");
		expect(json.expiry).toBeDefined();
		expect(json.serverTime).toBeDefined();
	});
});
