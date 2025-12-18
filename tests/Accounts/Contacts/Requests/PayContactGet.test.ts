import { describe, expect, test } from "vitest";
import { PayContactGet } from "../../../../commands/Accounts/Contacts/Requests/PayContactGet";
import { RepContactGet } from "../../../../commands/Accounts/Contacts/Responses/RepContactGet";

describe("PayContactGet", () => {
	test("constructor creates instance with id", () => {
		const payload = new PayContactGet({ id: 123n });
		expect(payload.id).toBe(123n);
		expect(payload.includeDeleted).toBeUndefined();
	});

	test("constructor creates instance with includeDeleted", () => {
		const payload = new PayContactGet({ id: 456n, includeDeleted: true });
		expect(payload.id).toBe(456n);
		expect(payload.includeDeleted).toBe(true);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayContactGet();
		expect(payload.id).toBeUndefined();
	});

	test("createReply returns RepContactGet", () => {
		const payload = new PayContactGet({ id: 123n });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepContactGet);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayContactGet({ id: 123n, includeDeleted: true });
		const json = payload.toJSON();
		expect(json).toEqual({
			id: 123n,
			includeDeleted: true
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayContactGet({ id: 123n });
		const action = payload.getAction();
		expect(action.kind).toBe("get");
		expect(action.object).toBe("contact");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});
});
