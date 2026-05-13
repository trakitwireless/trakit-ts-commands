import { describe, expect, test } from "vitest";
import { PayUserGroupDelete } from "../../../../src/Accounts/Groups/Requests/PayUserGroupDelete";
import { RepUserGroupDelete } from "../../../../src/Accounts/Groups/Responses/RepUserGroupDelete";

describe("PayUserGroupDelete", () => {
	test("constructor creates instance with id", () => {
		const payload = new PayUserGroupDelete({ id: 123n });
		expect(payload.id).toBe(123n);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayUserGroupDelete();
		expect(payload.id).toBeUndefined();
	});

	test("createReply returns RepUserGroupDelete", () => {
		const payload = new PayUserGroupDelete({ id: 123n });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepUserGroupDelete);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayUserGroupDelete({ id: 123n });
		const json = payload.toJSON();
		expect(json).toEqual({
			id: 123n
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayUserGroupDelete({ id: 123n });
		const action = payload.getAction();
		expect(action.kind).toBe("delete");
		expect(action.object).toBe("userGroup");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});
});
