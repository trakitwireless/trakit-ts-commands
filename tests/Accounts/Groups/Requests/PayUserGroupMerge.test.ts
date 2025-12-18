import { describe, expect, test } from "vitest";
import { PayUserGroupMerge } from "../../../../commands/Accounts/Groups/Requests/PayUserGroupMerge";
import { ParamUserGroupMerge } from "../../../../commands/Accounts/Groups/Requests/Parameters/ParamUserGroupMerge";
import { RepUserGroupMerge } from "../../../../commands/Accounts/Groups/Responses/RepUserGroupMerge";

describe("PayUserGroupMerge", () => {
	test("constructor creates instance with userGroup", () => {
		const userGroup = new ParamUserGroupMerge({ id: 123n, name: "Test Group" });
		const payload = new PayUserGroupMerge({ userGroup });
		expect(payload.userGroup).toBeInstanceOf(ParamUserGroupMerge);
		expect(payload.userGroup.id).toBe(123n);
		expect(payload.userGroup.name).toBe("Test Group");
	});

	test("constructor creates instance with JSON", () => {
		const payload = new PayUserGroupMerge({
			userGroup: {
				id: 456n,
				name: "JSON Group",
				notes: "Test notes"
			}
		});
		expect(payload.userGroup).toBeInstanceOf(ParamUserGroupMerge);
		expect(payload.userGroup.id).toBe(456n);
		expect(payload.userGroup.name).toBe("JSON Group");
		expect(payload.userGroup.notes).toBe("Test notes");
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayUserGroupMerge();
		expect(payload.userGroup).toBeInstanceOf(ParamUserGroupMerge);
	});

	test("createReply returns RepUserGroupMerge", () => {
		const payload = new PayUserGroupMerge();
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepUserGroupMerge);
	});

	test("toJSON returns correct structure", () => {
		const userGroup = new ParamUserGroupMerge({
			id: 789n,
			name: "Serialized Group",
			notes: "Serialize this"
		});
		const payload = new PayUserGroupMerge({ userGroup });
		const json = payload.toJSON();
		expect(json.userGroup.id).toBe(789n);
		expect(json.userGroup.name).toBe("Serialized Group");
		expect(json.userGroup.notes).toBe("Serialize this");
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayUserGroupMerge();
		const action = payload.getAction();
		expect(action.kind).toBe("merge");
		expect(action.object).toBe("userGroup");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});

	test("getKey returns userGroup id", () => {
		const userGroup = new ParamUserGroupMerge({ id: 999n });
		const payload = new PayUserGroupMerge({ userGroup });
		expect(payload.getKey()).toBe("999");
	});
});
