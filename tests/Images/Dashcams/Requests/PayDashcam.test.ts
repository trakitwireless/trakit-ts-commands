import { describe, expect, test } from "vitest";
import { PayDashcam } from "../../../../src/Images/Dashcams/Requests/PayDashcam";

// PayDashcam is abstract, so we need to use a concrete implementation for testing
class PayDashcamConcrete extends PayDashcam {
	override createReply() {
		return {} as any;
	}
}

describe("PayDashcam", () => {
	test("constructor creates instance with dashcam guid", () => {
		const payload = new PayDashcamConcrete({ dashcam: { guid: "test-guid-123" } });
		expect(payload.dashcam.guid).toBe("test-guid-123");
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayDashcamConcrete();
		expect(payload.dashcam.guid).toBeUndefined();
	});

	test("getKey returns dashcam guid", () => {
		const payload = new PayDashcamConcrete({ dashcam: { guid: "my-test-guid" } });
		expect(payload.getKey()).toBe("my-test-guid");
	});

	test("getKey returns empty string when guid is undefined", () => {
		const payload = new PayDashcamConcrete();
		expect(payload.getKey()).toBe("");
	});
});
