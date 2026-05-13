import { describe, expect, test } from "vitest";
import { PayContactList } from "../../../../src/Accounts/Contacts/Requests/PayContactList";

describe("PayContactList", () => {
	test("constructor creates instance with includeDeleted", () => {
		const payload = new PayContactList({ includeDeleted: true });
		expect(payload.includeDeleted).toBe(true);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayContactList();
		expect(payload.includeDeleted).toBeUndefined();
	});
});
