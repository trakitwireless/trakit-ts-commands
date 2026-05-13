import { describe, expect, test } from "vitest";
import { PayPicture } from "../../../../src/Images/Pictures/Requests/PayPicture";

describe("PayPicture", () => {
	test("constructor creates instance with id", () => {
		const payload = new PayPicture({ id: 123n });
		expect(payload.id).toBe(123n);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayPicture();
		expect(payload.id).toBeUndefined();
	});
});
