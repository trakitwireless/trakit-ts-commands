import { describe, expect, test } from "vitest";
import { Rectangle } from "@trakit/objects";
import { ParamPictureMerge } from "../../../../../src/Images/Pictures/Requests/Parameters/ParamPictureMerge";

describe("ParamPictureMerge", () => {
	test("constructor creates instance with all properties", () => {
		const focal = new Rectangle({ x: 10, y: 20, w: 30, h: 40 });
		const param = new ParamPictureMerge({
			id: 123n,
			company: 456n,
			name: "Test Picture",
			notes: "Test notes",
			focals: [focal]
		});
		expect(param.id).toBe(123n);
		expect(param.company).toBe(456n);
		expect(param.name).toBe("Test Picture");
		expect(param.notes).toBe("Test notes");
		expect(param.focals).toHaveLength(1);
		expect(param.focals?.[0]).toBeInstanceOf(Rectangle);
	});

	test("constructor creates instance with JSON focals", () => {
		const param = new ParamPictureMerge({
			id: 789n,
			focals: [{ x: 5, y: 10, w: 15, h: 20 }]
		});
		expect(param.id).toBe(789n);
		expect(param.focals).toHaveLength(1);
		expect(param.focals?.[0]).toBeInstanceOf(Rectangle);
		expect(param.focals?.[0].x).toBe(5);
		expect(param.focals?.[0].y).toBe(10);
	});

	test("constructor creates instance without parameters", () => {
		const param = new ParamPictureMerge();
		expect(param.id).toBeUndefined();
		expect(param.company).toBeUndefined();
		expect(param.name).toBeUndefined();
		expect(param.notes).toBeUndefined();
		expect(param.focals).toBeUndefined();
	});

	test("toJSON returns correct structure for update", () => {
		const focal = new Rectangle({ x: 1, y: 2, w: 3, h: 4 });
		const param = new ParamPictureMerge({
			id: 111n,
			v: [1, 2, 3],
			name: "Updated Picture",
			notes: "Updated notes",
			focals: [focal]
		});
		const json = param.toJSON();
		expect(json.id).toBe(111n);
		expect(json.v).toEqual([1, 2, 3]);
		expect(json.company).toBeUndefined();
		expect(json.name).toBe("Updated Picture");
		expect(json.notes).toBe("Updated notes");
		expect(json.focals).toHaveLength(1);
		expect(json.focals[0]).toEqual({ x: 1, y: 2, w: 3, h: 4 });
	});

	test("toJSON returns correct structure for create", () => {
		const param = new ParamPictureMerge({
			company: 222n,
			name: "New Picture"
		});
		const json = param.toJSON();
		expect(json.id).toBeUndefined();
		expect(json.v).toBeUndefined();
		expect(json.company).toBe(222n);
		expect(json.name).toBe("New Picture");
	});

	test("toJSON omits undefined properties", () => {
		const param = new ParamPictureMerge({ id: 333n });
		const json = param.toJSON();
		expect(json.id).toBe(333n);
		expect(json).not.toHaveProperty("name");
		expect(json).not.toHaveProperty("notes");
		expect(json).not.toHaveProperty("focals");
	});
});
