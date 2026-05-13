import { describe, expect, test } from "vitest";
import { RepContactBatchDelete } from "../../../../src/Accounts/Contacts/Responses/RepContactBatchDelete";

describe("RepContactBatchDelete", () => {
	test("constructor creates instance with ids", () => {
		const reply = new RepContactBatchDelete({ ids: [123n, 456n, 789n] });
		expect(reply.ids).toHaveLength(3);
		expect(reply.ids).toEqual([123n, 456n, 789n]);
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepContactBatchDelete();
		expect(reply.ids).toEqual([]);
	});

	test("toJSON returns correct structure", () => {
		const reply = new RepContactBatchDelete({ ids: [111n, 222n] });
		const json = reply.toJSON();
		expect(json).toEqual({
			ids: [111n, 222n]
		});
	});
});
