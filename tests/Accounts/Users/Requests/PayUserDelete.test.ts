import { describe, expect, test } from "vitest";
import { PayUserDelete } from "../../../../src/Accounts/Users/Requests/PayUserDelete";
import { RepUserDelete } from "../../../../src/Accounts/Users/Responses/RepUserDelete";

describe("PayUserDelete", () => {
	test("constructor creates instance with user", () => {
		const payload = new PayUserDelete({ user: { login: "test@example.com" } });
		expect(payload.user.login).toBe("test@example.com");
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayUserDelete();
		expect(payload.user.login).toBeUndefined();
	});

	test("createReply returns RepUserDelete", () => {
		const payload = new PayUserDelete({ user: { login: "test@example.com" } });
		const reply = payload.createReply({});
		expect(reply).toBeInstanceOf(RepUserDelete);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayUserDelete({ user: { login: "admin@example.com" } });
		const json = payload.toJSON();
		expect(json).toEqual({
			user: { login: "admin@example.com" }
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayUserDelete({ user: { login: "test@example.com" } });
		const action = payload.getAction();
		expect(action.kind).toBe("delete");
		expect(action.object).toBe("user");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});

	test("getKey returns user login", () => {
		const payload = new PayUserDelete({ user: { login: "user@example.com" } });
		expect(payload.getKey()).toBe("user@example.com");
	});
});
