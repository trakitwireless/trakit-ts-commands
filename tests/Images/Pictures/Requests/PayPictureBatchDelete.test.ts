import { describe, expect, test } from "vitest";
import { PayPictureBatchDelete } from "../../../../commands/Images/Pictures/Requests/PayPictureBatchDelete";
import { RepPictureBatchDelete } from "../../../../commands/Images/Pictures/Responses/RepPictureBatchDelete";

describe("PayPictureBatchDelete", () => {
	test("constructor creates instance with ids", () => {
		const payload = new PayPictureBatchDelete({ ids: [123n, 456n, 789n] });
		expect(payload.ids).toHaveLength(3);
		expect(payload.ids).toEqual([123n, 456n, 789n]);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayPictureBatchDelete();
		expect(payload.ids).toEqual([]);
	});

	test("createReply returns RepPictureBatchDelete", () => {
		const payload = new PayPictureBatchDelete({ ids: [123n] });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepPictureBatchDelete);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayPictureBatchDelete({ ids: [111n, 222n] });
		const json = payload.toJSON();
		expect(json).toEqual({
			ids: [111n, 222n]
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayPictureBatchDelete({ ids: [123n] });
		const action = payload.getAction();
		expect(action.kind).toBe("delete");
		expect(action.object).toBe("picture");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBe(true);
	});
});
