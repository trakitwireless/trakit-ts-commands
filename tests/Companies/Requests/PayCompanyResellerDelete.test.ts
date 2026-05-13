import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../src/API/Requests/Payload";
import { PayCompanyResellerDelete } from "../../../src/Companies/Requests/PayCompanyResellerDelete";
import { RepCompanyResellerDelete } from "../../../src/Companies/Responses/RepCompanyResellerDelete";

describe('PayCompanyResellerDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayCompanyResellerDelete();
		expect(payload).toBeInstanceOf(PayCompanyResellerDelete);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			company: {
				id: 777
			},
			reqId: 3
		};
		const payload = new PayCompanyResellerDelete(json);
		expect(payload.company.id).toBe(777);
		expect(payload.reqId).toBe(3);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayCompanyResellerDelete();
		const replyJson: JsonObject = { company: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepCompanyResellerDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			company: {
				id: 777
			},
			reqId: 3
		};
		const payload = new PayCompanyResellerDelete(json);
		const output = payload.toJSON();
		expect(output.company).toBeDefined();
		expect(output.company.id).toBe(777);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayCompanyResellerDelete();
		expect(payload.action()).toBe("Company.ResellerDelete");
		expect(payload.actionShort()).toBe("CompanyResellerDelete");
		expect(payload.actionNormalized()).toBe("company_reseller_delete");
	});
});
