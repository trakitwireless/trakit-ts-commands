import { describe, expect, test } from "vitest";
import { RepUserDelete } from "../../../../commands/Accounts/Users/Responses/RepUserDelete";

describe("RepUserDelete", () => {
	test("constructor creates instance with user", () => {
		const reply = new RepUserDelete({
			user: {
				id: 123n,
				login: "test@example.com",
				company: 456n
			}
		});
		expect(reply.user?.id).toBe(123n);
		expect(reply.user?.login).toBe("test@example.com");
		expect(reply.user?.company).toBe(456n);
	});

	test("constructor creates instance without parameters", () => {
		const reply = new RepUserDelete({});
		expect(reply.user).toBeUndefined();
	});

	test("toJSON returns correct structure", () => {
		const reply = new RepUserDelete({
			user: {
				id: 789n,
				login: "delete@example.com",
				company: 999n
			}
		});
		const json = reply.toJSON();
		expect(json.user.id).toBe(789n);
		expect(json.user.login).toBe("delete@example.com");
	});

	test("getKey returns user id", () => {
		const reply = new RepUserDelete({
			user: {
				id: 555n,
				login: "key@example.com",
				company: 777n
			}
		});
		expect(reply.getKey()).toBe(555n);
	});

	test("getCompanyId returns company", () => {
		const reply = new RepUserDelete({
			user: {
				id: 111n,
				login: "company@example.com",
				company: 222n
			}
		});
		expect(reply.getCompanyId()).toBe(222n);
	});
});
