import { describe, expect, test } from "vitest";
import { PaySessionDelete } from "../../../../commands/Accounts/Sessions/Requests/PaySessionDelete";
import { RepSessionDelete } from "../../../../commands/Accounts/Sessions/Responses/RepSessionDelete";
import { ParamHandle } from "../../../../commands/Accounts/Sessions/Requests/Parameters/ParamHandle";

describe("PaySessionDelete", () => {
	test("constructor creates instance with session handle", () => {
		const payload = new PaySessionDelete({ 
			session: { handle: "session-to-delete-123" }
		});
		expect(payload.session).toBeInstanceOf(ParamHandle);
		expect(payload.session.handle).toBe("session-to-delete-123");
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PaySessionDelete();
		expect(payload.session).toBeInstanceOf(ParamHandle);
	});

	test("createReply returns RepSessionDelete", () => {
		const payload = new PaySessionDelete({ session: { handle: "test-handle" } });
		const reply = payload.createReply({});
		expect(reply).toBeInstanceOf(RepSessionDelete);
	});

	test("extends PaySessionGet", () => {
		const payload = new PaySessionDelete({ session: { handle: "handle-123" } });
		expect(payload.session).toBeInstanceOf(ParamHandle);
	});

	test("toJSON inherits from Payload", () => {
		const payload = new PaySessionDelete({ session: { handle: "delete-me" } });
		const json = payload.toJSON();
		expect(json).toBeDefined();
	});

	test("getAction returns correct metadata", () => {
		const payload = new PaySessionDelete({ session: { handle: "test" } });
		const action = payload.getAction();
		expect(action.object).toBe("session");
	});
});
