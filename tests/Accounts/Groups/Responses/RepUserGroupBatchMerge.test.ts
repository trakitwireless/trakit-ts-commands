import { describe, expect, test } from "vitest";
import { RepUserGroupBatchMerge } from "../../../../commands/Accounts/Groups/Responses/RepUserGroupBatchMerge";
import { UserGroup } from "@trakit/objects";

describe("RepUserGroupBatchMerge", () => {
	test("constructor creates instance with userGroups", () => {
		const userGroup1 = new UserGroup({ id: 123n, company: 456n, name: "Group 1" });
		const userGroup2 = new UserGroup({ id: 789n, company: 456n, name: "Group 2" });
		const reply = new RepUserGroupBatchMerge({ userGroups: [userGroup1, userGroup2] });
		expect(reply.userGroups).toHaveLength(2);
		expect(reply.userGroups[0]).toBeInstanceOf(UserGroup);
		expect(reply.userGroups[0].name).toBe("Group 1");
		expect(reply.userGroups[1].name).toBe("Group 2");
	});

	test("constructor creates instance with JSON", () => {
		const reply = new RepUserGroupBatchMerge({
			userGroups: [
				{ id: 111n, company: 222n, name: "JSON Group 1" },
				{ id: 333n, company: 222n, name: "JSON Group 2" }
			]
		});
		expect(reply.userGroups).toHaveLength(2);
		expect(reply.userGroups[0]).toBeInstanceOf(UserGroup);
		expect(reply.userGroups[0].id).toBe(111n);
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepUserGroupBatchMerge();
		expect(reply.userGroups).toEqual([]);
	});

	test("toJSON returns correct structure", () => {
		const userGroup = new UserGroup({ id: 444n, company: 555n, name: "Serialize Group" });
		const reply = new RepUserGroupBatchMerge({ userGroups: [userGroup] });
		const json = reply.toJSON();
		expect(json.userGroups).toHaveLength(1);
		expect(json.userGroups[0].id).toBe(444n);
		expect(json.userGroups[0].name).toBe("Serialize Group");
	});

	test("getResults returns userGroups array", () => {
		const userGroup = new UserGroup({ id: 666n, company: 777n, name: "Get Results" });
		const reply = new RepUserGroupBatchMerge({ userGroups: [userGroup] });
		expect(reply.getResults()).toHaveLength(1);
		expect(reply.getResults()[0]).toBe(userGroup);
	});
});
