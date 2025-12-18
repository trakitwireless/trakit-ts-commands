import { describe, expect, test } from "vitest";
import { PayMachineMerge } from "../../../../commands/Accounts/Machines/Requests/PayMachineMerge";
import { ParamMachineMerge } from "../../../../commands/Accounts/Machines/Requests/Parameters/ParamMachineMerge";
import { RepMachineMerge } from "../../../../commands/Accounts/Machines/Responses/RepMachineMerge";

describe("PayMachineMerge", () => {
	test("constructor creates instance with machine", () => {
		const machine = new ParamMachineMerge({ id: 123n, nickname: "Test Machine" });
		const payload = new PayMachineMerge({ machine });
		expect(payload.machine).toBeInstanceOf(ParamMachineMerge);
		expect(payload.machine.id).toBe(123n);
		expect(payload.machine.nickname).toBe("Test Machine");
	});

	test("constructor creates instance with JSON", () => {
		const payload = new PayMachineMerge({
			machine: {
				id: 456n,
				nickname: "JSON Machine",
				notes: "Test notes",
				enabled: true
			}
		});
		expect(payload.machine).toBeInstanceOf(ParamMachineMerge);
		expect(payload.machine.id).toBe(456n);
		expect(payload.machine.nickname).toBe("JSON Machine");
		expect(payload.machine.notes).toBe("Test notes");
		expect(payload.machine.enabled).toBe(true);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayMachineMerge();
		expect(payload.machine).toBeInstanceOf(ParamMachineMerge);
	});

	test("createReply returns RepMachineMerge", () => {
		const payload = new PayMachineMerge();
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepMachineMerge);
	});

	test("toJSON returns correct structure", () => {
		const machine = new ParamMachineMerge({
			id: 789n,
			nickname: "Serialized Machine",
			notes: "Serialize this",
			enabled: false
		});
		const payload = new PayMachineMerge({ machine });
		const json = payload.toJSON();
		expect(json.machine.id).toBe(789n);
		expect(json.machine.nickname).toBe("Serialized Machine");
		expect(json.machine.notes).toBe("Serialize this");
		expect(json.machine.enabled).toBe(false);
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayMachineMerge();
		const action = payload.getAction();
		expect(action.kind).toBe("merge");
		expect(action.object).toBe("machine");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});

	test("getKey returns machine id", () => {
		const machine = new ParamMachineMerge({ id: 999n });
		const payload = new PayMachineMerge({ machine });
		expect(payload.getKey()).toBe("999");
	});
});
