import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../src/API/Requests/Payload";
import { PayDispatchJobListAll } from "../../../../src/Dispatch/DispatchJob/Requests/PayDispatchJobList";
import { RepDispatchJobListAll } from "../../../../src/Dispatch/DispatchJob/Responses/RepDispatchJobList";

describe('PayDispatchJobListAll', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDispatchJobListAll();
		expect(payload).toBeInstanceOf(PayDispatchJobListAll);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayDispatchJobListAll(json);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(4);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			includeDeleted: false
		};
		const payload = new PayDispatchJobListAll(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayDispatchJobListAll();
		const replyJson: JsonObject = { jobs: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepDispatchJobListAll);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayDispatchJobListAll(json);
		const output = payload.toJSON();
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(4);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDispatchJobListAll();
		expect(payload.action()).toBe("DispatchJob.List");
		expect(payload.actionShort()).toBe("DispatchJobList");
		expect(payload.actionNormalized()).toBe("dispatch_job_list");
	});
});
