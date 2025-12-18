import { describe, expect, test } from "vitest";
import { ParamUserMerge } from "../../../../../commands/Accounts/Users/Requests/Parameters/ParamUserMerge";
import { ParamPermission } from "../../../../../commands/Accounts/Permissions/ParamPermission";
import { UserNotifications } from "@trakit/objects";

describe("ParamUserMerge", () => {
	test("constructor creates instance with all properties", () => {
		const param = new ParamUserMerge({
			login: "test@example.com",
			company: 456n,
			nickname: "Test User",
			password: "secure-password",
			passwordExpired: false,
			enabled: true,
			contact: 789n,
			timezone: "America/New_York",
			language: "en-US",
			formats: { date: "MM/DD/YYYY", time: "HH:mm:ss" },
			measurements: { distance: "miles", weight: "lbs" },
			options: { feature1: "enabled", feature2: "disabled" },
			notify: [],
			groups: [1n, 2n, 3n],
			permissions: []
		});
		expect(param.login).toBe("test@example.com");
		expect(param.company).toBe(456n);
		expect(param.nickname).toBe("Test User");
		expect(param.password).toBe("secure-password");
		expect(param.passwordExpired).toBe(false);
		expect(param.enabled).toBe(true);
		expect(param.contact).toBe(789n);
		expect(param.timezone?.code).toBe("America/New_York");
		expect(param.language).toBe("en-US");
		expect(param.formats).toBeInstanceOf(Map);
		expect(param.measurements).toBeInstanceOf(Map);
		expect(param.options).toBeInstanceOf(Map);
		expect(param.groups).toEqual([1n, 2n, 3n]);
	});

	test("constructor creates instance without parameters", () => {
		const param = new ParamUserMerge();
		expect(param.login).toBeUndefined();
		expect(param.company).toBeUndefined();
		expect(param.nickname).toBeUndefined();
		expect(param.password).toBeUndefined();
		expect(param.passwordExpired).toBeUndefined();
		expect(param.enabled).toBeUndefined();
		expect(param.contact).toBeUndefined();
		expect(param.timezone).toBeUndefined();
		expect(param.language).toBeUndefined();
		expect(param.formats).toBeNull();
		expect(param.measurements).toBeNull();
		expect(param.options).toBeNull();
		expect(param.notify).toBeUndefined();
		expect(param.groups).toBeUndefined();
		expect(param.permissions).toBeUndefined();
	});

	test("toJSON returns correct structure for update", () => {
		const param = new ParamUserMerge({
			login: "update@example.com",
			v: [1, 2, 3],
			nickname: "Updated User",
			password: "new-password",
			enabled: false,
			permissions: []
		});
		const json = param.toJSON();
		expect(json.login).toBe("update@example.com");
		expect(json.v).toEqual([1, 2, 3]);
		expect(json.company).toBeUndefined();
		expect(json.nickname).toBe("Updated User");
		expect(json.password).toBe("new-password");
		expect(json.enabled).toBe(false);
	});

	test("toJSON returns correct structure for create", () => {
		const param = new ParamUserMerge({
			login: "create@example.com",
			company: 222n,
			nickname: "New User",
			enabled: true,
			contact: 333n
		});
		const json = param.toJSON();
		expect(json.login).toBe("create@example.com");
		expect(json.company).toBe(222n);
		expect(json.nickname).toBe("New User");
		expect(json.enabled).toBe(true);
		expect(json.contact).toBe(333n);
	});

	test("toJSON includes groups and permissions", () => {
		const permission = new ParamPermission({ 
			id: 1n,
			object: "asset",
			grant: true
		});
		const param = new ParamUserMerge({
			login: "perms@example.com",
			company: 100n,
			groups: [10n, 20n],
			permissions: [permission]
		});
		const json = param.toJSON();
		expect(json.groups).toEqual([10n, 20n]);
		expect(json.permissions).toHaveLength(1);
	});

	test("toJSON includes timezone and language", () => {
		const param = new ParamUserMerge({
			login: "locale@example.com",
			company: 500n,
			timezone: "Europe/London",
			language: "en-GB"
		});
		const json = param.toJSON();
		expect(json.timezone).toBe("Europe/London");
		expect(json.language).toBe("en-GB");
	});

	test("toJSON includes formats and measurements", () => {
		const param = new ParamUserMerge({
			login: "formats@example.com",
			company: 600n,
			formats: { date: "DD/MM/YYYY" },
			measurements: { temperature: "celsius" }
		});
		const json = param.toJSON();
		expect(json.formats).toBeDefined();
		expect(json.measurements).toBeDefined();
	});
});
