import { describe, expect, test } from "vitest";
import { IconGlyph, IconLabel } from "@trakit/objects";
import { PayIconBatchMerge } from "../../../../commands/Images/Icons/Requests/PayIconBatchMerge";
import { ParamIconMerge } from "../../../../commands/Images/Icons/Requests/Parameters/ParamIconMerge";
import { RepIconBatchMerge } from "../../../../commands/Images/Icons/Responses/RepIconBatchMerge";

describe("PayIconBatchMerge", () => {
	test("constructor creates instance with icons", () => {
		const icon1 = new ParamIconMerge({ id: 123n, name: "Icon 1" });
		const icon2 = new ParamIconMerge({ company: 456n, name: "Icon 2" });
		const payload = new PayIconBatchMerge({ icons: [icon1, icon2] });
		expect(payload.icons).toHaveLength(2);
		expect(payload.icons[0]).toBeInstanceOf(ParamIconMerge);
		expect(payload.icons[0].id).toBe(123n);
		expect(payload.icons[1].name).toBe("Icon 2");
	});

	test("constructor creates instance with JSON", () => {
		const payload = new PayIconBatchMerge({
			icons: [
				{ id: 111n, name: "JSON Icon 1", category: "Type1" },
				{ company: 222n, name: "JSON Icon 2", global: true }
			]
		});
		expect(payload.icons).toHaveLength(2);
		expect(payload.icons[0]).toBeInstanceOf(ParamIconMerge);
		expect(payload.icons[0].category).toBe("Type1");
		expect(payload.icons[1].global).toBe(true);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayIconBatchMerge();
		expect(payload.icons).toEqual([]);
	});

	test("createReply returns RepIconBatchMerge", () => {
		const payload = new PayIconBatchMerge();
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepIconBatchMerge);
	});

	test("toJSON returns correct structure", () => {
		const icon1 = new ParamIconMerge({ id: 333n, name: "Batch Icon 1" });
		const icon2 = new ParamIconMerge({ company: 444n, name: "Batch Icon 2" });
		const payload = new PayIconBatchMerge({ icons: [icon1, icon2] });
		const json = payload.toJSON();
		expect(json.icons).toHaveLength(2);
		expect(json.icons[0].id).toBe(333n);
		expect(json.icons[1].company).toBe(444n);
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayIconBatchMerge();
		const action = payload.getAction();
		expect(action.kind).toBe("merge");
		expect(action.object).toBe("icon");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBe(true);
	});

	test("getList returns icons array", () => {
		const icon = new ParamIconMerge({ id: 555n });
		const payload = new PayIconBatchMerge({ icons: [icon] });
		expect(payload.getList()).toHaveLength(1);
		expect(payload.getList()[0]).toBe(icon);
	});
});
