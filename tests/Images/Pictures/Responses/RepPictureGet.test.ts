import { describe, expect, test } from "vitest";
import { Rectangle } from "@trakit/objects";
import { RepPictureGet } from "../../../../src/Images/Pictures/Responses/RepPictureGet";
import { Picture } from "@trakit/objects";

describe("RepPictureGet", () => {
	test("constructor creates instance with picture", () => {
		const picture = new Picture({ id: 123n, company: 456n, name: "Test Picture" });
		const reply = new RepPictureGet({ picture });
		expect(reply.picture).toBeInstanceOf(Picture);
		expect(reply.picture?.id).toBe(123n);
		expect(reply.picture?.name).toBe("Test Picture");
	});

	test("constructor creates instance with JSON", () => {
		const reply = new RepPictureGet({
			picture: {
				id: 789n,
				company: 111n,
				name: "JSON Picture",
				notes: "Test notes",
				focals: [{ x: 10, y: 20, w: 30, h: 40 }]
			}
		});
		expect(reply.picture).toBeInstanceOf(Picture);
		expect(reply.picture?.id).toBe(789n);
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepPictureGet();
		expect(reply.picture).toBeUndefined();
	});

	test("toJSON returns correct structure", () => {
		const picture = new Picture({ id: 222n, company: 333n, name: "Serialize Picture" });
		const reply = new RepPictureGet({ picture });
		const json = reply.toJSON();
		expect(json.picture).toBeDefined();
		expect(json.picture.id).toBe(222n);
		expect(json.picture.name).toBe("Serialize Picture");
	});

	test("getObject returns picture", () => {
		const picture = new Picture({ id: 444n, company: 555n, name: "Get Object" });
		const reply = new RepPictureGet({ picture });
		expect(reply.getObject()).toBe(picture);
	});
});
