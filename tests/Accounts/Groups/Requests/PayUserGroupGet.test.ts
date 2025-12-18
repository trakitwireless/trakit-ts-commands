import { describe, expect, test } from "vitest";
import { PayUserGroupGet } from "../../../../commands/Accounts/Groups/Requests/PayUserGroupGet";
import { RepUserGroupGet } from "../../../../commands/Accounts/Groups/Responses/RepUserGroupGet";

describe("PayUserGroupGet", () => {
	test("constructor creates instance with id", () => {
		const payload = new PayUserGroupGet({ id: 123n });
		expect(payload.id).toBe(123n);
		expect(payload.includeDeleted).toBeUndefined();
	});

	test("constructor creates instance with includeDeleted", () => {
		const payload = new PayUserGroupGet({ id: 456n, includeDeleted: true });
		expect(payload.id).toBe(456n);
		expect(payload.includeDeleted).toBe(true);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayUserGroupGet();
		expect(payload.id).toBeUndefined();
	});

	test("createReply returns RepUserGroupGet", () => {
		const payload = new PayUserGroupGet({ id: 123n });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepUserGroupGet);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayUserGroupGet({ id: 123n, includeDeleted: true });
		const json = payload.toJSON();
		expect(json).toEqual({
			id: 123n,
			includeDeleted: true
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayUserGroupGet({ id: 123n });
		const action = payload.getAction();
		expect(action.kind).toBe("get");
		expect(action.object).toBe("userGroup");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});
});
