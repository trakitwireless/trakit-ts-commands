import { describe, expect, test } from "vitest";
import { PayPictureGet } from "../../../../commands/Images/Pictures/Requests/PayPictureGet";
import { RepPictureGet } from "../../../../commands/Images/Pictures/Responses/RepPictureGet";

describe("PayPictureGet", () => {
	test("constructor creates instance with id", () => {
		const payload = new PayPictureGet({ id: 123n });
		expect(payload.id).toBe(123n);
		expect(payload.includeDeleted).toBeUndefined();
	});

	test("constructor creates instance with includeDeleted", () => {
		const payload = new PayPictureGet({ id: 456n, includeDeleted: true });
		expect(payload.id).toBe(456n);
		expect(payload.includeDeleted).toBe(true);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayPictureGet();
		expect(payload.id).toBeUndefined();
	});

	test("createReply returns RepPictureGet", () => {
		const payload = new PayPictureGet({ id: 123n });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepPictureGet);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayPictureGet({ id: 123n, includeDeleted: true });
		const json = payload.toJSON();
		expect(json).toEqual({
			id: 123n,
			includeDeleted: true
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayPictureGet({ id: 123n });
		const action = payload.getAction();
		expect(action.kind).toBe("get");
		expect(action.object).toBe("picture");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});
});
