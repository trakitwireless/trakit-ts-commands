import { describe, expect, test } from "vitest";
import { PaySelfContact } from "../../../../src/Accounts/Self/Requests/PaySelfContact";
import { RepSelfContact } from "../../../../src/Accounts/Self/Responses/RepSelfContact";
import { ParamSelfContactMerge } from "../../../../src/Accounts/Self/Requests/Parameters/ParamSelfContactMerge";

describe("PaySelfContact", () => {
	test("constructor creates instance with contact", () => {
		const payload = new PaySelfContact({ 
			contact: {
				name: "John Doe",
				notes: "Software engineer"
			}
		});
		expect(payload.contact).toBeInstanceOf(ParamSelfContactMerge);
		expect(payload.contact.name).toBe("John Doe");
		expect(payload.contact.notes).toBe("Software engineer");
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PaySelfContact();
		expect(payload.contact).toBeInstanceOf(ParamSelfContactMerge);
	});

	test("createReply returns RepSelfContact", () => {
		const payload = new PaySelfContact({ contact: { name: "Test User" } });
		const reply = payload.createReply({});
		expect(reply).toBeInstanceOf(RepSelfContact);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PaySelfContact({ 
			contact: {
				name: "Jane Smith",
				emails: { Work: "jane@example.com" }
			}
		});
		const json = payload.toJSON();
		expect(json.contact).toBeDefined();
	});

	test("getAction returns correct metadata", () => {
		const payload = new PaySelfContact({ contact: { name: "Test" } });
		const action = payload.getAction();
		expect(action.kind).toBe("Merge");
		expect(action.object).toBe("Self");
		expect(action.filter).toBe("Contact");
		expect(action.batch).toBe(false);
	});
});
