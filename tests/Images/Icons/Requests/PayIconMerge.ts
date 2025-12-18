import { describe, expect, test } from "vitest";
import { IconGlyph, IconLabel } from "@trakit/objects";
import { PayIconMerge } from "../../../../commands/Images/Icons/Requests/PayIconMerge";
import { ParamIconMerge } from "../../../../commands/Images/Icons/Requests/Parameters/ParamIconMerge";
import { RepIconMerge } from "../../../../commands/Images/Icons/Responses/RepIconMerge";

describe("PayIconMerge", () => {
	test("constructor creates instance with icon", () => {
		const icon = new ParamIconMerge({ id: 123n, name: "Test Icon" });
		const payload = new PayIconMerge({ icon });
		expect(payload.icon).toBeInstanceOf(ParamIconMerge);
		expect(payload.icon.id).toBe(123n);
		expect(payload.icon.name).toBe("Test Icon");
	});

	test("constructor creates instance with JSON", () => {
		const payload = new PayIconMerge({
			icon: {
				id: 456n,
				name: "JSON Icon",
				notes: "Test notes",
				category: "Vehicle",
				global: true,
				usage: ["asset", "place"]
			}
		});
		expect(payload.icon).toBeInstanceOf(ParamIconMerge);
		expect(payload.icon.id).toBe(456n);
		expect(payload.icon.name).toBe("JSON Icon");
		expect(payload.icon.category).toBe("Vehicle");
		expect(payload.icon.global).toBe(true);
		expect(payload.icon.usage).toEqual(["asset", "place"]);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayIconMerge();
		expect(payload.icon).toBeInstanceOf(ParamIconMerge);
	});

	test("createReply returns RepIconMerge", () => {
		const payload = new PayIconMerge();
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepIconMerge);
	});

	test("toJSON returns correct structure", () => {
		const icon = new ParamIconMerge({
			id: 789n,
			name: "Serialized Icon",
			notes: "Serialize this",
			category: "Equipment",
			global: false,
			usage: ["asset"]
		});
		const payload = new PayIconMerge({ icon });
		const json = payload.toJSON();
		expect(json.icon.id).toBe(789n);
		expect(json.icon.name).toBe("Serialized Icon");
		expect(json.icon.category).toBe("Equipment");
		expect(json.icon.global).toBe(false);
		expect(json.icon.usage).toEqual(["asset"]);
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayIconMerge();
		const action = payload.getAction();
		expect(action.kind).toBe("merge");
		expect(action.object).toBe("icon");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});

	test("getKey returns icon id", () => {
		const icon = new ParamIconMerge({ id: 999n });
		const payload = new PayIconMerge({ icon });
		expect(payload.getKey()).toBe("999");
	});
});
