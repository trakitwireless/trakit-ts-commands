import { describe, expect, test } from "vitest";
import { PayDashcamGet } from "../../../../commands/Images/Dashcams/Requests/PayDashcamGet";
import { RepDashcamGet } from "../../../../commands/Images/Dashcams/Responses/RepDashcamGet";

describe("PayDashcamGet", () => {
	test("constructor creates instance with dashcam guid", () => {
		const payload = new PayDashcamGet({ dashcam: { guid: "test-guid-123" } });
		expect(payload.dashcam.guid).toBe("test-guid-123");
		expect(payload.includeDeleted).toBe(false);
	});

	test("constructor creates instance with includeDeleted", () => {
		const payload = new PayDashcamGet({ dashcam: { guid: "test-guid-456" }, includeDeleted: true });
		expect(payload.dashcam.guid).toBe("test-guid-456");
		expect(payload.includeDeleted).toBe(true);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayDashcamGet();
		expect(payload.dashcam.guid).toBeUndefined();
		expect(payload.includeDeleted).toBe(false);
	});

	test("createReply returns RepDashcamGet", () => {
		const payload = new PayDashcamGet({ dashcam: { guid: "test-guid-123" } });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepDashcamGet);
	});

	test("getKey returns dashcam guid", () => {
		const payload = new PayDashcamGet({ dashcam: { guid: "my-guid" } });
		expect(payload.getKey()).toBe("my-guid");
	});
});
