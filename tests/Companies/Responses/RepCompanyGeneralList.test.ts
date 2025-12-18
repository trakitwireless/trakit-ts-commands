import { Company, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepCompanyGeneralListAll } from "../../../commands/Companies/Responses/RepCompanyGeneralList";

describe('RepCompanyGeneralListAll', () => {
	it('should create instance with empty constructor', () => {
		const reply = new RepCompanyGeneralListAll();
		expect(reply).toBeInstanceOf(RepCompanyGeneralListAll);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			companies: [
				{ id: 777, name: "Company One" },
				{ id: 888, name: "Company Two" }
			],
			reqId: 3
		};
		const reply = new RepCompanyGeneralListAll(json);
		expect(reply.companies).toHaveLength(2);
		expect(reply.companies[0]).toBeInstanceOf(Company);
		expect(reply.companies[0].id).toBe(777);
		expect(reply.companies[1].id).toBe(888);
		expect(reply.reqId).toBe(3);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			companies: [
				{ id: 777, name: "Company One" },
				{ id: 888, name: "Company Two" }
			],
			reqId: 3
		};
		const reply = new RepCompanyGeneralListAll(json);
		const output = reply.toJSON();
		expect(output.companies).toBeDefined();
		expect(output.companies).toHaveLength(2);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const reply = new RepCompanyGeneralListAll();
		expect(reply.action()).toBe("Company.GeneralList");
		expect(reply.actionShort()).toBe("CompanyGeneralList");
		expect(reply.actionNormalized()).toBe("company_general_list");
	});
});
