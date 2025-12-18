import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../commands/API/Requests/Payload";
import { PayCompanyStyleGet } from "../../../commands/Companies/Requests/PayCompanyStyleGet";
import { RepCompanyStyleGet } from "../../../commands/Companies/Responses/RepCompanyStyleGet";

describe('PayCompanyStyleGet', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayCompanyStyleGet();
		expect(payload).toBeInstanceOf(PayCompanyStyleGet);
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
		const payload = new PayCompanyStyleGet(json);
		expect(payload.company.id).toBe(777);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(3);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			company: { id: 888 },
			includeDeleted: false
		};
		const payload = new PayCompanyStyleGet(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayCompanyStyleGet();
		const replyJson: JsonObject = { company: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepCompanyStyleGet);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			company: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayCompanyStyleGet(json);
		const output = payload.toJSON();
		expect(output.company).toBeDefined();
		expect(output.company.id).toBe(777);
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayCompanyStyleGet();
		expect(payload.action()).toBe("Company.StyleGet");
		expect(payload.actionShort()).toBe("CompanyStyleGet");
		expect(payload.actionNormalized()).toBe("company_style_get");
	});
});
