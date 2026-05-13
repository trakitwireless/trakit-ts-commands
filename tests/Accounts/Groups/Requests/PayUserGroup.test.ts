import { describe, expect, test } from "vitest";
import { PayUserGroup } from "../../../../src/Accounts/Groups/Requests/PayUserGroup";

describe("PayUserGroup", () => {
	test("constructor creates instance with id", () => {
		const payload = new PayUserGroup({ id: 123n });
		expect(payload.id).toBe(123n);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayUserGroup();
		expect(payload.id).toBeUndefined();
	});
});
