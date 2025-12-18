import { describe, expect, test } from "vitest";
import { PayContact } from "../../../../commands/Accounts/Contacts/Requests/PayContact";

describe("PayContact", () => {
	test("constructor creates instance with id", () => {
		const payload = new PayContact({ id: 123n });
		expect(payload.id).toBe(123n);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayContact();
		expect(payload.id).toBeUndefined();
	});
});
