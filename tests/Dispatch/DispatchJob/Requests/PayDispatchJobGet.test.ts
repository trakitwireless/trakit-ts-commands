import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../src/API/Requests/Payload";
import { PayDispatchJobGet } from "../../../../src/Dispatch/DispatchJob/Requests/PayDispatchJobGet";
import { RepDispatchJobGet } from "../../../../src/Dispatch/DispatchJob/Responses/RepDispatchJobGet";

describe('PayDispatchJobGet', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDispatchJobGet();
		expect(payload).toBeInstanceOf(PayDispatchJobGet);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			job: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayDispatchJobGet(json);
		expect(payload.job.id).toBe(777);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(3);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			job: { id: 888 },
			includeDeleted: false
		};
		const payload = new PayDispatchJobGet(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayDispatchJobGet();
		const replyJson: JsonObject = { job: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepDispatchJobGet);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			job: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayDispatchJobGet(json);
		const output = payload.toJSON();
		expect(output.job).toBeDefined();
		expect(output.job.id).toBe(777);
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDispatchJobGet();
		expect(payload.action()).toBe("DispatchJob.Get");
		expect(payload.actionShort()).toBe("DispatchJobGet");
		expect(payload.actionNormalized()).toBe("dispatch_job_get");
	});
});
