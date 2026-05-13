import { describe, expect, test } from "vitest";
import { ParamPermission } from "../../../src/Accounts/Permissions/ParamPermission";
import { PermissionType, PermissionLevel, PermissionMethod } from "@trakit/objects";

describe("ParamPermission", () => {
	test("constructor creates instance with all properties", () => {
		const param = new ParamPermission({ 
			company: 123n,
			kind: "asset" as PermissionType,
			level: "write" as PermissionLevel,
			method: "grant" as PermissionMethod,
			labels: ["label1", "label2"]
		});
		expect(param.company).toBe(123n);
		expect(param.kind).toBe("asset");
		expect(param.level).toBe("write");
		expect(param.method).toBe("grant");
		expect(param.labels).toEqual(["label1", "label2"]);
	});

	test("constructor creates instance with type instead of kind", () => {
		const param = new ParamPermission({ 
			type: "user" as PermissionType,
			level: "read" as PermissionLevel
		});
		expect(param.kind).toBe("user");
		expect(param.level).toBe("read");
	});

	test("constructor creates instance without parameters", () => {
		const param = new ParamPermission();
		expect(param.company).toBeUndefined();
		expect(param.kind).toBeUndefined();
		expect(param.level).toBeUndefined();
		expect(param.method).toBeUndefined();
		expect(param.labels).toBeUndefined();
	});

	test("constructor creates instance with minimal properties", () => {
		const param = new ParamPermission({ 
			kind: "place" as PermissionType
		});
		expect(param.kind).toBe("place");
		expect(param.company).toBeUndefined();
		expect(param.level).toBeUndefined();
		expect(param.method).toBeUndefined();
	});

	test("toJSON returns correct structure with all properties", () => {
		const param = new ParamPermission({ 
			company: 456n,
			kind: "dispatch" as PermissionType,
			level: "admin" as PermissionLevel,
			method: "deny" as PermissionMethod,
			labels: ["urgent", "priority"]
		});
		const json = param.toJSON();
		expect(json.company).toBe(456n);
		expect(json.kind).toBe("dispatch");
		expect(json.level).toBe("admin");
		expect(json.method).toBe("deny");
		expect(json.labels).toEqual(["urgent", "priority"]);
	});

	test("toJSON omits undefined values", () => {
		const param = new ParamPermission({ 
			kind: "report" as PermissionType,
			level: "read" as PermissionLevel
		});
		const json = param.toJSON();
		expect(json.kind).toBe("report");
		expect(json.level).toBe("read");
		expect(json.company).toBeUndefined();
		expect(json.method).toBeUndefined();
		expect(json.labels).toBeUndefined();
	});

	test("toJSON omits empty labels array", () => {
		const param = new ParamPermission({ 
			kind: "asset" as PermissionType,
			labels: []
		});
		const json = param.toJSON();
		expect(json.labels).toBeUndefined();
	});

	test("toJSON includes non-empty labels array", () => {
		const param = new ParamPermission({ 
			kind: "asset" as PermissionType,
			labels: ["label1"]
		});
		const json = param.toJSON();
		expect(json.labels).toEqual(["label1"]);
	});

	test("handles null company value", () => {
		const param = new ParamPermission({ 
			company: null as any,
			kind: "user" as PermissionType
		});
		expect(param.company).toBeNull();
		expect(param.kind).toBe("user");
	});
});
