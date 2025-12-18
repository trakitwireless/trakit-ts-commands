import { describe, expect, test } from "vitest";
import { PayIconDelete } from "../../../../commands/Images/Icons/Requests/PayIconDelete";
import { RepIconDelete } from "../../../../commands/Images/Icons/Responses/RepIconDelete";

describe("PayIconDelete", () => {
	test("constructor creates instance with id", () => {
		const payload = new PayIconDelete({ id: 123n });
		expect(payload.id).toBe(123n);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayIconDelete();
		expect(payload.id).toBeUndefined();
	});

	test("createReply returns RepIconDelete", () => {
		const payload = new PayIconDelete({ id: 123n });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepIconDelete);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayIconDelete({ id: 123n });
		const json = payload.toJSON();
		expect(json).toEqual({
			id: 123n
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayIconDelete({ id: 123n });
		const action = payload.getAction();
		expect(action.kind).toBe("delete");
		expect(action.object).toBe("icon");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});
});
