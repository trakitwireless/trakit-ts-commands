import { describe, expect, test } from "vitest";
import { PayUserGeneralGet } from "../../../../src/Accounts/Users/Requests/PayUserGeneralGet";
import { RepUserGeneralGet } from "../../../../src/Accounts/Users/Responses/RepUserGeneralGet";

describe("PayUserGeneralGet", () => {
	test("constructor creates instance with user", () => {
		const payload = new PayUserGeneralGet({ user: { login: "test@example.com" } });
		expect(payload.user.login).toBe("test@example.com");
		expect(payload.includeDeleted).toBe(false);
	});

	test("constructor creates instance with includeDeleted", () => {
		const payload = new PayUserGeneralGet({ user: { login: "admin@example.com" }, includeDeleted: true });
		expect(payload.user.login).toBe("admin@example.com");
		expect(payload.includeDeleted).toBe(true);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayUserGeneralGet();
		expect(payload.user.login).toBeUndefined();
	});

	test("createReply returns RepUserGeneralGet", () => {
		const payload = new PayUserGeneralGet({ user: { login: "test@example.com" } });
		const reply = payload.createReply({});
		expect(reply).toBeInstanceOf(RepUserGeneralGet);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayUserGeneralGet({ user: { login: "test@example.com" }, includeDeleted: true });
		const json = payload.toJSON();
		expect(json).toEqual({
			user: { login: "test@example.com" },
			includeDeleted: true
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayUserGeneralGet({ user: { login: "test@example.com" } });
		const action = payload.getAction();
		expect(action.kind).toBe("get");
		expect(action.object).toBe("user");
		expect(action.filter).toBe("general");
		expect(action.batch).toBeUndefined();
	});

	test("getKey returns user login", () => {
		const payload = new PayUserGeneralGet({ user: { login: "user@example.com" } });
		expect(payload.getKey()).toBe("user@example.com");
	});
});
