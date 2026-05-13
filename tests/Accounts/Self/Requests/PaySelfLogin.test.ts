import { describe, expect, test } from "vitest";
import { PaySelfLogin } from "../../../../src/Accounts/Self/Requests/PaySelfLogin";
import { RepSelfGet } from "../../../../src/Accounts/Self/Responses/RepSelfGet";

describe("PaySelfLogin", () => {
	test("constructor creates instance with username and password", () => {
		const payload = new PaySelfLogin({ 
			username: "test@example.com", 
			password: "secure-password" 
		});
		expect(payload.username).toBe("test@example.com");
		expect(payload.password).toBe("secure-password");
		expect(payload.userAgent).toBeUndefined();
	});

	test("constructor creates instance with userAgent", () => {
		const payload = new PaySelfLogin({ 
			username: "user@example.com", 
			password: "pass123",
			userAgent: "Mozilla/5.0"
		});
		expect(payload.username).toBe("user@example.com");
		expect(payload.password).toBe("pass123");
		expect(payload.userAgent).toBe("Mozilla/5.0");
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PaySelfLogin();
		expect(payload.username).toBe("");
		expect(payload.password).toBe("");
		expect(payload.userAgent).toBeUndefined();
	});

	test("createReply returns RepSelfGet", () => {
		const payload = new PaySelfLogin({ username: "test@example.com", password: "pass" });
		const reply = payload.createReply({});
		expect(reply).toBeInstanceOf(RepSelfGet);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PaySelfLogin({ 
			username: "serialize@example.com", 
			password: "my-password",
			userAgent: "TestAgent/1.0"
		});
		const json = payload.toJSON();
		expect(json.username).toBe("serialize@example.com");
		expect(json.password).toBe("my-password");
		expect(json.userAgent).toBe("TestAgent/1.0");
	});

	test("getAction returns correct metadata", () => {
		const payload = new PaySelfLogin({ username: "test@example.com", password: "pass" });
		const action = payload.getAction();
		expect(action.kind).toBe("Merge");
		expect(action.object).toBe("Self");
		expect(action.filter).toBe("Login");
		expect(action.batch).toBe(false);
	});
});
