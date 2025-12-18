import { describe, expect, test } from "vitest";
import { PayMachine } from "../../../../commands/Accounts/Machines/Requests/PayMachine";

describe("PayMachine", () => {
	test("constructor creates instance with id", () => {
		const payload = new PayMachine({ id: 123n });
		expect(payload.id).toBe(123n);
	});

	test("constructor creates instance without parameters", () => {
		const payload = new PayMachine();
		expect(payload.id).toBeUndefined();
	});
});
