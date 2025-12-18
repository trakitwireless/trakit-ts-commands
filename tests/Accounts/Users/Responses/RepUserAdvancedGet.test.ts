import { describe, expect, test } from "vitest";
import { RepUserAdvancedGet } from "../../../../commands/Accounts/Users/Responses/RepUserAdvancedGet";
import { UserAdvanced } from "@trakit/objects";

describe("RepUserAdvancedGet", () => {
	test("constructor creates instance with user", () => {
		const user = new UserAdvanced({ login: "test@example.com", company: 456n, nickname: "Test User" });
		const reply = new RepUserAdvancedGet({ user });
		expect(reply.user).toBeInstanceOf(UserAdvanced);
		expect(reply.user?.login).toBe("test@example.com");
		expect(reply.user?.nickname).toBe("Test User");
	});

	test("constructor creates instance with JSON", () => {
		const reply = new RepUserAdvancedGet({
			user: {
				login: "json@example.com",
				company: 111n,
				nickname: "JSON User",
				enabled: true
			}
		});
		expect(reply.user).toBeInstanceOf(UserAdvanced);
		expect(reply.user?.login).toBe("json@example.com");
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepUserAdvancedGet({});
		expect(reply.user).toBeUndefined();
	});

	test("toJSON returns correct structure", () => {
		const user = new UserAdvanced({ login: "serialize@example.com", company: 333n, nickname: "Serialize User" });
		const reply = new RepUserAdvancedGet({ user });
		const json = reply.toJSON();
		expect(json.user).toBeDefined();
		expect(json.user.login).toBe("serialize@example.com");
		expect(json.user.nickname).toBe("Serialize User");
	});

	test("getObject returns user", () => {
		const user = new UserAdvanced({ login: "object@example.com", company: 555n, nickname: "Get Object" });
		const reply = new RepUserAdvancedGet({ user });
		expect(reply.getObject()).toBe(user);
	});
});
