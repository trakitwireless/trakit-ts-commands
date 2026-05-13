import { describe, expect, test } from "vitest";
import { PayContactBatchMerge } from "../../../../src/Accounts/Contacts/Requests/PayContactBatchMerge";
import { ParamContactMerge } from "../../../../src/Accounts/Contacts/Requests/Parameters/ParamContactMerge";
import { RepContactBatchMerge } from "../../../../src/Accounts/Contacts/Responses/RepContactBatchMerge";

describe("PayContactBatchMerge", () => {
	test("constructor creates instance with contacts", () => {
		const contact1 = new ParamContactMerge({ id: 123n, name: "Contact 1" });
		const contact2 = new ParamContactMerge({ company: 456n, name: "Contact 2" });
		const payload = new PayContactBatchMerge({ contacts: [contact1, contact2] });
		expect(payload.contacts).toHaveLength(2);
		expect(payload.contacts[0]).toBeInstanceOf(ParamContactMerge);
		expect(payload.contacts[0].id).toBe(123n);
		expect(payload.contacts[1].name).toBe("Contact 2");
	});

	test("constructor creates instance with JSON", () => {
		const payload = new PayContactBatchMerge({
			contacts: [
				{ id: 111n, name: "JSON Contact 1" },
				{ company: 222n, name: "JSON Contact 2" }
			]
		});
		expect(payload.contacts).toHaveLength(2);
		expect(payload.contacts[0]).toBeInstanceOf(ParamContactMerge);
		expect(payload.contacts[0].name).toBe("JSON Contact 1");
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayContactBatchMerge();
		expect(payload.contacts).toEqual([]);
	});

	test("createReply returns RepContactBatchMerge", () => {
		const payload = new PayContactBatchMerge();
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepContactBatchMerge);
	});

	test("toJSON returns correct structure", () => {
		const contact1 = new ParamContactMerge({ id: 333n, name: "Batch Contact 1" });
		const contact2 = new ParamContactMerge({ company: 444n, name: "Batch Contact 2" });
		const payload = new PayContactBatchMerge({ contacts: [contact1, contact2] });
		const json = payload.toJSON();
		expect(json.contacts).toHaveLength(2);
		expect(json.contacts[0].id).toBe(333n);
		expect(json.contacts[1].company).toBe(444n);
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayContactBatchMerge();
		const action = payload.getAction();
		expect(action.kind).toBe("merge");
		expect(action.object).toBe("contact");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBe(true);
	});

	test("getList returns contacts array", () => {
		const contact = new ParamContactMerge({ id: 555n });
		const payload = new PayContactBatchMerge({ contacts: [contact] });
		expect(payload.getList()).toHaveLength(1);
		expect(payload.getList()[0]).toBe(contact);
	});
});
