import { describe, expect, test } from "vitest";
import { PayMachineBatchMerge } from "../../../../commands/Accounts/Machines/Requests/PayMachineBatchMerge";
import { ParamMachineMerge } from "../../../../commands/Accounts/Machines/Requests/Parameters/ParamMachineMerge";
import { RepMachineBatchMerge } from "../../../../commands/Accounts/Machines/Responses/RepMachineBatchMerge";

describe("PayMachineBatchMerge", () => {
	test("constructor creates instance with machines", () => {
		const machine1 = new ParamMachineMerge({ id: 123n, nickname: "Machine 1" });
		const machine2 = new ParamMachineMerge({ id: 456n, nickname: "Machine 2" });
		const payload = new PayMachineBatchMerge({ machines: [machine1, machine2] });
		expect(payload.machines).toHaveLength(2);
		expect(payload.machines[0]).toBeInstanceOf(ParamMachineMerge);
		expect(payload.machines[0].id).toBe(123n);
		expect(payload.machines[1].id).toBe(456n);
	});

	test("constructor creates instance with JSON", () => {
		const payload = new PayMachineBatchMerge({
			machines: [
				{ id: 111n, nickname: "JSON Machine 1" },
				{ id: 222n, nickname: "JSON Machine 2" }
			]
		});
		expect(payload.machines).toHaveLength(2);
		expect(payload.machines[0]).toBeInstanceOf(ParamMachineMerge);
		expect(payload.machines[0].id).toBe(111n);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayMachineBatchMerge();
		expect(payload.machines).toEqual([]);
	});

	test("createReply returns RepMachineBatchMerge", () => {
		const payload = new PayMachineBatchMerge();
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepMachineBatchMerge);
	});

	test("toJSON returns correct structure", () => {
		const machine1 = new ParamMachineMerge({ id: 333n, nickname: "Batch Machine 1" });
		const machine2 = new ParamMachineMerge({ id: 444n, nickname: "Batch Machine 2" });
		const payload = new PayMachineBatchMerge({ machines: [machine1, machine2] });
		const json = payload.toJSON();
		expect(json.machines).toHaveLength(2);
		expect(json.machines[0].id).toBe(333n);
		expect(json.machines[1].id).toBe(444n);
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayMachineBatchMerge();
		const action = payload.getAction();
		expect(action.kind).toBe("merge");
		expect(action.object).toBe("machine");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBe(true);
	});

	test("getList returns machines array", () => {
		const machine = new ParamMachineMerge({ id: 555n });
		const payload = new PayMachineBatchMerge({ machines: [machine] });
		expect(payload.getList()).toHaveLength(1);
		expect(payload.getList()[0]).toBe(machine);
	});
});
