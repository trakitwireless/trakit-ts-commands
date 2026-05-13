import { describe, expect, test } from "vitest";
import { RepUserGeneralGet } from "../../../../src/Accounts/Users/Responses/RepUserGeneralGet";
import { UserGeneral } from "@trakit/objects";

describe("RepUserGeneralGet", () => {
	test("constructor creates instance with user", () => {
		const user = new UserGeneral({ login: "test@example.com", company: 456n, nickname: "Test User" });
		const reply = new RepUserGeneralGet({ user });
		expect(reply.user).toBeInstanceOf(UserGeneral);
		expect(reply.user?.login).toBe("test@example.com");
		expect(reply.user?.nickname).toBe("Test User");
	});

	test("constructor creates instance with JSON", () => {
		const reply = new RepUserGeneralGet({
			user: {
				login: "json@example.com",
				company: 111n,
				nickname: "JSON User",
				enabled: true
			}
		});
		expect(reply.user).toBeInstanceOf(UserGeneral);
		expect(reply.user?.login).toBe("json@example.com");
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepUserGeneralGet({});
		expect(reply.user).toBeUndefined();
	});

	test("toJSON returns correct structure", () => {
		const user = new UserGeneral({ login: "serialize@example.com", company: 333n, nickname: "Serialize User" });
		const reply = new RepUserGeneralGet({ user });
		const json = reply.toJSON();
		expect(json.user).toBeDefined();
		expect(json.user.login).toBe("serialize@example.com");
		expect(json.user.nickname).toBe("Serialize User");
	});

	test("getObject returns user", () => {
		const user = new UserGeneral({ login: "object@example.com", company: 555n, nickname: "Get Object" });
		const reply = new RepUserGeneralGet({ user });
		expect(reply.getObject()).toBe(user);
	});
});
