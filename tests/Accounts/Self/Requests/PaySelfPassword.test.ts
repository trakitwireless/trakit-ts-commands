import { describe, expect, test } from "vitest";
import { PaySelfPassword } from "../../../../src/Accounts/Self/Requests/PaySelfPassword";
import { RepSelfPassword } from "../../../../src/Accounts/Self/Responses/RepSelfPassword";

describe("PaySelfPassword", () => {
	test("constructor creates instance with current and new password", () => {
		const payload = new PaySelfPassword({ 
			current: "old-password", 
			password: "new-password" 
		});
		expect(payload.current).toBe("old-password");
		expect(payload.password).toBe("new-password");
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PaySelfPassword();
		expect(payload.current).toBe("");
		expect(payload.password).toBe("");
	});

	test("createReply returns RepSelfPassword", () => {
		const payload = new PaySelfPassword({ current: "old", password: "new" });
		const reply = payload.createReply({});
		expect(reply).toBeInstanceOf(RepSelfPassword);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PaySelfPassword({ 
			current: "current-pass", 
			password: "secure-new-pass" 
		});
		const json = payload.toJSON();
		expect(json.current).toBe("current-pass");
		expect(json.password).toBe("secure-new-pass");
	});

	test("getAction returns correct metadata", () => {
		const payload = new PaySelfPassword({ current: "old", password: "new" });
		const action = payload.getAction();
		expect(action.kind).toBe("Merge");
		expect(action.object).toBe("Self");
		expect(action.filter).toBe("Password");
		expect(action.batch).toBe(false);
	});
});
