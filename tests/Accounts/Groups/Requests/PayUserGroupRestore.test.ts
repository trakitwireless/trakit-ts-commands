import { describe, expect, test } from "vitest";
import { PayUserGroupRestore } from "../../../../src/Accounts/Groups/Requests/PayUserGroupRestore";
import { RepUserGroupGet } from "../../../../src/Accounts/Groups/Responses/RepUserGroupGet";

describe("PayUserGroupRestore", () => {
	test("constructor creates instance with id", () => {
		const payload = new PayUserGroupRestore({ id: 123n });
		expect(payload.id).toBe(123n);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayUserGroupRestore();
		expect(payload.id).toBeUndefined();
	});

	test("createReply returns RepUserGroupGet", () => {
		const payload = new PayUserGroupRestore({ id: 123n });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepUserGroupGet);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayUserGroupRestore({ id: 123n });
		const json = payload.toJSON();
		expect(json).toEqual({
			id: 123n
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayUserGroupRestore({ id: 123n });
		const action = payload.getAction();
		expect(action.kind).toBe("restore");
		expect(action.object).toBe("userGroup");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});
});
