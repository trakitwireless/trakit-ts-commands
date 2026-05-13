import { describe, expect, test } from "vitest";
import { RepPictureDelete } from "../../../../src/Images/Pictures/Responses/RepPictureDelete";

describe("RepPictureDelete", () => {
	test("constructor creates instance with id", () => {
		const reply = new RepPictureDelete({ id: 123n });
		expect(reply.id).toBe(123n);
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepPictureDelete();
		expect(reply.id).toBeUndefined();
	});

	test("toJSON returns correct structure", () => {
		const reply = new RepPictureDelete({ id: 456n });
		const json = reply.toJSON();
		expect(json).toEqual({
			id: 456n
		});
	});
});
