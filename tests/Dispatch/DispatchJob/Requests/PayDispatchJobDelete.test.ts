import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayDispatchJobDelete } from "../../../../commands/Dispatch/DispatchJob/Requests/PayDispatchJobDelete";
import { RepDispatchJobDelete } from "../../../../commands/Dispatch/DispatchJob/Responses/RepDispatchJobDelete";

describe('PayDispatchJobDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDispatchJobDelete();
		expect(payload).toBeInstanceOf(PayDispatchJobDelete);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			job: {
				id: 777
			},
			reqId: 3
		};
		const payload = new PayDispatchJobDelete(json);
		expect(payload.job.id).toBe(777);
		expect(payload.reqId).toBe(3);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayDispatchJobDelete();
		const replyJson: JsonObject = { job: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepDispatchJobDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			job: {
				id: 777
			},
			reqId: 3
		};
		const payload = new PayDispatchJobDelete(json);
		const output = payload.toJSON();
		expect(output.job).toBeDefined();
		expect(output.job.id).toBe(777);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDispatchJobDelete();
		expect(payload.action()).toBe("DispatchJob.Delete");
		expect(payload.actionShort()).toBe("DispatchJobDelete");
		expect(payload.actionNormalized()).toBe("dispatch_job_delete");
	});
});
