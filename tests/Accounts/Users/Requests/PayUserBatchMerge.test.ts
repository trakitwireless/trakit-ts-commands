import { describe, expect, test } from "vitest";
import { PayUserBatchMerge } from "../../../../src/Accounts/Users/Requests/PayUserBatchMerge";
import { ParamUserMerge } from "../../../../src/Accounts/Users/Requests/Parameters/ParamUserMerge";
import { RepUserBatchMerge } from "../../../../src/Accounts/Users/Responses/RepUserBatchMerge";

describe("PayUserBatchMerge", () => {
	test("constructor creates instance with users", () => {
		const user1 = new ParamUserMerge({ login: "user1@example.com", nickname: "User 1" });
		const user2 = new ParamUserMerge({ login: "user2@example.com", nickname: "User 2" });
		const payload = new PayUserBatchMerge({ users: [user1, user2] });
		expect(payload.users).toHaveLength(2);
		expect(payload.users[0]).toBeInstanceOf(ParamUserMerge);
		expect(payload.users[0].login).toBe("user1@example.com");
		expect(payload.users[1].login).toBe("user2@example.com");
	});

	test("constructor creates instance with JSON", () => {
		const payload = new PayUserBatchMerge({
			users: [
				{ login: "json1@example.com", nickname: "JSON User 1" },
				{ login: "json2@example.com", nickname: "JSON User 2" }
			]
		});
		expect(payload.users).toHaveLength(2);
		expect(payload.users[0]).toBeInstanceOf(ParamUserMerge);
		expect(payload.users[0].login).toBe("json1@example.com");
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayUserBatchMerge();
		expect(payload.users).toEqual([]);
	});

	test("createReply returns RepUserBatchMerge", () => {
		const payload = new PayUserBatchMerge();
		const reply = payload.createReply({});
		expect(reply).toBeInstanceOf(RepUserBatchMerge);
	});

	test("toJSON returns correct structure", () => {
		const user1 = new ParamUserMerge({ login: "batch1@example.com", nickname: "Batch User 1" });
		const user2 = new ParamUserMerge({ login: "batch2@example.com", nickname: "Batch User 2" });
		const payload = new PayUserBatchMerge({ users: [user1, user2] });
		const json = payload.toJSON();
		expect(json.users).toHaveLength(2);
		expect(json.users[0].login).toBe("batch1@example.com");
		expect(json.users[1].login).toBe("batch2@example.com");
	});

	test("getAction returns correct metadata", () => {
		const payload = new PayUserBatchMerge();
		const action = payload.getAction();
		expect(action.kind).toBe("merge");
		expect(action.object).toBe("user");
		expect(action.filter).toBeUndefined();
		expect(action.batch).toBe(true);
	});

	test("getList returns users array", () => {
		const user = new ParamUserMerge({ login: "list@example.com" });
		const payload = new PayUserBatchMerge({ users: [user] });
		expect(payload.getList()).toHaveLength(1);
		expect(payload.getList()[0]).toBe(user);
	});
});
