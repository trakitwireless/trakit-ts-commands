import { describe, expect, test } from "vitest";
import { PayUserList } from "../../../../commands/Accounts/Users/Requests/PayUserList";

// Create a concrete implementation for testing the abstract class
class TestPayUserList extends PayUserList {
	createReply(): any {
		return {};
	}
}

describe("PayUserList", () => {
	test("constructor creates instance with includeDeleted", () => {
		const payload = new TestPayUserList({ includeDeleted: true });
		expect(payload.includeDeleted).toBe(true);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new TestPayUserList();
		expect(payload.includeDeleted).toBe(false);
	});

	test("toJSON returns correct structure", () => {
		const payload = new TestPayUserList({ includeDeleted: true });
		const json = payload.toJSON();
		expect(json).toEqual({
			includeDeleted: true
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new TestPayUserList();
		const action = payload.getAction();
		expect(action.kind).toBe("list");
		expect(action.object).toBe("user");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});
});
