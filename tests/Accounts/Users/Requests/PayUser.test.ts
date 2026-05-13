import { describe, expect, test } from "vitest";
import { PayUser } from "../../../../src/Accounts/Users/Requests/PayUser";
import { ParamLogin } from "../../../../src/API/Requests/Parameters/ParamLogin";

// Create a concrete implementation for testing the abstract class
class TestPayUser extends PayUser {
	createReply(): any {
		return {};
	}
}

describe("PayUser", () => {
	test("constructor creates instance with user", () => {
		const payload = new TestPayUser({ user: { login: "test@example.com" } });
		expect(payload.user).toBeInstanceOf(ParamLogin);
		expect(payload.user.login).toBe("test@example.com");
	});

	test("constructor creates instance without parameters", () => {
		const payload = new TestPayUser();
		expect(payload.user).toBeInstanceOf(ParamLogin);
	});

	test("getKey returns user login", () => {
		const payload = new TestPayUser({ user: { login: "user@example.com" } });
		expect(payload.getKey()).toBe("user@example.com");
	});
});
