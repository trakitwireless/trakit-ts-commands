import { describe, expect, test } from "vitest";
import { RepUserBatchDelete } from "../../../../src/Accounts/Users/Responses/RepUserBatchDelete";

describe("RepUserBatchDelete", () => {
	test("constructor creates instance with users", () => {
		const reply = new RepUserBatchDelete({
			users: [
				{ id: 111n, login: "user1@example.com", company: 456n },
				{ id: 222n, login: "user2@example.com", company: 456n },
				{ id: 333n, login: "user3@example.com", company: 456n }
			]
		});
		expect(reply.users).toHaveLength(3);
		expect(reply.users[0].login).toBe("user1@example.com");
		expect(reply.users[1].login).toBe("user2@example.com");
		expect(reply.users[2].login).toBe("user3@example.com");
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepUserBatchDelete({});
		expect(reply.users).toBeUndefined();
	});

	test("toJSON returns correct structure", () => {
		const reply = new RepUserBatchDelete({
			users: [
				{ id: 444n, login: "delete1@example.com", company: 789n },
				{ id: 555n, login: "delete2@example.com", company: 789n }
			]
		});
		const json = reply.toJSON();
		expect(json.users).toHaveLength(2);
		expect(json.users[0].login).toBe("delete1@example.com");
		expect(json.users[1].login).toBe("delete2@example.com");
	});

	test("getResults returns users array", () => {
		const reply = new RepUserBatchDelete({
			users: [
				{ id: 666n, login: "results@example.com", company: 999n }
			]
		});
		expect(reply.getResults()).toHaveLength(1);
		expect(reply.getResults()[0].login).toBe("results@example.com");
	});

	test("getCompanyId returns company from first user", () => {
		const reply = new RepUserBatchDelete({
			users: [
				{ id: 777n, login: "company@example.com", company: 888n }
			]
		});
		expect(reply.getCompanyId()).toBe(888n);
	});
});
