import { describe, expect, test } from "vitest";
import { PayPictureDelete } from "../../../../commands/Images/Pictures/Requests/PayPictureDelete";
import { RepPictureDelete } from "../../../../commands/Images/Pictures/Responses/RepPictureDelete";

describe("PayPictureDelete", () => {
	test("constructor creates instance with id", () => {
		const payload = new PayPictureDelete({ id: 123n });
		expect(payload.id).toBe(123n);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayPictureDelete();
		expect(payload.id).toBeUndefined();
	});

	test("createReply returns RepPictureDelete", () => {
		const payload = new PayPictureDelete({ id: 123n });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepPictureDelete);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayPictureDelete({ id: 123n });
		const json = payload.toJSON();
		expect(json).toEqual({
			id: 123n
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayPictureDelete({ id: 123n });
		const action = payload.getAction();
		expect(action.kind).toBe("delete");
		expect(action.object).toBe("picture");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});
});
