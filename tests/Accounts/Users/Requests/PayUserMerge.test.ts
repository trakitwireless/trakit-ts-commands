import { describe, expect, test } from "vitest";
import { PayUserMerge } from "../../../../commands/Accounts/Users/Requests/PayUserMerge";
import { ParamUserMerge } from "../../../../commands/Accounts/Users/Requests/Parameters/ParamUserMerge";
import { RepUserMerge } from "../../../../commands/Accounts/Users/Responses/RepUserMerge";

describe("PayUserMerge", () => {
	test("constructor creates instance with user", () => {
		const user = new ParamUserMerge({ login: "test@example.com", nickname: "Test User" });
		const payload = new PayUserMerge({ user });
		expect(payload.user).toBeInstanceOf(ParamUserMerge);
		expect(payload.user.login).toBe("test@example.com");
		expect(payload.user.nickname).toBe("Test User");
	});

	test("constructor creates instance with JSON", () => {
		const payload = new PayUserMerge({
			user: {
				login: "admin@example.com",
				nickname: "JSON User",
				company: 456n,
				enabled: true
			}
		});
		expect(payload.user).toBeInstanceOf(ParamUserMerge);
		expect(payload.user.login).toBe("admin@example.com");
		expect(payload.user.nickname).toBe("JSON User");
		expect(payload.user.company).toBe(456n);
		expect(payload.user.enabled).toBe(true);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayUserMerge();
		expect(payload.user).toBeInstanceOf(ParamUserMerge);
	});

	test("createReply returns RepUserMerge", () => {
		const payload = new PayUserMerge();
		const reply = payload.createReply({});
		expect(reply).toBeInstanceOf(RepUserMerge);
	});

	test("toJSON returns correct structure", () => {
		const user = new ParamUserMerge({
			login: "serialize@example.com",
			nickname: "Serialized User",
			company: 789n,
			enabled: false
		});
		const payload = new PayUserMerge({ user });
		const json = payload.toJSON();
		expect(json.user.login).toBe("serialize@example.com");
		expect(json.user.nickname).toBe("Serialized User");
		expect(json.user.company).toBe(789n);
		expect(json.user.enabled).toBe(false);
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayUserMerge();
		const action = payload.getAction();
		expect(action.kind).toBe("merge");
		expect(action.object).toBe("user");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});

	test("getKey returns user login", () => {
		const user = new ParamUserMerge({ login: "key@example.com" });
		const payload = new PayUserMerge({ user });
		expect(payload.getKey()).toBe("key@example.com");
	});
});
