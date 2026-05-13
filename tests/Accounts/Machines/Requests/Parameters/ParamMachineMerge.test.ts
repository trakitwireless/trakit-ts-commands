import { describe, expect, test } from "vitest";
import { ParamMachineMerge } from "../../../../../src/Accounts/Machines/Requests/Parameters/ParamMachineMerge";

describe("ParamMachineMerge", () => {
	test("constructor creates instance with all properties", () => {
		const param = new ParamMachineMerge({
			key: "machine-key-123",
			secret: "secret-value",
			company: 456n,
			nickname: "Test Machine",
			notes: "Test notes",
			enabled: true,
			notBefore: new Date("2024-01-01"),
			notAfter: new Date("2025-12-31"),
			timezone: "America/New_York",
			language: "en",
			formats: { date: "MM/DD/YYYY", time: "HH:mm:ss" },
			measurements: { distance: "miles", weight: "lbs" },
			options: { feature1: true, feature2: false },
			groups: [1n, 2n, 3n],
			permissions: ["read", "write", "admin"]
		});
		expect(param.key).toBe("machine-key-123");
		expect(param.secret).toBe("secret-value");
		expect(param.company).toBe(456n);
		expect(param.nickname).toBe("Test Machine");
		expect(param.notes).toBe("Test notes");
		expect(param.enabled).toBe(true);
		expect(param.notBefore).toBeInstanceOf(Date);
		expect(param.notAfter).toBeInstanceOf(Date);
		expect(param.timezone).toBe("America/New_York");
		expect(param.language).toBe("en");
		expect(param.formats).toEqual({ date: "MM/DD/YYYY", time: "HH:mm:ss" });
		expect(param.measurements).toEqual({ distance: "miles", weight: "lbs" });
		expect(param.options).toEqual({ feature1: true, feature2: false });
		expect(param.groups).toEqual([1n, 2n, 3n]);
		expect(param.permissions).toEqual(["read", "write", "admin"]);
	});

	test("constructor creates instance without parameters", () => {
		const param = new ParamMachineMerge();
		expect(param.key).toBeUndefined();
		expect(param.secret).toBeUndefined();
		expect(param.company).toBeUndefined();
		expect(param.nickname).toBeUndefined();
		expect(param.notes).toBeUndefined();
		expect(param.enabled).toBeUndefined();
		expect(param.notBefore).toBeUndefined();
		expect(param.notAfter).toBeUndefined();
		expect(param.timezone).toBeUndefined();
		expect(param.language).toBeUndefined();
		expect(param.formats).toBeUndefined();
		expect(param.measurements).toBeUndefined();
		expect(param.options).toBeUndefined();
		expect(param.groups).toBeUndefined();
		expect(param.permissions).toBeUndefined();
	});

	test("toJSON returns correct structure for update", () => {
		const param = new ParamMachineMerge({
			key: "update-key",
			v: [1, 2, 3],
			nickname: "Updated Machine",
			notes: "Updated notes",
			enabled: false,
			permissions: ["read"]
		});
		const json = param.toJSON();
		expect(json.key).toBe("update-key");
		expect(json.v).toEqual([1, 2, 3]);
		expect(json.company).toBeUndefined();
		expect(json.nickname).toBe("Updated Machine");
		expect(json.notes).toBe("Updated notes");
		expect(json.enabled).toBe(false);
		expect(json.permissions).toEqual(["read"]);
	});

	test("toJSON returns correct structure for create", () => {
		const param = new ParamMachineMerge({
			company: 222n,
			nickname: "New Machine",
			key: "new-machine-key"
		});
		const json = param.toJSON();
		expect(json.key).toBe("new-machine-key");
		expect(json.v).toBeUndefined();
		expect(json.company).toBe(222n);
		expect(json.nickname).toBe("New Machine");
	});

	test("toJSON omits undefined properties", () => {
		const param = new ParamMachineMerge({ key: "simple-key" });
		const json = param.toJSON();
		expect(json.key).toBe("simple-key");
		expect(json).not.toHaveProperty("nickname");
		expect(json).not.toHaveProperty("notes");
		expect(json).not.toHaveProperty("enabled");
		expect(json).not.toHaveProperty("permissions");
	});

	test("toJSON handles date serialization", () => {
		const notBefore = new Date("2024-06-15T10:00:00Z");
		const notAfter = new Date("2025-06-15T10:00:00Z");
		const param = new ParamMachineMerge({
			key: "date-test-key",
			notBefore,
			notAfter
		});
		const json = param.toJSON();
		expect(json.notBefore).toBe(notBefore.toISOString());
		expect(json.notAfter).toBe(notAfter.toISOString());
	});
});
