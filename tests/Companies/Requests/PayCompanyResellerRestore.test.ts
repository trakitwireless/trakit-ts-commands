import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../src/API/Requests/Payload";
import { PayCompanyResellerRestore } from "../../../src/Companies/Requests/PayCompanyResellerRestore";
import { RepCompanyResellerRestore } from "../../../src/Companies/Responses/RepCompanyResellerRestore";

describe('PayCompanyResellerRestore', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayCompanyResellerRestore();
		expect(payload).toBeInstanceOf(PayCompanyResellerRestore);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			company: {
				id: 777
			},
			reqId: 3
		};
		const payload = new PayCompanyResellerRestore(json);
		expect(payload.company.id).toBe(777);
		expect(payload.reqId).toBe(3);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayCompanyResellerRestore();
		const replyJson: JsonObject = { company: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepCompanyResellerRestore);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			company: {
				id: 777
			},
			reqId: 3
		};
		const payload = new PayCompanyResellerRestore(json);
		const output = payload.toJSON();
		expect(output.company).toBeDefined();
		expect(output.company.id).toBe(777);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayCompanyResellerRestore();
		expect(payload.action()).toBe("Company.ResellerRestore");
		expect(payload.actionShort()).toBe("CompanyResellerRestore");
		expect(payload.actionNormalized()).toBe("company_reseller_restore");
	});
});
