import { Company, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepCompanyBatchDelete } from "../../../src/Companies/Responses/RepCompanyBatchDelete";

describe('RepCompanyBatchDelete', () => {
	it('should create instance with empty constructor', () => {
		const reply = new RepCompanyBatchDelete();
		expect(reply).toBeInstanceOf(RepCompanyBatchDelete);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			companies: [
				{ id: 777 },
				{ id: 888 }
			],
			reqId: 3
		};
		const reply = new RepCompanyBatchDelete(json);
		expect(reply.companies).toHaveLength(2);
		expect(reply.companies[0]).toBeInstanceOf(Company);
		expect(reply.companies[0].id).toBe(777);
		expect(reply.companies[1].id).toBe(888);
		expect(reply.reqId).toBe(3);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			companies: [
				{ id: 777 },
				{ id: 888 }
			],
			reqId: 3
		};
		const reply = new RepCompanyBatchDelete(json);
		const output = reply.toJSON();
		expect(output.companies).toBeDefined();
		expect(output.companies).toHaveLength(2);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const reply = new RepCompanyBatchDelete();
		expect(reply.action()).toBe("Company.BatchDelete");
		expect(reply.actionShort()).toBe("CompanyBatchDelete");
		expect(reply.actionNormalized()).toBe("company_batch_delete");
	});
});
