import { describe, expect, test } from "vitest";
import { RepUserGeneralList } from "../../../../commands/Accounts/Users/Responses/RepUserGeneralList";
import { UserGeneral } from "@trakit/objects";

describe("RepUserGeneralList", () => {
	test("constructor creates instance with users", () => {
		const user1 = new UserGeneral({ login: "user1@example.com", company: 456n, nickname: "User 1" });
		const user2 = new UserGeneral({ login: "user2@example.com", company: 456n, nickname: "User 2" });
		const reply = new RepUserGeneralList({ users: [user1, user2] });
		expect(reply.users).toHaveLength(2);
		expect(reply.users[0]).toBeInstanceOf(UserGeneral);
		expect(reply.users[0].nickname).toBe("User 1");
		expect(reply.users[1].nickname).toBe("User 2");
	});

	test("constructor creates instance with JSON", () => {
		const reply = new RepUserGeneralList({
			users: [
				{ login: "json1@example.com", company: 222n, nickname: "JSON User 1" },
				{ login: "json2@example.com", company: 222n, nickname: "JSON User 2" }
			]
		});
		expect(reply.users).toHaveLength(2);
		expect(reply.users[0]).toBeInstanceOf(UserGeneral);
		expect(reply.users[0].login).toBe("json1@example.com");
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepUserGeneralList({});
		expect(reply.users).toEqual([]);
	});

	test("toJSON returns correct structure", () => {
		const user = new UserGeneral({ login: "serialize@example.com", company: 555n, nickname: "Serialize User" });
		const reply = new RepUserGeneralList({ users: [user] });
		const json = reply.toJSON();
		expect(json.users).toHaveLength(1);
		expect(json.users[0].login).toBe("serialize@example.com");
		expect(json.users[0].nickname).toBe("Serialize User");
	});

	test("getResults returns users array", () => {
		const user = new UserGeneral({ login: "results@example.com", company: 777n, nickname: "Get Results" });
		const reply = new RepUserGeneralList({ users: [user] });
		expect(reply.getResults()).toHaveLength(1);
		expect(reply.getResults()[0]).toBe(user);
	});
});
