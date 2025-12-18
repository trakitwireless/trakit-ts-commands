import { describe, expect, test } from "vitest";
import { IconGlyph, IconLabel } from "@trakit/objects";
import { ParamIconMerge } from "../../../../../commands/Images/Icons/Requests/Parameters/ParamIconMerge";

describe("ParamIconMerge", () => {
	test("constructor creates instance with all properties", () => {
		const label = IconLabel.fromJSON({ visible: true, color: "#FF0000" });
		const param = new ParamIconMerge({
			id: 123n,
			company: 456n,
			name: "Test Icon",
			notes: "Test notes",
			category: "Vehicle",
			global: true,
			usage: ["asset", "place"],
			label
		});
		expect(param.id).toBe(123n);
		expect(param.company).toBe(456n);
		expect(param.name).toBe("Test Icon");
		expect(param.notes).toBe("Test notes");
		expect(param.category).toBe("Vehicle");
		expect(param.global).toBe(true);
		expect(param.usage).toEqual(["asset", "place"]);
		expect(param.label).toBeInstanceOf(IconLabel);
	});

	test("constructor creates instance with JSON", () => {
		const param = new ParamIconMerge({
			id: 789n,
			category: "Equipment",
			global: false,
			usage: ["asset"],
			label: { visible: true, color: "#00FF00" },
			badge: { visible: false, color: "#0000FF" }
		});
		expect(param.id).toBe(789n);
		expect(param.category).toBe("Equipment");
		expect(param.global).toBe(false);
		expect(param.usage).toEqual(["asset"]);
		expect(param.label).toBeInstanceOf(IconLabel);
		expect(param.badge).toBeInstanceOf(IconLabel);
	});

	test("constructor creates instance without parameters", () => {
		const param = new ParamIconMerge();
		expect(param.id).toBeUndefined();
		expect(param.company).toBeUndefined();
		expect(param.name).toBeUndefined();
		expect(param.notes).toBeUndefined();
		expect(param.category).toBeUndefined();
		expect(param.global).toBeUndefined();
		expect(param.usage).toBeUndefined();
		expect(param.label).toBeNull();
		expect(param.badge).toBeNull();
		expect(param.glyphs).toBeUndefined();
	});

	test("toJSON returns correct structure for update", () => {
		const param = new ParamIconMerge({
			id: 111n,
			v: [1, 2, 3],
			name: "Updated Icon",
			notes: "Updated notes",
			category: "Type1",
			global: true,
			usage: ["asset", "user"]
		});
		const json = param.toJSON();
		expect(json.id).toBe(111n);
		expect(json.v).toEqual([1, 2, 3]);
		expect(json.company).toBeUndefined();
		expect(json.name).toBe("Updated Icon");
		expect(json.notes).toBe("Updated notes");
		expect(json.category).toBe("Type1");
		expect(json.global).toBe(true);
		expect(json.usage).toEqual(["asset", "user"]);
	});

	test("toJSON returns correct structure for create", () => {
		const param = new ParamIconMerge({
			company: 222n,
			name: "New Icon",
			global: false
		});
		const json = param.toJSON();
		expect(json.id).toBeUndefined();
		expect(json.v).toBeUndefined();
		expect(json.company).toBe(222n);
		expect(json.name).toBe("New Icon");
		expect(json.global).toBe(false);
	});

	test("toJSON omits undefined properties", () => {
		const param = new ParamIconMerge({ id: 333n });
		const json = param.toJSON();
		expect(json.id).toBe(333n);
		expect(json).not.toHaveProperty("name");
		expect(json).not.toHaveProperty("notes");
		expect(json).not.toHaveProperty("category");
		expect(json).not.toHaveProperty("usage");
	});

	test("toJSON includes false global value", () => {
		const param = new ParamIconMerge({ id: 444n, global: false });
		const json = param.toJSON();
		expect(json.global).toBe(false);
	});
});
