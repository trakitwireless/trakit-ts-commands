import { describe, expect, test } from "vitest";
import { PayMachineRestore } from "../../../../src/Accounts/Machines/Requests/PayMachineRestore";
import { RepMachineMerge } from "../../../../src/Accounts/Machines/Responses/RepMachineMerge";

describe("PayMachineRestore", () => {
	test("constructor creates instance with id", () => {
		const payload = new PayMachineRestore({ id: 123n });
		expect(payload.id).toBe(123n);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayMachineRestore();
		expect(payload.id).toBeUndefined();
	});

	test("createReply returns RepMachineMerge", () => {
		const payload = new PayMachineRestore({ id: 123n });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepMachineMerge);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayMachineRestore({ id: 456n });
		const json = payload.toJSON();
		expect(json).toEqual({
			id: 456n
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayMachineRestore({ id: 123n });
		const action = payload.getAction();
		expect(action.kind).toBe("restore");
		expect(action.object).toBe("machine");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});

	test("getKey returns machine id", () => {
		const payload = new PayMachineRestore({ id: 999n });
		expect(payload.getKey()).toBe("999");
	});
});
