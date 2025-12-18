import { describe, expect, test } from "vitest";
import { PayIconList } from "../../../../commands/Images/Icons/Requests/PayIconList";

describe("PayIconList", () => {
	test("constructor creates instance with includeDeleted", () => {
		const payload = new PayIconList({ includeDeleted: true });
		expect(payload.includeDeleted).toBe(true);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayIconList();
		expect(payload.includeDeleted).toBeUndefined();
	});
});
