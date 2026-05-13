import { describe, expect, test } from "vitest";
import { PayMachineList } from "../../../../src/Accounts/Machines/Requests/PayMachineList";
import { RepMachineList } from "../../../../src/Accounts/Machines/Responses/RepMachineList";

describe("PayMachineList", () => {
	test("constructor creates instance with includeDeleted", () => {
		const payload = new PayMachineList({ includeDeleted: true });
		expect(payload.includeDeleted).toBe(true);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayMachineList();
		expect(payload.includeDeleted).toBeUndefined();
	});

	test("createReply returns RepMachineList", () => {
		const payload = new PayMachineList();
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepMachineList);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayMachineList({ includeDeleted: true });
		const json = payload.toJSON();
		expect(json).toEqual({
			includeDeleted: true
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayMachineList();
		const action = payload.getAction();
		expect(action.kind).toBe("list");
		expect(action.object).toBe("machine");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});
});
