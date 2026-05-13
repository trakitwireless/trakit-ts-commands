import { describe, expect, test } from "vitest";
import { PayContactMerge } from "../../../../src/Accounts/Contacts/Requests/PayContactMerge";
import { ParamContactMerge } from "../../../../src/Accounts/Contacts/Requests/Parameters/ParamContactMerge";
import { RepContactMerge } from "../../../../src/Accounts/Contacts/Responses/RepContactMerge";

describe("PayContactMerge", () => {
	test("constructor creates instance with contact", () => {
		const contact = new ParamContactMerge({ id: 123n, name: "Test Contact" });
		const payload = new PayContactMerge({ contact });
		expect(payload.contact).toBeInstanceOf(ParamContactMerge);
		expect(payload.contact.id).toBe(123n);
		expect(payload.contact.name).toBe("Test Contact");
	});

	test("constructor creates instance with JSON", () => {
		const payload = new PayContactMerge({
			contact: {
				id: 456n,
				name: "JSON Contact",
				notes: "Test notes",
				emails: { work: "test@example.com" }
			}
		});
		expect(payload.contact).toBeInstanceOf(ParamContactMerge);
		expect(payload.contact.id).toBe(456n);
		expect(payload.contact.name).toBe("JSON Contact");
		expect(payload.contact.notes).toBe("Test notes");
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayContactMerge();
		expect(payload.contact).toBeInstanceOf(ParamContactMerge);
	});

	test("createReply returns RepContactMerge", () => {
		const payload = new PayContactMerge();
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepContactMerge);
	});

	test("toJSON returns correct structure", () => {
		const contact = new ParamContactMerge({
			id: 789n,
			name: "Serialized Contact",
			notes: "Serialize this"
		});
		const payload = new PayContactMerge({ contact });
		const json = payload.toJSON();
		expect(json.contact.id).toBe(789n);
		expect(json.contact.name).toBe("Serialized Contact");
		expect(json.contact.notes).toBe("Serialize this");
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayContactMerge();
		const action = payload.getAction();
		expect(action.kind).toBe("merge");
		expect(action.object).toBe("contact");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});

	test("getKey returns contact id", () => {
		const contact = new ParamContactMerge({ id: 999n });
		const payload = new PayContactMerge({ contact });
		expect(payload.getKey()).toBe("999");
	});
});
