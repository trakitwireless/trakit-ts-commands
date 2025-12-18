import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../commands/API/Requests/Payload";
import { ParamCompanyMerge } from "../../../commands/Companies/Requests/Parameters/ParamCompanyMerge";
import { PayCompanyBatchMerge } from "../../../commands/Companies/Requests/PayCompanyBatchMerge";
import { RepCompanyBatchMerge } from "../../../commands/Companies/Responses/RepCompanyBatchMerge";

describe('PayCompanyBatchMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayCompanyBatchMerge();
		expect(payload).toBeInstanceOf(PayCompanyBatchMerge);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.companies).toEqual([]);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			companies: [
				{ name: "Company 1" },
				{ name: "Company 2" },
				{ name: "Company 3" }
			],
			reqId: 8
		};
		const payload = new PayCompanyBatchMerge(json);
		expect(payload.companies).toHaveLength(3);
		expect(payload.companies[0]).toBeInstanceOf(ParamCompanyMerge);
		expect(payload.companies[0].name).toBe("Company 1");
		expect(payload.companies[1].name).toBe("Company 2");
		expect(payload.companies[2].name).toBe("Company 3");
		expect(payload.reqId).toBe(8);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayCompanyBatchMerge();
		const replyJson: JsonObject = { companies: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepCompanyBatchMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			companies: [
				{ name: "Company 1" },
				{ name: "Company 2" }
			],
			reqId: 8
		};
		const payload = new PayCompanyBatchMerge(json);
		const output = payload.toJSON();
		expect(output.companies).toBeDefined();
		expect(output.companies).toHaveLength(2);
		expect(output.companies[0].name).toBe("Company 1");
		expect(output.companies[1].name).toBe("Company 2");
		expect(output.reqId).toBe(8);
	});

	it('should return correct action metadata', () => {
		const payload = new PayCompanyBatchMerge();
		expect(payload.action()).toBe("Company.BatchMerge");
		expect(payload.actionShort()).toBe("CompanyBatchMerge");
		expect(payload.actionNormalized()).toBe("company_batch_merge");
	});
});
