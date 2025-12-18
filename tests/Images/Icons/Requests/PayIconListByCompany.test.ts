import { describe, expect, test } from "vitest";
import { PayIconListByCompany } from "../../../../commands/Images/Icons/Requests/PayIconListByCompany";
import { RepIconList } from "../../../../commands/Images/Icons/Responses/RepIconList";

describe("PayIconListByCompany", () => {
	test("constructor creates instance with company", () => {
		const payload = new PayIconListByCompany({ company: 123n });
		expect(payload.company.id).toBe(123n);
		expect(payload.includeDeleted).toBeUndefined();
	});

	test("constructor creates instance with includeDeleted", () => {
		const payload = new PayIconListByCompany({ company: 456n, includeDeleted: true });
		expect(payload.company.id).toBe(456n);
		expect(payload.includeDeleted).toBe(true);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayIconListByCompany();
		expect(payload.company.id).toBeUndefined();
	});

	test("createReply returns RepIconList", () => {
		const payload = new PayIconListByCompany({ company: 123n });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepIconList);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayIconListByCompany({ company: 789n, includeDeleted: true });
		const json = payload.toJSON();
		expect(json).toEqual({
			company: 789n,
			includeDeleted: true
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayIconListByCompany({ company: 123n });
		const action = payload.getAction();
		expect(action.kind).toBe("list");
		expect(action.object).toBe("icon");
		expect(action.filter).toBe("company");
		expect(action.batch).toBeUndefined();
	});

	test("getCompanyId returns company id", () => {
		const payload = new PayIconListByCompany({ company: 999n });
		expect(payload.getCompanyId()).toBe("999");
	});
});
