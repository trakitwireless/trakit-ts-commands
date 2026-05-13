import { describe, expect, test } from "vitest";
import { PayContactDelete } from "../../../../src/Accounts/Contacts/Requests/PayContactDelete";
import { RepContactDelete } from "../../../../src/Accounts/Contacts/Responses/RepContactDelete";

describe("PayContactDelete", () => {
	test("constructor creates instance with id", () => {
		const payload = new PayContactDelete({ id: 123n });
		expect(payload.id).toBe(123n);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayContactDelete();
		expect(payload.id).toBeUndefined();
	});

	test("createReply returns RepContactDelete", () => {
		const payload = new PayContactDelete({ id: 123n });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepContactDelete);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayContactDelete({ id: 123n });
		const json = payload.toJSON();
		expect(json).toEqual({
			id: 123n
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayContactDelete({ id: 123n });
		const action = payload.getAction();
		expect(action.kind).toBe("delete");
		expect(action.object).toBe("contact");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});
});
