import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../src/API/Requests/Payload";
import { PayCompany } from "../../../src/Companies/Requests/PayCompany";
import { PayCompanyDelete } from "../../../src/Companies/Requests/PayCompanyDelete";
import { RepCompanyDelete } from "../../../src/Companies/Responses/RepCompanyDelete";

describe('PayCompanyDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayCompanyDelete();
		expect(payload).toBeInstanceOf(PayCompanyDelete);
		expect(payload).toBeInstanceOf(PayCompany);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			company: {
				id: 555
			},
			reqId: 2
		};
		const payload = new PayCompanyDelete(json);
		expect(payload.company.id).toBe(555);
		expect(payload.reqId).toBe(2);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayCompanyDelete();
		const replyJson: JsonObject = { company: { id: 123 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepCompanyDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			company: {
				id: 555
			},
			reqId: 2
		};
		const payload = new PayCompanyDelete(json);
		const output = payload.toJSON();
		expect(output.company).toBeDefined();
		expect(output.company.id).toBe(555);
		expect(output.reqId).toBe(2);
	});

	it('should return correct action metadata', () => {
		const payload = new PayCompanyDelete();
		expect(payload.action()).toBe("Company.Delete");
		expect(payload.actionShort()).toBe("CompanyDelete");
		expect(payload.actionNormalized()).toBe("company_delete");
	});
});
