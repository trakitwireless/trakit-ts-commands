import { describe, expect, test } from "vitest";
import { PayPictureListByCompany } from "../../../../commands/Images/Pictures/Requests/PayPictureListByCompany";
import { RepPictureList } from "../../../../commands/Images/Pictures/Responses/RepPictureList";

describe("PayPictureListByCompany", () => {
	test("constructor creates instance with company", () => {
		const payload = new PayPictureListByCompany({ company: 123n });
		expect(payload.company.id).toBe(123n);
		expect(payload.includeDeleted).toBeUndefined();
	});

	test("constructor creates instance with includeDeleted", () => {
		const payload = new PayPictureListByCompany({ company: 456n, includeDeleted: true });
		expect(payload.company.id).toBe(456n);
		expect(payload.includeDeleted).toBe(true);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayPictureListByCompany();
		expect(payload.company.id).toBeUndefined();
	});

	test("createReply returns RepPictureList", () => {
		const payload = new PayPictureListByCompany({ company: 123n });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepPictureList);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayPictureListByCompany({ company: 789n, includeDeleted: true });
		const json = payload.toJSON();
		expect(json).toEqual({
			company: 789n,
			includeDeleted: true
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayPictureListByCompany({ company: 123n });
		const action = payload.getAction();
		expect(action.kind).toBe("list");
		expect(action.object).toBe("picture");
		expect(action.filter).toBe("company");
		expect(action.batch).toBeUndefined();
	});

	test("getCompanyId returns company id", () => {
		const payload = new PayPictureListByCompany({ company: 999n });
		expect(payload.getCompanyId()).toBe("999");
	});
});
