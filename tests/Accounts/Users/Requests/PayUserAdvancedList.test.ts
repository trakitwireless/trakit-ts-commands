import { describe, expect, test } from "vitest";
import { PayUserAdvancedList } from "../../../../src/Accounts/Users/Requests/PayUserAdvancedList";
import { RepUserAdvancedList } from "../../../../src/Accounts/Users/Responses/RepUserAdvancedList";

describe("PayUserAdvancedList", () => {
	test("constructor creates instance with company", () => {
		const payload = new PayUserAdvancedList({ company: { id: 123n } });
		expect(payload.company.id).toBe(123n);
		expect(payload.includeDeleted).toBe(false);
	});

	test("constructor creates instance with includeDeleted", () => {
		const payload = new PayUserAdvancedList({ company: { id: 456n }, includeDeleted: true });
		expect(payload.company.id).toBe(456n);
		expect(payload.includeDeleted).toBe(true);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayUserAdvancedList();
		expect(payload.company.id).toBeUndefined();
	});

	test("createReply returns RepUserAdvancedList", () => {
		const payload = new PayUserAdvancedList({ company: { id: 123n } });
		const reply = payload.createReply({});
		expect(reply).toBeInstanceOf(RepUserAdvancedList);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayUserAdvancedList({ company: { id: 789n }, includeDeleted: true });
		const json = payload.toJSON();
		expect(json).toEqual({
			company: { id: 789n },
			includeDeleted: true
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayUserAdvancedList({ company: { id: 123n } });
		const action = payload.getAction();
		expect(action.kind).toBe("list");
		expect(action.object).toBe("user");
		expect(action.filter).toBe("advanced");
		expect(action.batch).toBeUndefined();
	});

	test("getCompanyId returns company id", () => {
		const payload = new PayUserAdvancedList({ company: { id: 999n } });
		expect(payload.getCompanyId()).toBe(999n);
	});
});
