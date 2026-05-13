import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../src/API/Requests/Payload";
import { PayCompanyPolicyListAll } from "../../../src/Companies/Requests/PayCompanyPolicyList";
import { RepCompanyPolicyListAll } from "../../../src/Companies/Responses/RepCompanyPolicyList";

describe('PayCompanyPolicyListAll', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayCompanyPolicyListAll();
		expect(payload).toBeInstanceOf(PayCompanyPolicyListAll);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayCompanyPolicyListAll(json);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(4);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			includeDeleted: false
		};
		const payload = new PayCompanyPolicyListAll(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayCompanyPolicyListAll();
		const replyJson: JsonObject = { companies: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepCompanyPolicyListAll);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayCompanyPolicyListAll(json);
		const output = payload.toJSON();
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(4);
	});

	it('should return correct action metadata', () => {
		const payload = new PayCompanyPolicyListAll();
		expect(payload.action()).toBe("Company.PolicyList");
		expect(payload.actionShort()).toBe("CompanyPolicyList");
		expect(payload.actionNormalized()).toBe("company_policy_list");
	});
});
