import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../src/API/Requests/Payload";
import { PayCompanyResellerGet } from "../../../src/Companies/Requests/PayCompanyResellerGet";
import { RepCompanyResellerGet } from "../../../src/Companies/Responses/RepCompanyResellerGet";

describe('PayCompanyResellerGet', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayCompanyResellerGet();
		expect(payload).toBeInstanceOf(PayCompanyResellerGet);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			company: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayCompanyResellerGet(json);
		expect(payload.company.id).toBe(777);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(3);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			company: { id: 888 },
			includeDeleted: false
		};
		const payload = new PayCompanyResellerGet(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayCompanyResellerGet();
		const replyJson: JsonObject = { company: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepCompanyResellerGet);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			company: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayCompanyResellerGet(json);
		const output = payload.toJSON();
		expect(output.company).toBeDefined();
		expect(output.company.id).toBe(777);
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayCompanyResellerGet();
		expect(payload.action()).toBe("Company.ResellerGet");
		expect(payload.actionShort()).toBe("CompanyResellerGet");
		expect(payload.actionNormalized()).toBe("company_reseller_get");
	});
});
