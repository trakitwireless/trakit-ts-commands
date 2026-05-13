import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../src/API/Requests/Payload";
import { PayCompanyStyleListAll } from "../../../src/Companies/Requests/PayCompanyStyleList";
import { RepCompanyStyleListAll } from "../../../src/Companies/Responses/RepCompanyStyleList";

describe('PayCompanyStyleListAll', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayCompanyStyleListAll();
		expect(payload).toBeInstanceOf(PayCompanyStyleListAll);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayCompanyStyleListAll(json);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(4);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			includeDeleted: false
		};
		const payload = new PayCompanyStyleListAll(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayCompanyStyleListAll();
		const replyJson: JsonObject = { companies: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepCompanyStyleListAll);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayCompanyStyleListAll(json);
		const output = payload.toJSON();
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(4);
	});

	it('should return correct action metadata', () => {
		const payload = new PayCompanyStyleListAll();
		expect(payload.action()).toBe("Company.StyleList");
		expect(payload.actionShort()).toBe("CompanyStyleList");
		expect(payload.actionNormalized()).toBe("company_style_list");
	});
});
