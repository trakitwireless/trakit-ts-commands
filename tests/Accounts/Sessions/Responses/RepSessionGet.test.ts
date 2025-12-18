import { describe, expect, test } from "vitest";
import { RepSessionGet } from "../../../../commands/Accounts/Sessions/Responses/RepSessionGet";
import { Session } from "@trakit/objects";

describe("RepSessionGet", () => {
	test("constructor creates instance with session", () => {
		const reply = new RepSessionGet({ 
			session: {
				handle: "session-handle-123",
				login: "test@example.com",
				companyId: 456n,
				created: "2025-12-17T10:00:00Z",
				expiry: "2025-12-17T18:00:00Z"
			}
		});
		expect(reply.session).toBeInstanceOf(Session);
		expect(reply.session.handle).toBe("session-handle-123");
		expect(reply.session.login).toBe("test@example.com");
	});

	test("constructor creates instance without session", () => {
		const reply = new RepSessionGet({});
		expect(reply.session).toBeInstanceOf(Session);
	});

	test("getObject returns session", () => {
		const reply = new RepSessionGet({ 
			session: {
				handle: "test-handle",
				login: "user@example.com",
				companyId: 123n
			}
		});
		const obj = reply.getObject();
		expect(obj).toBe(reply.session);
		expect(obj).toBeInstanceOf(Session);
	});

	test("getCompanyId returns session companyId", () => {
		const reply = new RepSessionGet({ 
			session: {
				handle: "test-handle",
				login: "user@example.com",
				companyId: 789n
			}
		});
		expect(reply.getCompanyId()).toBe(789n);
	});

	test("toJSON returns correct structure", () => {
		const reply = new RepSessionGet({ 
			session: {
				handle: "json-handle",
				login: "json@example.com",
				companyId: 100n
			}
		});
		const json = reply.toJSON();
		expect(json).toBeDefined();
	});
});
