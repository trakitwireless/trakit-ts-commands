import { describe, expect, test } from "vitest";
import { RepContactDelete } from "../../../../commands/Accounts/Contacts/Responses/RepContactDelete";

describe("RepContactDelete", () => {
	test("constructor creates instance with id", () => {
		const reply = new RepContactDelete({ id: 123n });
		expect(reply.id).toBe(123n);
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepContactDelete();
		expect(reply.id).toBeUndefined();
	});

	test("toJSON returns correct structure", () => {
		const reply = new RepContactDelete({ id: 456n });
		const json = reply.toJSON();
		expect(json).toEqual({
			id: 456n
		});
	});
});
