import { describe, expect, test } from "vitest";
import { RepUserGroupGet } from "../../../../commands/Accounts/Groups/Responses/RepUserGroupGet";
import { UserGroup } from "@trakit/objects";

describe("RepUserGroupGet", () => {
	test("constructor creates instance with userGroup", () => {
		const userGroup = new UserGroup({ id: 123n, company: 456n, name: "Test Group" });
		const reply = new RepUserGroupGet({ userGroup });
		expect(reply.userGroup).toBeInstanceOf(UserGroup);
		expect(reply.userGroup?.id).toBe(123n);
		expect(reply.userGroup?.name).toBe("Test Group");
	});

	test("constructor creates instance with JSON", () => {
		const reply = new RepUserGroupGet({
			userGroup: {
				id: 789n,
				company: 111n,
				name: "JSON Group",
				notes: "Test notes",
				permissions: ["read", "write"]
			}
		});
		expect(reply.userGroup).toBeInstanceOf(UserGroup);
		expect(reply.userGroup?.id).toBe(789n);
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepUserGroupGet();
		expect(reply.userGroup).toBeUndefined();
	});

	test("toJSON returns correct structure", () => {
		const userGroup = new UserGroup({ id: 222n, company: 333n, name: "Serialize Group" });
		const reply = new RepUserGroupGet({ userGroup });
		const json = reply.toJSON();
		expect(json.userGroup).toBeDefined();
		expect(json.userGroup.id).toBe(222n);
		expect(json.userGroup.name).toBe("Serialize Group");
	});

	test("getObject returns userGroup", () => {
		const userGroup = new UserGroup({ id: 444n, company: 555n, name: "Get Object" });
		const reply = new RepUserGroupGet({ userGroup });
		expect(reply.getObject()).toBe(userGroup);
	});
});
