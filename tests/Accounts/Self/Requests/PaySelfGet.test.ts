import { describe, expect, test } from "vitest";
import { PaySelfGet } from "../../../../src/Accounts/Self/Requests/PaySelfGet";
import { RepSelfGet } from "../../../../src/Accounts/Self/Responses/RepSelfGet";

describe("PaySelfGet", () => {
	test("constructor creates instance without parameters", () => {
		const payload = new PaySelfGet();
		expect(payload).toBeInstanceOf(PaySelfGet);
	});

	test("constructor creates instance with JSON", () => {
		const payload = new PaySelfGet({});
		expect(payload).toBeInstanceOf(PaySelfGet);
	});

	test("createReply returns RepSelfGet", () => {
		const payload = new PaySelfGet();
		const reply = payload.createReply({});
		expect(reply).toBeInstanceOf(RepSelfGet);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PaySelfGet();
		const json = payload.toJSON();
		expect(json).toBeDefined();
	});

	test("getAction returns correct metadata", () => {
		const payload = new PaySelfGet();
		const action = payload.getAction();
		expect(action.kind).toBe("Get");
		expect(action.object).toBe("Self");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(false);
	});
});
