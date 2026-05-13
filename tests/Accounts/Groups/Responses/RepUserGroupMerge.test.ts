import { describe, expect, test } from "vitest";
import { RepUserGroupMerge } from "../../../../src/Accounts/Groups/Responses/RepUserGroupMerge";
import { UserGroup } from "@trakit/objects";

describe("RepUserGroupMerge", () => {
	test("constructor creates instance with userGroup", () => {
		const userGroup = new UserGroup({ id: 123n, company: 456n, name: "Test Group" });
		const reply = new RepUserGroupMerge({ userGroup });
		expect(reply.userGroup).toBeInstanceOf(UserGroup);
		expect(reply.userGroup?.id).toBe(123n);
		expect(reply.userGroup?.name).toBe("Test Group");
	});

	test("constructor creates instance with JSON", () => {
		const reply = new RepUserGroupMerge({
			userGroup: {
				id: 789n,
				company: 111n,
				name: "JSON Group"
			}
		});
		expect(reply.userGroup).toBeInstanceOf(UserGroup);
		expect(reply.userGroup?.id).toBe(789n);
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepUserGroupMerge();
		expect(reply.userGroup).toBeUndefined();
	});

	test("toJSON returns correct structure", () => {
		const userGroup = new UserGroup({ id: 222n, company: 333n, name: "Serialize Group" });
		const reply = new RepUserGroupMerge({ userGroup });
		const json = reply.toJSON();
		expect(json.userGroup).toBeDefined();
		expect(json.userGroup.id).toBe(222n);
		expect(json.userGroup.name).toBe("Serialize Group");
	});

	test("getObject returns userGroup", () => {
		const userGroup = new UserGroup({ id: 444n, company: 555n, name: "Get Object" });
		const reply = new RepUserGroupMerge({ userGroup });
		expect(reply.getObject()).toBe(userGroup);
	});
});
