import { describe, expect, test } from "vitest";
import { RepUserGroupDelete } from "../../../../src/Accounts/Groups/Responses/RepUserGroupDelete";

describe("RepUserGroupDelete", () => {
	test("constructor creates instance with id", () => {
		const reply = new RepUserGroupDelete({ id: 123n });
		expect(reply.id).toBe(123n);
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepUserGroupDelete();
		expect(reply.id).toBeUndefined();
	});

	test("toJSON returns correct structure", () => {
		const reply = new RepUserGroupDelete({ id: 456n });
		const json = reply.toJSON();
		expect(json).toEqual({
			id: 456n
		});
	});
});
