import { describe, expect, test } from "vitest";
import { PayMachineBatchDelete } from "../../../../commands/Accounts/Machines/Requests/PayMachineBatchDelete";
import { RepMachineBatchDelete } from "../../../../commands/Accounts/Machines/Responses/RepMachineBatchDelete";

describe("PayMachineBatchDelete", () => {
	test("constructor creates instance with ids", () => {
		const payload = new PayMachineBatchDelete({ ids: [123n, 456n, 789n] });
		expect(payload.ids).toHaveLength(3);
		expect(payload.ids).toEqual([123n, 456n, 789n]);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayMachineBatchDelete();
		expect(payload.ids).toEqual([]);
	});

	test("createReply returns RepMachineBatchDelete", () => {
		const payload = new PayMachineBatchDelete({ ids: [123n] });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepMachineBatchDelete);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayMachineBatchDelete({ ids: [111n, 222n] });
		const json = payload.toJSON();
		expect(json).toEqual({
			ids: [111n, 222n]
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayMachineBatchDelete({ ids: [123n] });
		const action = payload.getAction();
		expect(action.kind).toBe("delete");
		expect(action.object).toBe("machine");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBe(true);
	});
});
