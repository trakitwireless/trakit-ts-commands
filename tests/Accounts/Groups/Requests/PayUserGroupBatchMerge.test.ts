import { describe, expect, test } from "vitest";
import { PayUserGroupBatchMerge } from "../../../../src/Accounts/Groups/Requests/PayUserGroupBatchMerge";
import { ParamUserGroupMerge } from "../../../../src/Accounts/Groups/Requests/Parameters/ParamUserGroupMerge";
import { RepUserGroupBatchMerge } from "../../../../src/Accounts/Groups/Responses/RepUserGroupBatchMerge";

describe("PayUserGroupBatchMerge", () => {
	test("constructor creates instance with userGroups", () => {
		const group1 = new ParamUserGroupMerge({ id: 123n, name: "Group 1" });
		const group2 = new ParamUserGroupMerge({ company: 456n, name: "Group 2" });
		const payload = new PayUserGroupBatchMerge({ userGroups: [group1, group2] });
		expect(payload.userGroups).toHaveLength(2);
		expect(payload.userGroups[0]).toBeInstanceOf(ParamUserGroupMerge);
		expect(payload.userGroups[0].id).toBe(123n);
		expect(payload.userGroups[1].name).toBe("Group 2");
	});

	test("constructor creates instance with JSON", () => {
		const payload = new PayUserGroupBatchMerge({
			userGroups: [
				{ id: 111n, name: "JSON Group 1" },
				{ company: 222n, name: "JSON Group 2" }
			]
		});
		expect(payload.userGroups).toHaveLength(2);
		expect(payload.userGroups[0]).toBeInstanceOf(ParamUserGroupMerge);
		expect(payload.userGroups[0].name).toBe("JSON Group 1");
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayUserGroupBatchMerge();
		expect(payload.userGroups).toEqual([]);
	});

	test("createReply returns RepUserGroupBatchMerge", () => {
		const payload = new PayUserGroupBatchMerge();
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepUserGroupBatchMerge);
	});

	test("toJSON returns correct structure", () => {
		const group1 = new ParamUserGroupMerge({ id: 333n, name: "Batch Group 1" });
		const group2 = new ParamUserGroupMerge({ company: 444n, name: "Batch Group 2" });
		const payload = new PayUserGroupBatchMerge({ userGroups: [group1, group2] });
		const json = payload.toJSON();
		expect(json.userGroups).toHaveLength(2);
		expect(json.userGroups[0].id).toBe(333n);
		expect(json.userGroups[1].company).toBe(444n);
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayUserGroupBatchMerge();
		const action = payload.getAction();
		expect(action.kind).toBe("merge");
		expect(action.object).toBe("userGroup");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBe(true);
	});

	test("getList returns userGroups array", () => {
		const group = new ParamUserGroupMerge({ id: 555n });
		const payload = new PayUserGroupBatchMerge({ userGroups: [group] });
		expect(payload.getList()).toHaveLength(1);
		expect(payload.getList()[0]).toBe(group);
	});
});
