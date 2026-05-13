import { describe, expect, test } from "vitest";
import { PayPictureRestore } from "../../../../src/Images/Pictures/Requests/PayPictureRestore";
import { RepPictureGet } from "../../../../src/Images/Pictures/Responses/RepPictureGet";

describe("PayPictureRestore", () => {
	test("constructor creates instance with id", () => {
		const payload = new PayPictureRestore({ id: 123n });
		expect(payload.id).toBe(123n);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayPictureRestore();
		expect(payload.id).toBeUndefined();
	});

	test("createReply returns RepPictureGet", () => {
		const payload = new PayPictureRestore({ id: 123n });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepPictureGet);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayPictureRestore({ id: 123n });
		const json = payload.toJSON();
		expect(json).toEqual({
			id: 123n
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayPictureRestore({ id: 123n });
		const action = payload.getAction();
		expect(action.kind).toBe("restore");
		expect(action.object).toBe("picture");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});
});
