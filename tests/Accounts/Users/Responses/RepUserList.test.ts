import { describe, expect, test } from "vitest";
import { RepUserListByCompany } from "../../../../commands/Accounts/Users/Responses/RepUserList";
import { User } from "@trakit/objects";

describe("RepUserListByCompany", () => {
	test("constructor creates instance with users", () => {
		const user1 = new User({ login: "user1@example.com", company: 456n, nickname: "User 1" });
		const user2 = new User({ login: "user2@example.com", company: 456n, nickname: "User 2" });
		const reply = new RepUserListByCompany({ users: [user1, user2] });
		expect(reply.users).toHaveLength(2);
		expect(reply.users[0]).toBeInstanceOf(User);
		expect(reply.users[0].nickname).toBe("User 1");
		expect(reply.users[1].nickname).toBe("User 2");
	});

	test("constructor creates instance with JSON", () => {
		const reply = new RepUserListByCompany({
			users: [
				{ login: "json1@example.com", company: 222n, nickname: "JSON User 1" },
				{ login: "json2@example.com", company: 222n, nickname: "JSON User 2" }
			]
		});
		expect(reply.users).toHaveLength(2);
		expect(reply.users[0]).toBeInstanceOf(User);
		expect(reply.users[0].login).toBe("json1@example.com");
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepUserListByCompany({});
		expect(reply.users).toEqual([]);
	});

	test("toJSON returns correct structure", () => {
		const user = new User({ login: "serialize@example.com", company: 555n, nickname: "Serialize User" });
		const reply = new RepUserListByCompany({ users: [user] });
		const json = reply.toJSON();
		expect(json.users).toHaveLength(1);
		expect(json.users[0].login).toBe("serialize@example.com");
		expect(json.users[0].nickname).toBe("Serialize User");
	});

	test("getResults returns users array", () => {
		const user = new User({ login: "results@example.com", company: 777n, nickname: "Get Results" });
		const reply = new RepUserListByCompany({ users: [user] });
		expect(reply.getResults()).toHaveLength(1);
		expect(reply.getResults()[0]).toBe(user);
	});
});
