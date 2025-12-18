import { describe, expect, test } from "vitest";
import { PaySessionGet } from "../../../../commands/Accounts/Sessions/Requests/PaySessionGet";
import { RepSessionGet } from "../../../../commands/Accounts/Sessions/Responses/RepSessionGet";
import { ParamHandle } from "../../../../commands/Accounts/Sessions/Requests/Parameters/ParamHandle";

describe("PaySessionGet", () => {
	test("constructor creates instance with session handle", () => {
		const payload = new PaySessionGet({ 
			session: { handle: "session-handle-123" }
		});
		expect(payload.session).toBeInstanceOf(ParamHandle);
		expect(payload.session.handle).toBe("session-handle-123");
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PaySessionGet();
		expect(payload.session).toBeInstanceOf(ParamHandle);
	});

	test("createReply returns RepSessionGet", () => {
		const payload = new PaySessionGet({ session: { handle: "test-handle" } });
		const reply = payload.createReply({});
		expect(reply).toBeInstanceOf(RepSessionGet);
	});

	test("toJSON inherits from Payload", () => {
		const payload = new PaySessionGet({ session: { handle: "handle-123" } });
		const json = payload.toJSON();
		expect(json).toBeDefined();
	});

	test("getAction returns correct metadata", () => {
		const payload = new PaySessionGet({ session: { handle: "test" } });
		const action = payload.getAction();
		expect(action.object).toBe("session");
	});
});
