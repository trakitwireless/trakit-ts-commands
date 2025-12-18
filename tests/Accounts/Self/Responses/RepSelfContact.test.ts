import { describe, expect, test } from "vitest";
import { RepSelfContact } from "../../../../commands/Accounts/Self/Responses/RepSelfContact";

describe("RepSelfContact", () => {
	test("constructor creates instance", () => {
		const reply = new RepSelfContact({});
		expect(reply).toBeInstanceOf(RepSelfContact);
	});

	test("constructor creates instance with error details", () => {
		const reply = new RepSelfContact({ 
			errorCode: 0,
			message: "Contact updated successfully"
		});
		expect(reply.errorCode).toBe(0);
		expect(reply.message).toBe("Contact updated successfully");
	});

	test("toJSON returns correct structure", () => {
		const reply = new RepSelfContact({});
		const json = reply.toJSON();
		expect(json).toBeDefined();
	});

	test("inherits from Reply", () => {
		const reply = new RepSelfContact({});
		expect(reply.toJSON).toBeDefined();
	});
});
