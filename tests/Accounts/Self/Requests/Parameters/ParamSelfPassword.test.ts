import { describe, expect, test } from "vitest";
import { ParamSelfPassword } from "../../../../../commands/Accounts/Self/Requests/Parameters/ParamSelfPassword";

describe("ParamSelfPassword", () => {
	test("constructor creates instance with old and new password", () => {
		const param = new ParamSelfPassword({ 
			old: "current-password", 
			new: "new-secure-password" 
		});
		expect(param.old).toBe("current-password");
		expect(param.new).toBe("new-secure-password");
	});

	test("constructor creates instance without parameters", () => {
		const param = new ParamSelfPassword();
		expect(param.old).toBe("");
		expect(param.new).toBe("");
	});

	test("toJSON returns correct structure", () => {
		const param = new ParamSelfPassword({ 
			old: "old-pass", 
			new: "new-pass" 
		});
		const json = param.toJSON();
		expect(json.old).toBe("old-pass");
		expect(json.new).toBe("new-pass");
	});

	test("toJSON handles empty values", () => {
		const param = new ParamSelfPassword();
		const json = param.toJSON();
		expect(json.old).toBe("");
		expect(json.new).toBe("");
	});
});
