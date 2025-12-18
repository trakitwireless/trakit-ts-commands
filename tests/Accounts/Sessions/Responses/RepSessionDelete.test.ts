import { describe, expect, test } from "vitest";
import { RepSessionDelete } from "../../../../commands/Accounts/Sessions/Responses/RepSessionDelete";
import { SessionHandle } from "../../../../commands/Accounts/Sessions/Responses/Content/SessionHandle";

describe("RepSessionDelete", () => {
	test("constructor creates instance with session handle", () => {
		const reply = new RepSessionDelete({ 
			session: {
				handle: "deleted-session-123",
				login: "test@example.com",
				company: 456n
			}
		});
		expect(reply.session).toBeInstanceOf(SessionHandle);
		expect(reply.session.handle).toBe("deleted-session-123");
		expect(reply.session.login).toBe("test@example.com");
		expect(reply.session.company).toBe(456n);
	});

	test("constructor creates instance without session", () => {
		const reply = new RepSessionDelete({});
		expect(reply.session).toBeInstanceOf(SessionHandle);
	});

	test("getKey returns session handle", () => {
		const reply = new RepSessionDelete({ 
			session: {
				handle: "key-handle-789",
				login: "user@example.com",
				company: 123n
			}
		});
		expect(reply.getKey()).toBe("key-handle-789");
	});

	test("getCompanyId returns session company", () => {
		const reply = new RepSessionDelete({ 
			session: {
				handle: "test-handle",
				login: "user@example.com",
				company: 999n
			}
		});
		expect(reply.getCompanyId()).toBe(999n);
	});

	test("toJSON returns correct structure", () => {
		const reply = new RepSessionDelete({ 
			session: {
				handle: "json-handle",
				login: "json@example.com",
				company: 555n
			}
		});
		const json = reply.toJSON();
		expect(json).toBeDefined();
	});
});
