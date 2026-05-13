import { describe, expect, test } from "vitest";
import { PayIconGet } from "../../../../src/Images/Icons/Requests/PayIconGet";
import { RepIconGet } from "../../../../src/Images/Icons/Responses/RepIconGet";

describe("PayIconGet", () => {
	test("constructor creates instance with id", () => {
		const payload = new PayIconGet({ id: 123n });
		expect(payload.id).toBe(123n);
		expect(payload.includeDeleted).toBeUndefined();
	});

	test("constructor creates instance with includeDeleted", () => {
		const payload = new PayIconGet({ id: 456n, includeDeleted: true });
		expect(payload.id).toBe(456n);
		expect(payload.includeDeleted).toBe(true);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayIconGet();
		expect(payload.id).toBeUndefined();
	});

	test("createReply returns RepIconGet", () => {
		const payload = new PayIconGet({ id: 123n });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepIconGet);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayIconGet({ id: 123n, includeDeleted: true });
		const json = payload.toJSON();
		expect(json).toEqual({
			id: 123n,
			includeDeleted: true
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayIconGet({ id: 123n });
		const action = payload.getAction();
		expect(action.kind).toBe("get");
		expect(action.object).toBe("icon");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});
});
