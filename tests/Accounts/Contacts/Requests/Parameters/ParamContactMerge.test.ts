import { describe, expect, test } from "vitest";
import { ParamContactMerge } from "../../../../../commands/Accounts/Contacts/Requests/Parameters/ParamContactMerge";

describe("ParamContactMerge", () => {
	test("constructor creates instance with all properties", () => {
		const param = new ParamContactMerge({
			id: 123n,
			company: 456n,
			name: "Test Contact",
			notes: "Test notes",
			emails: { work: "test@work.com", home: "test@home.com" },
			phones: { mobile: 1234567890n },
			roles: ["Manager", "Developer"]
		});
		expect(param.id).toBe(123n);
		expect(param.company).toBe(456n);
		expect(param.name).toBe("Test Contact");
		expect(param.notes).toBe("Test notes");
		expect(param.emails).toBeInstanceOf(Map);
		expect(param.phones).toBeInstanceOf(Map);
		expect(param.roles).toEqual(["Manager", "Developer"]);
	});

	test("constructor creates instance with JSON", () => {
		const param = new ParamContactMerge({
			id: 789n,
			name: "JSON Contact",
			otherNames: { nickname: "JC" },
			addresses: { home: "123 Main St" },
			pictures: [111n, 222n]
		});
		expect(param.id).toBe(789n);
		expect(param.name).toBe("JSON Contact");
		expect(param.otherNames).toBeInstanceOf(Map);
		expect(param.addresses).toBeInstanceOf(Map);
		expect(param.pictures).toEqual([111n, 222n]);
	});

	test("constructor creates instance without parameters", () => {
		const param = new ParamContactMerge();
		expect(param.id).toBeUndefined();
		expect(param.company).toBeUndefined();
		expect(param.name).toBe("");
		expect(param.notes).toBe("");
	});

	test("toJSON returns correct structure for update", () => {
		const param = new ParamContactMerge({
			id: 111n,
			v: [1, 2, 3],
			name: "Updated Contact",
			notes: "Updated notes",
			roles: ["Admin"]
		});
		const json = param.toJSON();
		expect(json.id).toBe(111n);
		expect(json.v).toEqual([1, 2, 3]);
		expect(json.company).toBeUndefined();
		expect(json.name).toBe("Updated Contact");
		expect(json.notes).toBe("Updated notes");
		expect(json.roles).toEqual(["Admin"]);
	});

	test("toJSON returns correct structure for create", () => {
		const param = new ParamContactMerge({
			company: 222n,
			name: "New Contact"
		});
		const json = param.toJSON();
		expect(json.id).toBeUndefined();
		expect(json.v).toBeUndefined();
		expect(json.company).toBe(222n);
		expect(json.name).toBe("New Contact");
	});

	test("toJSON omits undefined properties", () => {
		const param = new ParamContactMerge({ id: 333n, name: "Minimal" });
		const json = param.toJSON();
		expect(json.id).toBe(333n);
		expect(json).not.toHaveProperty("otherNames");
		expect(json).not.toHaveProperty("emails");
		expect(json).not.toHaveProperty("phones");
	});

	test("toJSON serializes Maps correctly", () => {
		const emails = new Map([["work", "work@test.com"]]);
		const param = new ParamContactMerge({ id: 444n, emails });
		const json = param.toJSON();
		expect(json.emails).toEqual({ work: "work@test.com" });
	});
});
