import { describe, expect, test } from "vitest";
import { PaySessionListByCompany, PaySessionListByUser } from "../../../../commands/Accounts/Sessions/Requests/PaySessionList";
import { RepSessionListByCompany, RepSessionListByUser } from "../../../../commands/Accounts/Sessions/Responses/RepSessionList";
import { ParamId } from "../../../../commands/API/Requests/Parameters/ParamId";
import { ParamLogin } from "../../../../commands/API/Requests/Parameters/ParamLogin";

describe("PaySessionListByCompany", () => {
	test("constructor creates instance with company id", () => {
		const payload = new PaySessionListByCompany({ 
			company: { id: 123n }
		});
		expect(payload.company).toBeInstanceOf(ParamId);
		expect(payload.company.id).toBe(123n);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PaySessionListByCompany();
		expect(payload.company).toBeInstanceOf(ParamId);
	});

	test("createReply returns RepSessionListByCompany", () => {
		const payload = new PaySessionListByCompany({ company: { id: 456n } });
		const reply = payload.createReply({});
		expect(reply).toBeInstanceOf(RepSessionListByCompany);
	});

	test("toJSON inherits from Payload", () => {
		const payload = new PaySessionListByCompany({ company: { id: 789n } });
		const json = payload.toJSON();
		expect(json).toBeDefined();
	});

	test("getAction returns correct metadata", () => {
		const payload = new PaySessionListByCompany({ company: { id: 100n } });
		const action = payload.getAction();
		expect(action.object).toBe("session");
	});
});

describe("PaySessionListByUser", () => {
	test("constructor creates instance with user login", () => {
		const payload = new PaySessionListByUser({ 
			user: { login: "test@example.com" }
		});
		expect(payload.user).toBeInstanceOf(ParamLogin);
		expect(payload.user.login).toBe("test@example.com");
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PaySessionListByUser();
		expect(payload.user).toBeInstanceOf(ParamLogin);
	});

	test("createReply returns RepSessionListByUser", () => {
		const payload = new PaySessionListByUser({ user: { login: "user@example.com" } });
		const reply = payload.createReply({});
		expect(reply).toBeInstanceOf(RepSessionListByUser);
	});

	test("toJSON inherits from Payload", () => {
		const payload = new PaySessionListByUser({ user: { login: "serialize@example.com" } });
		const json = payload.toJSON();
		expect(json).toBeDefined();
	});

	test("getAction returns correct metadata", () => {
		const payload = new PaySessionListByUser({ user: { login: "test@example.com" } });
		const action = payload.getAction();
		expect(action.object).toBe("session");
		expect(action.filter).toBe("user");
	});
});
