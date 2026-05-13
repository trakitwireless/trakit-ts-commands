import { describe, expect, test } from "vitest";
import { PayUserBatchDelete } from "../../../../src/Accounts/Users/Requests/PayUserBatchDelete";
import { ParamLogin } from "../../../../src/API/Requests/Parameters/ParamLogin";
import { RepUserBatchDelete } from "../../../../src/Accounts/Users/Responses/RepUserBatchDelete";

describe("PayUserBatchDelete", () => {
	test("constructor creates instance with users", () => {
		const payload = new PayUserBatchDelete({
			users: [
				{ login: "user1@example.com" },
				{ login: "user2@example.com" },
				{ login: "user3@example.com" }
			]
		});
		expect(payload.users).toHaveLength(3);
		expect(payload.users[0]).toBeInstanceOf(ParamLogin);
		expect(payload.users[0].login).toBe("user1@example.com");
		expect(payload.users[1].login).toBe("user2@example.com");
		expect(payload.users[2].login).toBe("user3@example.com");
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayUserBatchDelete();
		expect(payload.users).toEqual([]);
	});

	test("createReply returns RepUserBatchDelete", () => {
		const payload = new PayUserBatchDelete({ users: [{ login: "test@example.com" }] });
		const reply = payload.createReply({});
		expect(reply).toBeInstanceOf(RepUserBatchDelete);
	});

	test("toJSON returns correct structure", () => {
		const payload = new PayUserBatchDelete({
			users: [
				{ login: "delete1@example.com" },
				{ login: "delete2@example.com" }
			]
		});
		const json = payload.toJSON();
		expect(json.users).toHaveLength(2);
		expect(json.users[0].login).toBe("delete1@example.com");
		expect(json.users[1].login).toBe("delete2@example.com");
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayUserBatchDelete({ users: [{ login: "test@example.com" }] });
		const action = payload.getAction();
		expect(action.kind).toBe("delete");
		expect(action.object).toBe("user");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBe(true);
	});
});
