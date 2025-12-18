import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../commands/API/Requests/Payload";
import { PayCompanyDirectoryGet } from "../../../commands/Companies/Requests/PayCompanyDirectoryGet";
import { RepCompanyDirectoryGet } from "../../../commands/Companies/Responses/RepCompanyDirectoryGet";

describe('PayCompanyDirectoryGet', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayCompanyDirectoryGet();
		expect(payload).toBeInstanceOf(PayCompanyDirectoryGet);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			company: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayCompanyDirectoryGet(json);
		expect(payload.company.id).toBe(777);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(3);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			company: { id: 888 },
			includeDeleted: false
		};
		const payload = new PayCompanyDirectoryGet(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayCompanyDirectoryGet();
		const replyJson: JsonObject = { company: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepCompanyDirectoryGet);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			company: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayCompanyDirectoryGet(json);
		const output = payload.toJSON();
		expect(output.company).toBeDefined();
		expect(output.company.id).toBe(777);
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayCompanyDirectoryGet();
		expect(payload.action()).toBe("Company.DirectoryGet");
		expect(payload.actionShort()).toBe("CompanyDirectoryGet");
		expect(payload.actionNormalized()).toBe("company_directory_get");
	});
});
