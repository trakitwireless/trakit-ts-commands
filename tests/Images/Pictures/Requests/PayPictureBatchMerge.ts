import { describe, expect, test } from "vitest";
import { Rectangle } from "@trakit/objects";
import { PayPictureBatchMerge } from "../../../../commands/Images/Pictures/Requests/PayPictureBatchMerge";
import { ParamPictureMerge } from "../../../../commands/Images/Pictures/Requests/Parameters/ParamPictureMerge";
import { RepPictureBatchMerge } from "../../../../commands/Images/Pictures/Responses/RepPictureBatchMerge";

describe("PayPictureBatchMerge", () => {
	test("constructor creates instance with pictures", () => {
		const picture1 = new ParamPictureMerge({ id: 123n, name: "Picture 1" });
		const picture2 = new ParamPictureMerge({ company: 456n, name: "Picture 2" });
		const payload = new PayPictureBatchMerge({ pictures: [picture1, picture2] });
		expect(payload.pictures).toHaveLength(2);
		expect(payload.pictures[0]).toBeInstanceOf(ParamPictureMerge);
		expect(payload.pictures[0].id).toBe(123n);
		expect(payload.pictures[1].name).toBe("Picture 2");
	});

	test("constructor creates instance with JSON", () => {
		const payload = new PayPictureBatchMerge({
			pictures: [
				{ id: 111n, name: "JSON Picture 1" },
				{ company: 222n, name: "JSON Picture 2", focals: [{ x: 1, y: 2, w: 3, h: 4 }] }
			]
		});
		expect(payload.pictures).toHaveLength(2);
		expect(payload.pictures[0]).toBeInstanceOf(ParamPictureMerge);
		expect(payload.pictures[1].focals).toHaveLength(1);
		expect(payload.pictures[1].focals?.[0]).toBeInstanceOf(Rectangle);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayPictureBatchMerge();
		expect(payload.pictures).toEqual([]);
	});

	test("createReply returns RepPictureBatchMerge", () => {
		const payload = new PayPictureBatchMerge();
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepPictureBatchMerge);
	});

	test("toJSON returns correct structure", () => {
		const picture1 = new ParamPictureMerge({ id: 333n, name: "Batch Picture 1" });
		const picture2 = new ParamPictureMerge({ company: 444n, name: "Batch Picture 2" });
		const payload = new PayPictureBatchMerge({ pictures: [picture1, picture2] });
		const json = payload.toJSON();
		expect(json.pictures).toHaveLength(2);
		expect(json.pictures[0].id).toBe(333n);
		expect(json.pictures[1].company).toBe(444n);
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayPictureBatchMerge();
		const action = payload.getAction();
		expect(action.kind).toBe("merge");
		expect(action.object).toBe("picture");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBe(true);
	});

	test("getList returns pictures array", () => {
		const picture = new ParamPictureMerge({ id: 555n });
		const payload = new PayPictureBatchMerge({ pictures: [picture] });
		expect(payload.getList()).toHaveLength(1);
		expect(payload.getList()[0]).toBe(picture);
	});
});
