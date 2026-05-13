import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../src/API/Requests/Payload";
import { PayCompanyGet } from "../../../src/Companies/Requests/PayCompanyGet";
import { RepCompanyGet } from "../../../src/Companies/Responses/RepCompanyGet";

describe('PayCompanyGet', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayCompanyGet();
		expect(payload).toBeInstanceOf(PayCompanyGet);
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
		const payload = new PayCompanyGet(json);
		expect(payload.company.id).toBe(777);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(3);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			company: { id: 888 },
			includeDeleted: false
		};
		const payload = new PayCompanyGet(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayCompanyGet();
		const replyJson: JsonObject = { company: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepCompanyGet);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			company: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayCompanyGet(json);
		const output = payload.toJSON();
		expect(output.company).toBeDefined();
		expect(output.company.id).toBe(777);
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayCompanyGet();
		expect(payload.action()).toBe("Company.Get");
		expect(payload.actionShort()).toBe("CompanyGet");
		expect(payload.actionNormalized()).toBe("company_get");
	});
});
