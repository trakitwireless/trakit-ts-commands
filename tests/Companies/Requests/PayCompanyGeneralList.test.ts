import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../commands/API/Requests/Payload";
import { PayCompanyGeneralListAll } from "../../../commands/Companies/Requests/PayCompanyGeneralList";
import { RepCompanyGeneralListAll } from "../../../commands/Companies/Responses/RepCompanyGeneralList";

describe('PayCompanyGeneralListAll', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayCompanyGeneralListAll();
		expect(payload).toBeInstanceOf(PayCompanyGeneralListAll);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayCompanyGeneralListAll(json);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(4);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			includeDeleted: false
		};
		const payload = new PayCompanyGeneralListAll(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayCompanyGeneralListAll();
		const replyJson: JsonObject = { companies: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepCompanyGeneralListAll);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayCompanyGeneralListAll(json);
		const output = payload.toJSON();
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(4);
	});

	it('should return correct action metadata', () => {
		const payload = new PayCompanyGeneralListAll();
		expect(payload.action()).toBe("Company.GeneralList");
		expect(payload.actionShort()).toBe("CompanyGeneralList");
		expect(payload.actionNormalized()).toBe("company_general_list");
	});
});
