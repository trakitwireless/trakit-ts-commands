import { describe, expect, test } from "vitest";
import { PayUserGroupList } from "../../../../src/Accounts/Groups/Requests/PayUserGroupList";

describe("PayUserGroupList", () => {
	test("constructor creates instance with includeDeleted", () => {
		const payload = new PayUserGroupList({ includeDeleted: true });
		expect(payload.includeDeleted).toBe(true);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayUserGroupList();
		expect(payload.includeDeleted).toBeUndefined();
	});
});
