import { describe, expect, test } from "vitest";
import { PayUserGet } from "../../../../src/Accounts/Users/Requests/PayUserGet";
import { RepUserGet } from "../../../../src/Accounts/Users/Responses/RepUserGet";

describe("PayUserGet", () => {
	test("constructor creates instance with user", () => {
		const payload = new PayUserGet({ user: { login: "test@example.com" } });
		expect(payload.user.login).toBe("test@example.com");
		expect(payload.includeDeleted).toBe(false);
	});

	test("constructor creates instance with includeDeleted", () => {
		const payload = new PayUserGet({ user: { login: "admin@example.com" }, includeDeleted: true });
		expect(payload.user.login).toBe("admin@example.com");
		expect(payload.includeDeleted).toBe(true);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayUserGet();
		expect(payload.user.login).toBeUndefined();
	});

	test("createReply returns RepUserGet", () => {
		const payload = new PayUserGet({ user: { login: "test@example.com" } });
		const reply = payload.createReply({});
		expect(reply).toBeInstanceOf(RepUserGet);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayUserGet({ user: { login: "test@example.com" }, includeDeleted: true });
		const json = payload.toJSON();
		expect(json).toEqual({
			user: { login: "test@example.com" },
			includeDeleted: true
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayUserGet({ user: { login: "test@example.com" } });
		const action = payload.getAction();
		expect(action.kind).toBe("get");
		expect(action.object).toBe("user");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});

	test("getKey returns user login", () => {
		const payload = new PayUserGet({ user: { login: "user@example.com" } });
		expect(payload.getKey()).toBe("user@example.com");
	});
});
