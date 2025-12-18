import { describe, expect, test } from "vitest";
import { PayContactBatchDelete } from "../../../../commands/Accounts/Contacts/Requests/PayContactBatchDelete";
import { RepContactBatchDelete } from "../../../../commands/Accounts/Contacts/Responses/RepContactBatchDelete";

describe("PayContactBatchDelete", () => {
	test("constructor creates instance with ids", () => {
		const payload = new PayContactBatchDelete({ ids: [123n, 456n, 789n] });
		expect(payload.ids).toHaveLength(3);
		expect(payload.ids).toEqual([123n, 456n, 789n]);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayContactBatchDelete();
		expect(payload.ids).toEqual([]);
	});

	test("createReply returns RepContactBatchDelete", () => {
		const payload = new PayContactBatchDelete({ ids: [123n] });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepContactBatchDelete);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayContactBatchDelete({ ids: [111n, 222n] });
		const json = payload.toJSON();
		expect(json).toEqual({
			ids: [111n, 222n]
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayContactBatchDelete({ ids: [123n] });
		const action = payload.getAction();
		expect(action.kind).toBe("delete");
		expect(action.object).toBe("contact");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBe(true);
	});
});
