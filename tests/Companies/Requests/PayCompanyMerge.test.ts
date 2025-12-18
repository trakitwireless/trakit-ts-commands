import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../commands/API/Requests/Payload";
import { ParamCompanyMerge } from "../../../commands/Companies/Requests/Parameters/ParamCompanyMerge";
import { PayCompanyMerge } from "../../../commands/Companies/Requests/PayCompanyMerge";
import { RepCompanyMerge } from "../../../commands/Companies/Responses/RepCompanyMerge";

describe('PayCompanyMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayCompanyMerge();
		expect(payload).toBeInstanceOf(PayCompanyMerge);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.company).toBeInstanceOf(ParamCompanyMerge);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			company: {
				name: "Test Company",
				timezone: "America/New_York"
			},
			reqId: 6
		};
		const payload = new PayCompanyMerge(json);
		expect(payload.company).toBeInstanceOf(ParamCompanyMerge);
		expect(payload.company.name).toBe("Test Company");
		expect(payload.reqId).toBe(6);
	});

	it('should implement getKey method', () => {
		const json: JsonObject = {
			company: {
				id: 444,
				name: "Company"
			}
		};
		const payload = new PayCompanyMerge(json);
		expect(payload.getKey()).toBe("444");
	});

	it('should return empty string from getKey when id is not set', () => {
		const payload = new PayCompanyMerge();
		expect(payload.getKey()).toBe("");
	});

	it('should create reply with createReply method', () => {
		const payload = new PayCompanyMerge();
		const replyJson: JsonObject = { company: { id: 123 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepCompanyMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			company: {
				name: "Test Company",
				timezone: "America/New_York"
			},
			reqId: 6
		};
		const payload = new PayCompanyMerge(json);
		const output = payload.toJSON();
		expect(output.company).toBeDefined();
		expect(output.company.name).toBe("Test Company");
		expect(output.reqId).toBe(6);
	});

	it('should return correct action metadata', () => {
		const payload = new PayCompanyMerge();
		expect(payload.action()).toBe("Company.Merge");
		expect(payload.actionShort()).toBe("CompanyMerge");
		expect(payload.actionNormalized()).toBe("company_merge");
	});

	it('should handle company for update operation', () => {
		const json: JsonObject = {
			company: {
				id: 555,
				name: "Updated Company"
			}
		};
		const payload = new PayCompanyMerge(json);
		expect(payload.company.id).toBe(555);
		expect(payload.company.name).toBe("Updated Company");
	});
});
