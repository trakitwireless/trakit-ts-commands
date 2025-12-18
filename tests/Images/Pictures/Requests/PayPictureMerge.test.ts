import { describe, expect, test } from "vitest";
import { Rectangle } from "@trakit/objects";
import { PayPictureMerge } from "../../../../commands/Images/Pictures/Requests/PayPictureMerge";
import { ParamPictureMerge } from "../../../../commands/Images/Pictures/Requests/Parameters/ParamPictureMerge";
import { RepPictureMerge } from "../../../../commands/Images/Pictures/Responses/RepPictureMerge";

describe("PayPictureMerge", () => {
	test("constructor creates instance with picture", () => {
		const picture = new ParamPictureMerge({ id: 123n, name: "Test Picture" });
		const payload = new PayPictureMerge({ picture });
		expect(payload.picture).toBeInstanceOf(ParamPictureMerge);
		expect(payload.picture.id).toBe(123n);
		expect(payload.picture.name).toBe("Test Picture");
	});

	test("constructor creates instance with JSON", () => {
		const payload = new PayPictureMerge({
			picture: {
				id: 456n,
				name: "JSON Picture",
				notes: "Test notes",
				focals: [{ x: 10, y: 20, w: 30, h: 40 }]
			}
		});
		expect(payload.picture).toBeInstanceOf(ParamPictureMerge);
		expect(payload.picture.id).toBe(456n);
		expect(payload.picture.name).toBe("JSON Picture");
		expect(payload.picture.notes).toBe("Test notes");
		expect(payload.picture.focals).toHaveLength(1);
		expect(payload.picture.focals?.[0]).toBeInstanceOf(Rectangle);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayPictureMerge();
		expect(payload.picture).toBeInstanceOf(ParamPictureMerge);
	});

	test("createReply returns RepPictureMerge", () => {
		const payload = new PayPictureMerge();
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepPictureMerge);
	});

	test("toJSON returns correct structure", () => {
		const focal = new Rectangle({ x: 5, y: 10, w: 15, h: 20 });
		const picture = new ParamPictureMerge({
			id: 789n,
			name: "Serialized Picture",
			notes: "Serialize this",
			focals: [focal]
		});
		const payload = new PayPictureMerge({ picture });
		const json = payload.toJSON();
		expect(json.picture.id).toBe(789n);
		expect(json.picture.name).toBe("Serialized Picture");
		expect(json.picture.notes).toBe("Serialize this");
		expect(json.picture.focals).toHaveLength(1);
		expect(json.picture.focals[0]).toEqual({ x: 5, y: 10, w: 15, h: 20 });
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayPictureMerge();
		const action = payload.getAction();
		expect(action.kind).toBe("merge");
		expect(action.object).toBe("picture");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});

	test("getKey returns picture id", () => {
		const picture = new ParamPictureMerge({ id: 999n });
		const payload = new PayPictureMerge({ picture });
		expect(payload.getKey()).toBe("999");
	});
});
