import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../commands/API/Requests/Payload";
import { PayCompanyDirectoryListAll } from "../../../commands/Companies/Requests/PayCompanyDirectoryList";
import { RepCompanyDirectoryListAll } from "../../../commands/Companies/Responses/RepCompanyDirectoryList";

describe('PayCompanyDirectoryListAll', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayCompanyDirectoryListAll();
		expect(payload).toBeInstanceOf(PayCompanyDirectoryListAll);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayCompanyDirectoryListAll(json);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(4);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			includeDeleted: false
		};
		const payload = new PayCompanyDirectoryListAll(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayCompanyDirectoryListAll();
		const replyJson: JsonObject = { companies: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepCompanyDirectoryListAll);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayCompanyDirectoryListAll(json);
		const output = payload.toJSON();
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(4);
	});

	it('should return correct action metadata', () => {
		const payload = new PayCompanyDirectoryListAll();
		expect(payload.action()).toBe("Company.DirectoryList");
		expect(payload.actionShort()).toBe("CompanyDirectoryList");
		expect(payload.actionNormalized()).toBe("company_directory_list");
	});
});
