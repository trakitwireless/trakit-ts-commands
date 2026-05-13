import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../src/API/Requests/Payload";
import { PayCompanyGeneralGet } from "../../../src/Companies/Requests/PayCompanyGeneralGet";
import { RepCompanyGeneralGet } from "../../../src/Companies/Responses/RepCompanyGeneralGet";

describe('PayCompanyGeneralGet', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayCompanyGeneralGet();
		expect(payload).toBeInstanceOf(PayCompanyGeneralGet);
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
		const payload = new PayCompanyGeneralGet(json);
		expect(payload.company.id).toBe(777);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(3);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			company: { id: 888 },
			includeDeleted: false
		};
		const payload = new PayCompanyGeneralGet(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayCompanyGeneralGet();
		const replyJson: JsonObject = { company: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepCompanyGeneralGet);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			company: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayCompanyGeneralGet(json);
		const output = payload.toJSON();
		expect(output.company).toBeDefined();
		expect(output.company.id).toBe(777);
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayCompanyGeneralGet();
		expect(payload.action()).toBe("Company.GeneralGet");
		expect(payload.actionShort()).toBe("CompanyGeneralGet");
		expect(payload.actionNormalized()).toBe("company_general_get");
	});
});
