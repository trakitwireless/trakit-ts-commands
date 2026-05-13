import { describe, expect, test } from "vitest";
import { PayIcon } from "../../../../src/Images/Icons/Requests/PayIcon";

describe("PayIcon", () => {
	test("constructor creates instance with id", () => {
		const payload = new PayIcon({ id: 123n });
		expect(payload.id).toBe(123n);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayIcon();
		expect(payload.id).toBeUndefined();
	});
});
