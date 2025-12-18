import { Company, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepCompanyDirectoryGet } from "../../../commands/Companies/Responses/RepCompanyDirectoryGet";

describe('RepCompanyDirectoryGet', () => {
	it('should create instance with empty constructor', () => {
		const reply = new RepCompanyDirectoryGet();
		expect(reply).toBeInstanceOf(RepCompanyDirectoryGet);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			company: {
				id: 777,
				name: "Test Company"
			},
			reqId: 3
		};
		const reply = new RepCompanyDirectoryGet(json);
		expect(reply.company).toBeInstanceOf(Company);
		expect(reply.company.id).toBe(777);
		expect(reply.company.name).toBe("Test Company");
		expect(reply.reqId).toBe(3);
	});

	it('should get object with getObject method', () => {
		const json: JsonObject = {
			company: {
				id: 888,
				name: "Another Company"
			}
		};
		const reply = new RepCompanyDirectoryGet(json);
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
		const reply = new RepCompanyDirectoryGet(json);
		const companyId = reply.getCompanyId();
		expect(companyId).toBe(999);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			company: {
				id: 777,
				name: "Test Company"
			},
			reqId: 3
		};
		const reply = new RepCompanyDirectoryGet(json);
		const output = reply.toJSON();
		expect(output.company).toBeDefined();
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const reply = new RepCompanyDirectoryGet();
		expect(reply.action()).toBe("Company.DirectoryGet");
		expect(reply.actionShort()).toBe("CompanyDirectoryGet");
		expect(reply.actionNormalized()).toBe("company_directory_get");
	});
});
