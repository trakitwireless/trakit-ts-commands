import { describe, expect, test } from "vitest";
import { RepMachineDelete } from "../../../../src/Accounts/Machines/Responses/RepMachineDelete";

describe("RepMachineDelete", () => {
	test("constructor creates instance with id", () => {
		const reply = new RepMachineDelete({ id: 123n });
		expect(reply.id).toBe(123n);
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepMachineDelete();
		expect(reply.id).toBeUndefined();
	});

	test("toJSON returns correct structure", () => {
		const reply = new RepMachineDelete({ id: 456n });
		const json = reply.toJSON();
		expect(json).toEqual({
			id: 456n
		});
	});
});
