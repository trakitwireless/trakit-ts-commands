import { describe, expect, test } from "vitest";
import { RepPictureList } from "../../../../src/Images/Pictures/Responses/RepPictureList";
import { Picture } from "@trakit/objects";

describe("RepPictureList", () => {
	test("constructor creates instance with pictures", () => {
		const picture1 = new Picture({ id: 123n, company: 456n, name: "Picture 1" });
		const picture2 = new Picture({ id: 789n, company: 456n, name: "Picture 2" });
		const reply = new RepPictureList({ pictures: [picture1, picture2] });
		expect(reply.pictures).toHaveLength(2);
		expect(reply.pictures[0]).toBeInstanceOf(Picture);
		expect(reply.pictures[0].name).toBe("Picture 1");
		expect(reply.pictures[1].name).toBe("Picture 2");
	});

	test("constructor creates instance with JSON", () => {
		const reply = new RepPictureList({
			pictures: [
				{ id: 111n, company: 222n, name: "JSON Picture 1" },
				{ id: 333n, company: 222n, name: "JSON Picture 2" }
			]
		});
		expect(reply.pictures).toHaveLength(2);
		expect(reply.pictures[0]).toBeInstanceOf(Picture);
		expect(reply.pictures[0].id).toBe(111n);
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepPictureList();
		expect(reply.pictures).toEqual([]);
	});

	test("toJSON returns correct structure", () => {
		const picture = new Picture({ id: 444n, company: 555n, name: "Serialize Picture" });
		const reply = new RepPictureList({ pictures: [picture] });
		const json = reply.toJSON();
		expect(json.pictures).toHaveLength(1);
		expect(json.pictures[0].id).toBe(444n);
		expect(json.pictures[0].name).toBe("Serialize Picture");
	});

	test("getResults returns pictures array", () => {
		const picture = new Picture({ id: 666n, company: 777n, name: "Get Results" });
		const reply = new RepPictureList({ pictures: [picture] });
		expect(reply.getResults()).toHaveLength(1);
		expect(reply.getResults()[0]).toBe(picture);
	});
});
