import { describe, expect, test } from "vitest";
import { RepPictureMerge } from "../../../../commands/Images/Pictures/Responses/RepPictureMerge";
import { Picture } from "@trakit/objects";

describe("RepPictureMerge", () => {
	test("constructor creates instance with picture", () => {
		const picture = new Picture({ id: 123n, company: 456n, name: "Test Picture" });
		const reply = new RepPictureMerge({ picture });
		expect(reply.picture).toBeInstanceOf(Picture);
		expect(reply.picture?.id).toBe(123n);
		expect(reply.picture?.name).toBe("Test Picture");
	});

	test("constructor creates instance with JSON", () => {
		const reply = new RepPictureMerge({
			picture: {
				id: 789n,
				company: 111n,
				name: "JSON Picture"
			}
		});
		expect(reply.picture).toBeInstanceOf(Picture);
		expect(reply.picture?.id).toBe(789n);
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepPictureMerge();
		expect(reply.picture).toBeUndefined();
	});

	test("toJSON returns correct structure", () => {
		const picture = new Picture({ id: 222n, company: 333n, name: "Serialize Picture" });
		const reply = new RepPictureMerge({ picture });
		const json = reply.toJSON();
		expect(json.picture).toBeDefined();
		expect(json.picture.id).toBe(222n);
		expect(json.picture.name).toBe("Serialize Picture");
	});

	test("getObject returns picture", () => {
		const picture = new Picture({ id: 444n, company: 555n, name: "Get Object" });
		const reply = new RepPictureMerge({ picture });
		expect(reply.getObject()).toBe(picture);
	});
});
