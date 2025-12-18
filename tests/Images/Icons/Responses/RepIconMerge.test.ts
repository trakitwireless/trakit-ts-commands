import { describe, expect, test } from "vitest";
import { RepIconMerge } from "../../../../commands/Images/Icons/Responses/RepIconMerge";
import { Icon } from "@trakit/objects";

describe("RepIconMerge", () => {
	test("constructor creates instance with icon", () => {
		const icon = new Icon({ id: 123n, company: 456n, name: "Test Icon" });
		const reply = new RepIconMerge({ icon });
		expect(reply.icon).toBeInstanceOf(Icon);
		expect(reply.icon?.id).toBe(123n);
		expect(reply.icon?.name).toBe("Test Icon");
	});

	test("constructor creates instance with JSON", () => {
		const reply = new RepIconMerge({
			icon: {
				id: 789n,
				company: 111n,
				name: "JSON Icon"
			}
		});
		expect(reply.icon).toBeInstanceOf(Icon);
		expect(reply.icon?.id).toBe(789n);
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepIconMerge();
		expect(reply.icon).toBeUndefined();
	});

	test("toJSON returns correct structure", () => {
		const icon = new Icon({ id: 222n, company: 333n, name: "Serialize Icon" });
		const reply = new RepIconMerge({ icon });
		const json = reply.toJSON();
		expect(json.icon).toBeDefined();
		expect(json.icon.id).toBe(222n);
		expect(json.icon.name).toBe("Serialize Icon");
	});

	test("getObject returns icon", () => {
		const icon = new Icon({ id: 444n, company: 555n, name: "Get Object" });
		const reply = new RepIconMerge({ icon });
		expect(reply.getObject()).toBe(icon);
	});
});
