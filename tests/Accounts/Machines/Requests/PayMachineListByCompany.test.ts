import { describe, expect, test } from "vitest";
import { PayMachineListByCompany } from "../../../../src/Accounts/Machines/Requests/PayMachineListByCompany";
import { RepMachineList } from "../../../../src/Accounts/Machines/Responses/RepMachineList";

describe("PayMachineListByCompany", () => {
	test("constructor creates instance with company", () => {
		const payload = new PayMachineListByCompany({ company: 123n });
		expect(payload.company).toBe(123n);
		expect(payload.includeDeleted).toBeUndefined();
	});

	test("constructor creates instance with includeDeleted", () => {
		const payload = new PayMachineListByCompany({ company: 456n, includeDeleted: true });
		expect(payload.company).toBe(456n);
		expect(payload.includeDeleted).toBe(true);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayMachineListByCompany();
		expect(payload.company).toBeUndefined();
	});

	test("createReply returns RepMachineList", () => {
		const payload = new PayMachineListByCompany({ company: 123n });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepMachineList);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayMachineListByCompany({ company: 789n, includeDeleted: true });
		const json = payload.toJSON();
		expect(json).toEqual({
			company: 789n,
			includeDeleted: true
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayMachineListByCompany({ company: 123n });
		const action = payload.getAction();
		expect(action.kind).toBe("list");
		expect(action.object).toBe("machine");
		expect(action.filter).toBe("company");
		expect(action.batch).toBeUndefined();
	});

	test("getCompanyId returns company", () => {
		const payload = new PayMachineListByCompany({ company: 999n });
		expect(payload.getCompanyId()).toBe(999n);
	});
});
