import { describe, expect, test } from "vitest";
import { RepSessionListByCompany, RepSessionListByUser } from "../../../../commands/Accounts/Sessions/Responses/RepSessionList";
import { Session } from "@trakit/objects";
import { ContentId } from "../../../../commands/API/Responses/Content/ContentId";
import { ContentLoginCompany } from "../../../../commands/API/Responses/Content/ContentLoginCompany";

describe("RepSessionListByCompany", () => {
	test("constructor creates instance with sessions and company", () => {
		const reply = new RepSessionListByCompany({ 
			company: { id: 123n },
			sessions: [
				{
					handle: "session-1",
					login: "user1@example.com",
					companyId: 123n,
					created: "2025-12-17T10:00:00Z"
				},
				{
					handle: "session-2",
					login: "user2@example.com",
					companyId: 123n,
					created: "2025-12-17T11:00:00Z"
				}
			]
		});
		expect(reply.company).toBeInstanceOf(ContentId);
		expect(reply.company.id).toBe(123n);
		expect(reply.sessions).toHaveLength(2);
		expect(reply.sessions[0]).toBeInstanceOf(Session);
		expect(reply.sessions[1]).toBeInstanceOf(Session);
	});

	test("constructor creates instance without sessions", () => {
		const reply = new RepSessionListByCompany({ 
			company: { id: 456n }
		});
		expect(reply.company).toBeInstanceOf(ContentId);
		expect(reply.sessions).toEqual([]);
	});

	test("getList returns sessions array", () => {
		const reply = new RepSessionListByCompany({ 
			company: { id: 789n },
			sessions: [
				{
					handle: "session-3",
					login: "user3@example.com",
					companyId: 789n
				}
			]
		});
		const list = reply.getList();
		expect(list).toBe(reply.sessions);
		expect(list).toHaveLength(1);
	});

	test("getCompanyId returns company id", () => {
		const reply = new RepSessionListByCompany({ 
			company: { id: 999n },
			sessions: []
		});
		expect(reply.getCompanyId()).toBe(999n);
	});

	test("toJSON returns correct structure", () => {
		const reply = new RepSessionListByCompany({ 
			company: { id: 111n },
			sessions: []
		});
		const json = reply.toJSON();
		expect(json).toBeDefined();
	});
});

describe("RepSessionListByUser", () => {
	test("constructor creates instance with sessions and user", () => {
		const reply = new RepSessionListByUser({ 
			user: { 
				login: "test@example.com",
				company: 123n
			},
			sessions: [
				{
					handle: "session-1",
					login: "test@example.com",
					companyId: 123n,
					created: "2025-12-17T10:00:00Z"
				},
				{
					handle: "session-2",
					login: "test@example.com",
					companyId: 123n,
					created: "2025-12-17T11:00:00Z"
				}
			]
		});
		expect(reply.user).toBeInstanceOf(ContentLoginCompany);
		expect(reply.user.login).toBe("test@example.com");
		expect(reply.user.company).toBe(123n);
		expect(reply.sessions).toHaveLength(2);
		expect(reply.sessions[0]).toBeInstanceOf(Session);
		expect(reply.sessions[1]).toBeInstanceOf(Session);
	});

	test("constructor creates instance without sessions", () => {
		const reply = new RepSessionListByUser({ 
			user: { 
				login: "user@example.com",
				company: 456n
			}
		});
		expect(reply.user).toBeInstanceOf(ContentLoginCompany);
		expect(reply.sessions).toEqual([]);
	});

	test("getList returns sessions array", () => {
		const reply = new RepSessionListByUser({ 
			user: { 
				login: "list@example.com",
				company: 789n
			},
			sessions: [
				{
					handle: "session-3",
					login: "list@example.com",
					companyId: 789n
				}
			]
		});
		const list = reply.getList();
		expect(list).toBe(reply.sessions);
		expect(list).toHaveLength(1);
	});

	test("getCompanyId returns user company", () => {
		const reply = new RepSessionListByUser({ 
			user: { 
				login: "company@example.com",
				company: 999n
			},
			sessions: []
		});
		expect(reply.getCompanyId()).toBe(999n);
	});

	test("toJSON returns correct structure", () => {
		const reply = new RepSessionListByUser({ 
			user: { 
				login: "json@example.com",
				company: 111n
			},
			sessions: []
		});
		const json = reply.toJSON();
		expect(json).toBeDefined();
	});
});
