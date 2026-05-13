import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../src/API/Requests/Payload";
import { PayCompany } from "../../../src/Companies/Requests/PayCompany";
import { PayCompanyRestore } from "../../../src/Companies/Requests/PayCompanyRestore";
import { RepCompanyGet } from "../../../src/Companies/Responses/RepCompanyGet";

describe('PayCompanyRestore', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayCompanyRestore();
		expect(payload).toBeInstanceOf(PayCompanyRestore);
		expect(payload).toBeInstanceOf(PayCompany);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			company: {
				id: 666
			},
			reqId: 7
		};
		const payload = new PayCompanyRestore(json);
		expect(payload.company.id).toBe(666);
		expect(payload.reqId).toBe(7);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayCompanyRestore();
		const replyJson: JsonObject = { company: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepCompanyGet);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			company: {
				id: 666
			},
			reqId: 7
		};
		const payload = new PayCompanyRestore(json);
		const output = payload.toJSON();
		expect(output.company).toBeDefined();
		expect(output.company.id).toBe(666);
		expect(output.reqId).toBe(7);
	});

	it('should return correct action metadata', () => {
		const payload = new PayCompanyRestore();
		expect(payload.action()).toBe("Company.Restore");
		expect(payload.actionShort()).toBe("CompanyRestore");
		expect(payload.actionNormalized()).toBe("company_restore");
	});
});
