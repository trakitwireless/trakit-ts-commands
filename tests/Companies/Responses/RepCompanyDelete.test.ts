import { Company, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepCompanyDelete } from "../../../commands/Companies/Responses/RepCompanyDelete";

describe('RepCompanyDelete', () => {
	it('should create instance with empty constructor', () => {
		const reply = new RepCompanyDelete();
		expect(reply).toBeInstanceOf(RepCompanyDelete);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			company: {
				id: 777
			},
			reqId: 3
		};
		const reply = new RepCompanyDelete(json);
		expect(reply.company).toBeInstanceOf(Company);
		expect(reply.company.id).toBe(777);
		expect(reply.reqId).toBe(3);
	});

	it('should get object with getObject method', () => {
		const json: JsonObject = {
			company: {
				id: 888
			}
		};
		const reply = new RepCompanyDelete(json);
		const object = reply.getObject();
		expect(object).toBeInstanceOf(Company);
		expect(object.id).toBe(888);
	});

	it('should get company ID with getCompanyId method', () => {
		const json: JsonObject = {
			company: {
				id: 999
			}
		};
		const reply = new RepCompanyDelete(json);
		const companyId = reply.getCompanyId();
		expect(companyId).toBe(999);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			company: {
				id: 777
			},
			reqId: 3
		};
		const reply = new RepCompanyDelete(json);
		const output = reply.toJSON();
		expect(output.company).toBeDefined();
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const reply = new RepCompanyDelete();
		expect(reply.action()).toBe("Company.Delete");
		expect(reply.actionShort()).toBe("CompanyDelete");
		expect(reply.actionNormalized()).toBe("company_delete");
	});
});
