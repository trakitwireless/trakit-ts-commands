import { describe, expect, test } from "vitest";
import { PayIconBatchDelete } from "../../../../commands/Images/Icons/Requests/PayIconBatchDelete";
import { RepIconBatchDelete } from "../../../../commands/Images/Icons/Responses/RepIconBatchDelete";

describe("PayIconBatchDelete", () => {
	test("constructor creates instance with ids", () => {
		const payload = new PayIconBatchDelete({ ids: [123n, 456n, 789n] });
		expect(payload.ids).toHaveLength(3);
		expect(payload.ids).toEqual([123n, 456n, 789n]);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayIconBatchDelete();
		expect(payload.ids).toEqual([]);
	});

	test("createReply returns RepIconBatchDelete", () => {
		const payload = new PayIconBatchDelete({ ids: [123n] });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepIconBatchDelete);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayIconBatchDelete({ ids: [111n, 222n] });
		const json = payload.toJSON();
		expect(json).toEqual({
			ids: [111n, 222n]
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayIconBatchDelete({ ids: [123n] });
		const action = payload.getAction();
		expect(action.kind).toBe("delete");
		expect(action.object).toBe("icon");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBe(true);
	});
});
