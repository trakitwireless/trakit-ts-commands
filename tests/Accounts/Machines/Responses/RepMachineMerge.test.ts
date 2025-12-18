import { describe, expect, test } from "vitest";
import { RepMachineMerge } from "../../../../commands/Accounts/Machines/Responses/RepMachineMerge";
import { Machine } from "@trakit/objects";

describe("RepMachineMerge", () => {
	test("constructor creates instance with machine", () => {
		const machine = new Machine({ key: "test-key", company: 456n, nickname: "Test Machine" });
		const reply = new RepMachineMerge({ machine });
		expect(reply.machine).toBeInstanceOf(Machine);
		expect(reply.machine?.key).toBe("test-key");
		expect(reply.machine?.nickname).toBe("Test Machine");
	});

	test("constructor creates instance with JSON", () => {
		const reply = new RepMachineMerge({
			machine: {
				key: "json-key",
				company: 111n,
				nickname: "JSON Machine"
			}
		});
		expect(reply.machine).toBeInstanceOf(Machine);
		expect(reply.machine?.key).toBe("json-key");
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepMachineMerge();
		expect(reply.machine).toBeUndefined();
	});

	test("toJSON returns correct structure", () => {
		const machine = new Machine({ key: "serialize-key", company: 333n, nickname: "Serialize Machine" });
		const reply = new RepMachineMerge({ machine });
		const json = reply.toJSON();
		expect(json.machine).toBeDefined();
		expect(json.machine.key).toBe("serialize-key");
		expect(json.machine.nickname).toBe("Serialize Machine");
	});

	test("getObject returns machine", () => {
		const machine = new Machine({ key: "object-key", company: 555n, nickname: "Get Object" });
		const reply = new RepMachineMerge({ machine });
		expect(reply.getObject()).toBe(machine);
	});
});
