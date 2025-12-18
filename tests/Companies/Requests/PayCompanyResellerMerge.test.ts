import { Company, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../commands/API/Requests/Payload";
import { PayCompanyResellerMerge } from "../../../commands/Companies/Requests/PayCompanyResellerMerge";
import { RepCompanyResellerMerge } from "../../../commands/Companies/Responses/RepCompanyResellerMerge";

describe('PayCompanyResellerMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayCompanyResellerMerge();
		expect(payload).toBeInstanceOf(PayCompanyResellerMerge);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			company: {
				id: 789,
				name: "Test Reseller Company"
			},
			reqId: 3
		};
		const payload = new PayCompanyResellerMerge(json);
		expect(payload.company.id).toBe(789);
		expect(payload.company.name).toBe("Test Reseller Company");
		expect(payload.reqId).toBe(3);
	});

	it('should handle getKey method', () => {
		const payload = new PayCompanyResellerMerge();
		const company = new Company({ id: 789, name: "Key Test" });
		const key = payload.getKey(company);
		expect(key).toBe(789);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayCompanyResellerMerge();
		const replyJson: JsonObject = { company: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepCompanyResellerMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			company: {
				id: 789,
				name: "Test Reseller Company"
			},
			reqId: 3
		};
		const payload = new PayCompanyResellerMerge(json);
		const output = payload.toJSON();
		expect(output.company).toBeDefined();
		expect(output.company.id).toBe(789);
		expect(output.company.name).toBe("Test Reseller Company");
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayCompanyResellerMerge();
		expect(payload.action()).toBe("Company.ResellerMerge");
		expect(payload.actionShort()).toBe("CompanyResellerMerge");
		expect(payload.actionNormalized()).toBe("company_reseller_merge");
	});
});
