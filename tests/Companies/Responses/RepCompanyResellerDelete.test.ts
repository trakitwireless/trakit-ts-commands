import { Company, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepCompanyResellerDelete } from "../../../src/Companies/Responses/RepCompanyResellerDelete";

describe('RepCompanyResellerDelete', () => {
	it('should create instance with empty constructor', () => {
		const reply = new RepCompanyResellerDelete();
		expect(reply).toBeInstanceOf(RepCompanyResellerDelete);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			company: {
				id: 777
			},
			reqId: 3
		};
		const reply = new RepCompanyResellerDelete(json);
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
		const reply = new RepCompanyResellerDelete(json);
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
		const reply = new RepCompanyResellerDelete(json);
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
		const reply = new RepCompanyResellerDelete(json);
		const output = reply.toJSON();
		expect(output.company).toBeDefined();
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const reply = new RepCompanyResellerDelete();
		expect(reply.action()).toBe("Company.ResellerDelete");
		expect(reply.actionShort()).toBe("CompanyResellerDelete");
		expect(reply.actionNormalized()).toBe("company_reseller_delete");
	});
});
