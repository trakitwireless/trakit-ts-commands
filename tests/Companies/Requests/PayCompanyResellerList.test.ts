import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../commands/API/Requests/Payload";
import { PayCompanyResellerListAll } from "../../../commands/Companies/Requests/PayCompanyResellerList";
import { RepCompanyResellerListAll } from "../../../commands/Companies/Responses/RepCompanyResellerList";

describe('PayCompanyResellerListAll', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayCompanyResellerListAll();
		expect(payload).toBeInstanceOf(PayCompanyResellerListAll);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayCompanyResellerListAll(json);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(4);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			includeDeleted: false
		};
		const payload = new PayCompanyResellerListAll(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayCompanyResellerListAll();
		const replyJson: JsonObject = { companies: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepCompanyResellerListAll);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayCompanyResellerListAll(json);
		const output = payload.toJSON();
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(4);
	});

	it('should return correct action metadata', () => {
		const payload = new PayCompanyResellerListAll();
		expect(payload.action()).toBe("Company.ResellerList");
		expect(payload.actionShort()).toBe("CompanyResellerList");
		expect(payload.actionNormalized()).toBe("company_reseller_list");
	});
});
