import { describe, expect, test } from "vitest";
import { RepUserGet } from "../../../../src/Accounts/Users/Responses/RepUserGet";
import { User } from "@trakit/objects";

describe("RepUserGet", () => {
	test("constructor creates instance with user", () => {
		const user = new User({ login: "test@example.com", company: 456n, nickname: "Test User" });
		const reply = new RepUserGet({ user });
		expect(reply.user).toBeInstanceOf(User);
		expect(reply.user?.login).toBe("test@example.com");
		expect(reply.user?.nickname).toBe("Test User");
	});

	test("constructor creates instance with JSON", () => {
		const reply = new RepUserGet({
			user: {
				login: "json@example.com",
				company: 111n,
				nickname: "JSON User",
				enabled: true
			}
		});
		expect(reply.user).toBeInstanceOf(User);
		expect(reply.user?.login).toBe("json@example.com");
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepUserGet({});
		expect(reply.user).toBeUndefined();
	});

	test("toJSON returns correct structure", () => {
		const user = new User({ login: "serialize@example.com", company: 333n, nickname: "Serialize User" });
		const reply = new RepUserGet({ user });
		const json = reply.toJSON();
		expect(json.user).toBeDefined();
		expect(json.user.login).toBe("serialize@example.com");
		expect(json.user.nickname).toBe("Serialize User");
	});

	test("getObject returns user", () => {
		const user = new User({ login: "object@example.com", company: 555n, nickname: "Get Object" });
		const reply = new RepUserGet({ user });
		expect(reply.getObject()).toBe(user);
	});
});
