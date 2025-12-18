import { describe, expect, test } from "vitest";
import { PayIconRestore } from "../../../../commands/Images/Icons/Requests/PayIconRestore";
import { RepIconGet } from "../../../../commands/Images/Icons/Responses/RepIconGet";

describe("PayIconRestore", () => {
	test("constructor creates instance with id", () => {
		const payload = new PayIconRestore({ id: 123n });
		expect(payload.id).toBe(123n);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayIconRestore();
		expect(payload.id).toBeUndefined();
	});

	test("createReply returns RepIconGet", () => {
		const payload = new PayIconRestore({ id: 123n });
		const reply = payload.createReply();
		expect(reply).toBeInstanceOf(RepIconGet);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayIconRestore({ id: 123n });
		const json = payload.toJSON();
		expect(json).toEqual({
			id: 123n
		});
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayIconRestore({ id: 123n });
		const action = payload.getAction();
		expect(action.kind).toBe("restore");
		expect(action.object).toBe("icon");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBeUndefined();
	});
});
