import { describe, expect, test } from "vitest";
import { RepIconBatchMerge } from "../../../../commands/Images/Icons/Responses/RepIconBatchMerge";
import { Icon } from "@trakit/objects";

describe("RepIconBatchMerge", () => {
	test("constructor creates instance with icons", () => {
		const icon1 = new Icon({ id: 123n, company: 456n, name: "Icon 1" });
		const icon2 = new Icon({ id: 789n, company: 456n, name: "Icon 2" });
		const reply = new RepIconBatchMerge({ icons: [icon1, icon2] });
		expect(reply.icons).toHaveLength(2);
		expect(reply.icons[0]).toBeInstanceOf(Icon);
		expect(reply.icons[0].name).toBe("Icon 1");
		expect(reply.icons[1].name).toBe("Icon 2");
	});

	test("constructor creates instance with JSON", () => {
		const reply = new RepIconBatchMerge({
			icons: [
				{ id: 111n, company: 222n, name: "JSON Icon 1" },
				{ id: 333n, company: 222n, name: "JSON Icon 2" }
			]
		});
		expect(reply.icons).toHaveLength(2);
		expect(reply.icons[0]).toBeInstanceOf(Icon);
		expect(reply.icons[0].id).toBe(111n);
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepIconBatchMerge();
		expect(reply.icons).toEqual([]);
	});

	test("toJSON returns correct structure", () => {
		const icon = new Icon({ id: 444n, company: 555n, name: "Serialize Icon" });
		const reply = new RepIconBatchMerge({ icons: [icon] });
		const json = reply.toJSON();
		expect(json.icons).toHaveLength(1);
		expect(json.icons[0].id).toBe(444n);
		expect(json.icons[0].name).toBe("Serialize Icon");
	});

	test("getResults returns icons array", () => {
		const icon = new Icon({ id: 666n, company: 777n, name: "Get Results" });
		const reply = new RepIconBatchMerge({ icons: [icon] });
		expect(reply.getResults()).toHaveLength(1);
		expect(reply.getResults()[0]).toBe(icon);
	});
});
