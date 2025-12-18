import { describe, expect, test } from "vitest";
import { PayMachineGet } from "../../../../commands/Accounts/Machines/Requests/PayMachineGet";
import { RepMachineGet } from "../../../../commands/Accounts/Machines/Responses/RepMachineGet";

describe("PayMachineGet", () => {
	test("constructor creates instance with id", () => {
		const payload = new PayMachineGet({ id: 123n });
		expect(payload.id).toBe(123n);
		expect(payload.includeDeleted).toBeUndefined();
	});

	test("constructor creates instance with includeDeleted", () => {
		const payload = new PayMachineGet({ id: 456n, includeDeleted: true });
		expect(payload.id).toBe(456n);
		expect(payload.includeDeleted).toBe(true);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayMachineGet();
		expect(payload.id).toBeUndefined();
	});

	test("createReply returns RepMachineGet", () => {
		const payload = new PayMachineGet({ id: 123n });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepMachineGet);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayMachineGet({ id: 123n, includeDeleted: true });
		const json = payload.toJSON();
		expect(json).toEqual({
			id: 123n,
			includeDeleted: true
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayMachineGet({ id: 123n });
		const action = payload.getAction();
		expect(action.kind).toBe("get");
		expect(action.object).toBe("machine");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});
});
