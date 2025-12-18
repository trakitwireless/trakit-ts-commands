import { describe, expect, test } from "vitest";
import { PayPictureList } from "../../../../commands/Images/Pictures/Requests/PayPictureList";

describe("PayPictureList", () => {
	test("constructor creates instance with includeDeleted", () => {
		const payload = new PayPictureList({ includeDeleted: true });
		expect(payload.includeDeleted).toBe(true);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayPictureList();
		expect(payload.includeDeleted).toBeUndefined();
	});
});
