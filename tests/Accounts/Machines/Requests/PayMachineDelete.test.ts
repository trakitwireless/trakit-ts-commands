import { describe, expect, test } from "vitest";
import { PayMachineDelete } from "../../../../commands/Accounts/Machines/Requests/PayMachineDelete";
import { RepMachineDelete } from "../../../../commands/Accounts/Machines/Responses/RepMachineDelete";

describe("PayMachineDelete", () => {
	test("constructor creates instance with id", () => {
		const payload = new PayMachineDelete({ id: 123n });
		expect(payload.id).toBe(123n);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayMachineDelete();
		expect(payload.id).toBeUndefined();
	});

	test("createReply returns RepMachineDelete", () => {
		const payload = new PayMachineDelete({ id: 123n });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepMachineDelete);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayMachineDelete({ id: 456n });
		const json = payload.toJSON();
		expect(json).toEqual({
			id: 456n
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayMachineDelete({ id: 123n });
		const action = payload.getAction();
		expect(action.kind).toBe("delete");
		expect(action.object).toBe("machine");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});

	test("getKey returns machine id", () => {
		const payload = new PayMachineDelete({ id: 999n });
		expect(payload.getKey()).toBe("999");
	});
});
