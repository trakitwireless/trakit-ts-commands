import { describe, expect, test } from "vitest";
import { DashcamMediaType } from "@trakit/objects";
import { PayDashcamList } from "../../../../src/Images/Dashcams/Requests/PayDashcamList";

describe("PayDashcamList", () => {
	test("constructor creates instance with includeDeleted", () => {
		const payload = new PayDashcamList({ includeDeleted: true });
		expect(payload.includeDeleted).toBe(true);
	});

	test("constructor creates instance with kind", () => {
		const payload = new PayDashcamList({ kind: "video" });
		expect(payload.kind).toBe(DashcamMediaType.video);
	});

	test("constructor creates instance with both properties", () => {
		const payload = new PayDashcamList({ includeDeleted: true, kind: "photo" });
		expect(payload.includeDeleted).toBe(true);
		expect(payload.kind).toBe(DashcamMediaType.photo);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayDashcamList();
		expect(payload.includeDeleted).toBe(false);
		expect(payload.kind).toBeUndefined();
	});
});
