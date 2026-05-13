import { describe, expect, test } from "vitest";
import { RepMachineList } from "../../../../src/Accounts/Machines/Responses/RepMachineList";
import { Machine } from "@trakit/objects";

describe("RepMachineList", () => {
	test("constructor creates instance with machines", () => {
		const machine1 = new Machine({ key: "key1", company: 456n, nickname: "Machine 1" });
		const machine2 = new Machine({ key: "key2", company: 456n, nickname: "Machine 2" });
		const reply = new RepMachineList({ machines: [machine1, machine2] });
		expect(reply.machines).toHaveLength(2);
		expect(reply.machines[0]).toBeInstanceOf(Machine);
		expect(reply.machines[0].nickname).toBe("Machine 1");
		expect(reply.machines[1].nickname).toBe("Machine 2");
	});

	test("constructor creates instance with JSON", () => {
		const reply = new RepMachineList({
			machines: [
				{ key: "json-key1", company: 222n, nickname: "JSON Machine 1" },
				{ key: "json-key2", company: 222n, nickname: "JSON Machine 2" }
			]
		});
		expect(reply.machines).toHaveLength(2);
		expect(reply.machines[0]).toBeInstanceOf(Machine);
		expect(reply.machines[0].key).toBe("json-key1");
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepMachineList();
		expect(reply.machines).toEqual([]);
	});

	test("toJSON returns correct structure", () => {
		const machine = new Machine({ key: "serialize-key", company: 555n, nickname: "Serialize Machine" });
		const reply = new RepMachineList({ machines: [machine] });
		const json = reply.toJSON();
		expect(json.machines).toHaveLength(1);
		expect(json.machines[0].key).toBe("serialize-key");
		expect(json.machines[0].nickname).toBe("Serialize Machine");
	});

	test("getResults returns machines array", () => {
		const machine = new Machine({ key: "results-key", company: 777n, nickname: "Get Results" });
		const reply = new RepMachineList({ machines: [machine] });
		expect(reply.getResults()).toHaveLength(1);
		expect(reply.getResults()[0]).toBe(machine);
	});
});
