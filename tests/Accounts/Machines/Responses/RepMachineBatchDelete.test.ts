import { describe, expect, test } from "vitest";
import { RepMachineBatchDelete } from "../../../../commands/Accounts/Machines/Responses/RepMachineBatchDelete";

describe("RepMachineBatchDelete", () => {
	test("constructor creates instance with ids", () => {
		const reply = new RepMachineBatchDelete({ ids: [123n, 456n, 789n] });
		expect(reply.ids).toHaveLength(3);
		expect(reply.ids).toEqual([123n, 456n, 789n]);
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepMachineBatchDelete();
		expect(reply.ids).toEqual([]);
	});

	test("toJSON returns correct structure", () => {
		const reply = new RepMachineBatchDelete({ ids: [111n, 222n] });
		const json = reply.toJSON();
		expect(json).toEqual({
			ids: [111n, 222n]
		});
	});
});
