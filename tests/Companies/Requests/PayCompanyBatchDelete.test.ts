import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../src/API/Requests/Parameters/ParamId";
import { Payload } from "../../../src/API/Requests/Payload";
import { PayCompanyBatchDelete } from "../../../src/Companies/Requests/PayCompanyBatchDelete";
import { RepCompanyBatchDelete } from "../../../src/Companies/Responses/RepCompanyBatchDelete";

describe('PayCompanyBatchDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayCompanyBatchDelete();
		expect(payload).toBeInstanceOf(PayCompanyBatchDelete);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.companies).toEqual([]);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			companies: [
				{ id: 111 },
				{ id: 222 },
				{ id: 333 }
			],
			reqId: 5
		};
		const payload = new PayCompanyBatchDelete(json);
		expect(payload.companies).toHaveLength(3);
		expect(payload.companies[0]).toBeInstanceOf(ParamId);
		expect(payload.companies[0].id).toBe(111);
		expect(payload.companies[1].id).toBe(222);
		expect(payload.companies[2].id).toBe(333);
		expect(payload.reqId).toBe(5);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayCompanyBatchDelete();
		const replyJson: JsonObject = { companies: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepCompanyBatchDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			companies: [
				{ id: 111 },
				{ id: 222 },
				{ id: 333 }
			],
			reqId: 5
		};
		const payload = new PayCompanyBatchDelete(json);
		const output = payload.toJSON();
		expect(output.companies).toBeDefined();
		expect(output.companies).toHaveLength(3);
		expect(output.companies[0].id).toBe(111);
		expect(output.companies[1].id).toBe(222);
		expect(output.companies[2].id).toBe(333);
		expect(output.reqId).toBe(5);
	});

	it('should return correct action metadata', () => {
		const payload = new PayCompanyBatchDelete();
		expect(payload.action()).toBe("Company.BatchDelete");
		expect(payload.actionShort()).toBe("CompanyBatchDelete");
		expect(payload.actionNormalized()).toBe("company_batch_delete");
	});
});
