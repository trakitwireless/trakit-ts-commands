import { describe, expect, test } from "vitest";
import { ParamUserGroupMerge } from "../../../../../commands/Accounts/Groups/Requests/Parameters/ParamUserGroupMerge";

describe("ParamUserGroupMerge", () => {
	test("constructor creates instance with all properties", () => {
		const param = new ParamUserGroupMerge({
			id: 123n,
			company: 456n,
			name: "Test Group",
			notes: "Test notes",
			permissions: ["read", "write", "admin"]
		});
		expect(param.id).toBe(123n);
		expect(param.company).toBe(456n);
		expect(param.name).toBe("Test Group");
		expect(param.notes).toBe("Test notes");
		expect(param.permissions).toEqual(["read", "write", "admin"]);
	});

	test("constructor creates instance without parameters", () => {
		const param = new ParamUserGroupMerge();
		expect(param.id).toBeUndefined();
		expect(param.company).toBeUndefined();
		expect(param.name).toBeUndefined();
		expect(param.notes).toBeUndefined();
		expect(param.permissions).toBeUndefined();
	});

	test("toJSON returns correct structure for update", () => {
		const param = new ParamUserGroupMerge({
			id: 111n,
			v: [1, 2, 3],
			name: "Updated Group",
			notes: "Updated notes",
			permissions: ["read"]
		});
		const json = param.toJSON();
		expect(json.id).toBe(111n);
		expect(json.v).toEqual([1, 2, 3]);
		expect(json.company).toBeUndefined();
		expect(json.name).toBe("Updated Group");
		expect(json.notes).toBe("Updated notes");
		expect(json.permissions).toEqual(["read"]);
	});

	test("toJSON returns correct structure for create", () => {
		const param = new ParamUserGroupMerge({
			company: 222n,
			name: "New Group"
		});
		const json = param.toJSON();
		expect(json.id).toBeUndefined();
		expect(json.v).toBeUndefined();
		expect(json.company).toBe(222n);
		expect(json.name).toBe("New Group");
	});

	test("toJSON omits undefined properties", () => {
		const param = new ParamUserGroupMerge({ id: 333n });
		const json = param.toJSON();
		expect(json.id).toBe(333n);
		expect(json).not.toHaveProperty("name");
		expect(json).not.toHaveProperty("notes");
		expect(json).not.toHaveProperty("permissions");
	});
});
