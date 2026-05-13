import { describe, expect, test } from "vitest";
import { ParamSelfContactMerge } from "../../../../../src/Accounts/Self/Requests/Parameters/ParamSelfContactMerge";

describe("ParamSelfContactMerge", () => {
	test("constructor creates instance with all properties", () => {
		const param = new ParamSelfContactMerge({ 
			name: "John Doe",
			notes: "Software engineer",
			otherNames: { Nickname: "JD", Initials: "JD" },
			emails: { Work: "john@example.com", Personal: "john.doe@email.com" },
			phones: { Mobile: 1234567890n, Office: 9876543210n },
			addresses: { Home: "123 Main St", Work: "456 Office Blvd" },
			urls: { Website: "https://example.com", Portfolio: "https://portfolio.com" },
			dates: { Birthday: "1990-01-01", Hired: "2020-06-15" },
			options: { Department: "Engineering", Team: "Backend" },
			roles: ["Developer", "Team Lead"],
			pictures: [100n, 200n]
		});
		expect(param.name).toBe("John Doe");
		expect(param.notes).toBe("Software engineer");
		expect(param.otherNames).toBeInstanceOf(Map);
		expect(param.emails).toBeInstanceOf(Map);
		expect(param.phones).toBeInstanceOf(Map);
		expect(param.addresses).toBeInstanceOf(Map);
		expect(param.urls).toBeInstanceOf(Map);
		expect(param.dates).toBeInstanceOf(Map);
		expect(param.options).toBeInstanceOf(Map);
		expect(param.roles).toEqual(["Developer", "Team Lead"]);
		expect(param.pictures).toEqual([100n, 200n]);
	});

	test("constructor creates instance without parameters", () => {
		const param = new ParamSelfContactMerge();
		expect(param.name).toBe("");
		expect(param.notes).toBe("");
		expect(param.otherNames).toBeNull();
		expect(param.emails).toBeNull();
		expect(param.phones).toBeNull();
		expect(param.addresses).toBeNull();
		expect(param.urls).toBeNull();
		expect(param.dates).toBeNull();
		expect(param.options).toBeNull();
		expect(param.roles).toBeUndefined();
		expect(param.pictures).toBeUndefined();
	});

	test("toJSON returns correct structure with all properties", () => {
		const param = new ParamSelfContactMerge({ 
			name: "Jane Smith",
			notes: "Product Manager",
			emails: { Work: "jane@example.com" },
			roles: ["Manager"]
		});
		const json = param.toJSON();
		expect(json.name).toBe("Jane Smith");
		expect(json.notes).toBe("Product Manager");
		expect(json.emails).toBeDefined();
		expect(json.roles).toEqual(["Manager"]);
	});

	test("toJSON omits empty or null values", () => {
		const param = new ParamSelfContactMerge({ name: "Test User" });
		const json = param.toJSON();
		expect(json.name).toBe("Test User");
		expect(json.emails).toBeUndefined();
		expect(json.roles).toBeUndefined();
	});
});
