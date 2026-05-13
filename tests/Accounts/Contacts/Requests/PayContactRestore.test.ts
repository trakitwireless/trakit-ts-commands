import { describe, expect, test } from "vitest";
import { PayContactRestore } from "../../../../src/Accounts/Contacts/Requests/PayContactRestore";
import { RepContactGet } from "../../../../src/Accounts/Contacts/Responses/RepContactGet";

describe("PayContactRestore", () => {
	test("constructor creates instance with id", () => {
		const payload = new PayContactRestore({ id: 123n });
		expect(payload.id).toBe(123n);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayContactRestore();
		expect(payload.id).toBeUndefined();
	});

	test("createReply returns RepContactGet", () => {
		const payload = new PayContactRestore({ id: 123n });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepContactGet);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayContactRestore({ id: 123n });
		const json = payload.toJSON();
		expect(json).toEqual({
			id: 123n
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayContactRestore({ id: 123n });
		const action = payload.getAction();
		expect(action.kind).toBe("restore");
		expect(action.object).toBe("contact");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});
});
