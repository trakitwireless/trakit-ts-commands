import { describe, expect, test } from "vitest";
import { PayUserRestore } from "../../../../commands/Accounts/Users/Requests/PayUserRestore";
import { RepUserGet } from "../../../../commands/Accounts/Users/Responses/RepUserGet";

describe("PayUserRestore", () => {
	test("constructor creates instance with user", () => {
		const payload = new PayUserRestore({ user: { login: "test@example.com" } });
		expect(payload.user.login).toBe("test@example.com");
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayUserRestore();
		expect(payload.user.login).toBeUndefined();
	});

	test("createReply returns RepUserGet", () => {
		const payload = new PayUserRestore({ user: { login: "test@example.com" } });
		const reply = payload.createReply({});
		expect(reply).toBeInstanceOf(RepUserGet);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayUserRestore({ user: { login: "admin@example.com" } });
		const json = payload.toJSON();
		expect(json).toEqual({
			user: { login: "admin@example.com" }
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayUserRestore({ user: { login: "test@example.com" } });
		const action = payload.getAction();
		expect(action.kind).toBe("restore");
		expect(action.object).toBe("user");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});

	test("getKey returns user login", () => {
		const payload = new PayUserRestore({ user: { login: "user@example.com" } });
		expect(payload.getKey()).toBe("user@example.com");
	});
});
