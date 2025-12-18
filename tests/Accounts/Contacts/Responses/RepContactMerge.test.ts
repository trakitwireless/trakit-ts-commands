import { describe, expect, test } from "vitest";
import { RepContactMerge } from "../../../../commands/Accounts/Contacts/Responses/RepContactMerge";
import { Contact } from "@trakit/objects";

describe("RepContactMerge", () => {
	test("constructor creates instance with contact", () => {
		const contact = new Contact({ id: 123n, company: 456n, name: "Test Contact" });
		const reply = new RepContactMerge({ contact });
		expect(reply.contact).toBeInstanceOf(Contact);
		expect(reply.contact?.id).toBe(123n);
		expect(reply.contact?.name).toBe("Test Contact");
	});

	test("constructor creates instance with JSON", () => {
		const reply = new RepContactMerge({
			contact: {
				id: 789n,
				company: 111n,
				name: "JSON Contact"
			}
		});
		expect(reply.contact).toBeInstanceOf(Contact);
		expect(reply.contact?.id).toBe(789n);
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepContactMerge();
		expect(reply.contact).toBeUndefined();
	});

	test("toJSON returns correct structure", () => {
		const contact = new Contact({ id: 222n, company: 333n, name: "Serialize Contact" });
		const reply = new RepContactMerge({ contact });
		const json = reply.toJSON();
		expect(json.contact).toBeDefined();
		expect(json.contact.id).toBe(222n);
		expect(json.contact.name).toBe("Serialize Contact");
	});

	test("getObject returns contact", () => {
		const contact = new Contact({ id: 444n, company: 555n, name: "Get Object" });
		const reply = new RepContactMerge({ contact });
		expect(reply.getObject()).toBe(contact);
	});
});
