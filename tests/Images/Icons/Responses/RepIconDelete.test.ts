import { describe, expect, test } from "vitest";
import { RepIconDelete } from "../../../../src/Images/Icons/Responses/RepIconDelete";

describe("RepIconDelete", () => {
	test("constructor creates instance with id", () => {
		const reply = new RepIconDelete({ id: 123n });
		expect(reply.id).toBe(123n);
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepIconDelete();
		expect(reply.id).toBeUndefined();
	});

	test("toJSON returns correct structure", () => {
		const reply = new RepIconDelete({ id: 456n });
		const json = reply.toJSON();
		expect(json).toEqual({
			id: 456n
		});
	});
});
