import { describe, expect, test } from "vitest";
import { PaySelfLogout } from "../../../../commands/Accounts/Self/Requests/PaySelfLogout";
import { RepSelfLogout } from "../../../../commands/Accounts/Self/Responses/RepSelfLogout";

describe("PaySelfLogout", () => {
	test("constructor creates instance without parameters", () => {
		const payload = new PaySelfLogout();
		expect(payload).toBeInstanceOf(PaySelfLogout);
	});

	test("constructor creates instance with JSON", () => {
		const payload = new PaySelfLogout({});
		expect(payload).toBeInstanceOf(PaySelfLogout);
	});

	test("createReply returns RepSelfLogout", () => {
		const payload = new PaySelfLogout();
		const reply = payload.createReply({});
		expect(reply).toBeInstanceOf(RepSelfLogout);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PaySelfLogout();
		const json = payload.toJSON();
		expect(json).toBeDefined();
	});

	test("getAction returns correct metadata", () => {
		const payload = new PaySelfLogout();
		const action = payload.getAction();
		expect(action.kind).toBe("Delete");
		expect(action.object).toBe("Self");
		expect(action.filter).toBe("Logout");
		expect(action.batch).toBe(false);
	});
});
