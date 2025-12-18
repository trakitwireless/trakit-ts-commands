import { describe, expect, test } from "vitest";
import { RepContactList } from "../../../../commands/Accounts/Contacts/Responses/RepContactList";
import { Contact } from "@trakit/objects";

describe("RepContactList", () => {
	test("constructor creates instance with contacts", () => {
		const contact1 = new Contact({ id: 123n, company: 456n, name: "Contact 1" });
		const contact2 = new Contact({ id: 789n, company: 456n, name: "Contact 2" });
		const reply = new RepContactList({ contacts: [contact1, contact2] });
		expect(reply.contacts).toHaveLength(2);
		expect(reply.contacts[0]).toBeInstanceOf(Contact);
		expect(reply.contacts[0].name).toBe("Contact 1");
		expect(reply.contacts[1].name).toBe("Contact 2");
	});

	test("constructor creates instance with JSON", () => {
		const reply = new RepContactList({
			contacts: [
				{ id: 111n, company: 222n, name: "JSON Contact 1" },
				{ id: 333n, company: 222n, name: "JSON Contact 2" }
			]
		});
		expect(reply.contacts).toHaveLength(2);
		expect(reply.contacts[0]).toBeInstanceOf(Contact);
		expect(reply.contacts[0].id).toBe(111n);
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepContactList();
		expect(reply.contacts).toEqual([]);
	});

	test("toJSON returns correct structure", () => {
		const contact = new Contact({ id: 444n, company: 555n, name: "Serialize Contact" });
		const reply = new RepContactList({ contacts: [contact] });
		const json = reply.toJSON();
		expect(json.contacts).toHaveLength(1);
		expect(json.contacts[0].id).toBe(444n);
		expect(json.contacts[0].name).toBe("Serialize Contact");
	});

	test("getResults returns contacts array", () => {
		const contact = new Contact({ id: 666n, company: 777n, name: "Get Results" });
		const reply = new RepContactList({ contacts: [contact] });
		expect(reply.getResults()).toHaveLength(1);
		expect(reply.getResults()[0]).toBe(contact);
	});
});
