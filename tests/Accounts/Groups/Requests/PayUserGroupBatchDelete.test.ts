import { describe, expect, test } from "vitest";
import { PayUserGroupBatchDelete } from "../../../../commands/Accounts/Groups/Requests/PayUserGroupBatchDelete";
import { RepUserGroupBatchDelete } from "../../../../commands/Accounts/Groups/Responses/RepUserGroupBatchDelete";

describe("PayUserGroupBatchDelete", () => {
	test("constructor creates instance with ids", () => {
		const payload = new PayUserGroupBatchDelete({ ids: [123n, 456n, 789n] });
		expect(payload.ids).toHaveLength(3);
		expect(payload.ids).toEqual([123n, 456n, 789n]);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayUserGroupBatchDelete();
		expect(payload.ids).toEqual([]);
	});

	test("createReply returns RepUserGroupBatchDelete", () => {
		const payload = new PayUserGroupBatchDelete({ ids: [123n] });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepUserGroupBatchDelete);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayUserGroupBatchDelete({ ids: [111n, 222n] });
		const json = payload.toJSON();
		expect(json).toEqual({
			ids: [111n, 222n]
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayUserGroupBatchDelete({ ids: [123n] });
		const action = payload.getAction();
		expect(action.kind).toBe("delete");
		expect(action.object).toBe("userGroup");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBe(true);
	});
});
