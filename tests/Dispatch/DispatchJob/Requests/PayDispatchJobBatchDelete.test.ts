import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayDispatchJobBatchDelete } from "../../../../commands/Dispatch/DispatchJob/Requests/PayDispatchJobBatchDelete";
import { RepDispatchJobBatchDelete } from "../../../../commands/Dispatch/DispatchJob/Responses/RepDispatchJobBatchDelete";

describe('PayDispatchJobBatchDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDispatchJobBatchDelete();
		expect(payload).toBeInstanceOf(PayDispatchJobBatchDelete);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			jobs: [
				{ id: 777 },
				{ id: 888 }
			],
			reqId: 3
		};
		const payload = new PayDispatchJobBatchDelete(json);
		expect(payload.jobs).toHaveLength(2);
		expect(payload.jobs[0].id).toBe(777);
		expect(payload.jobs[1].id).toBe(888);
		expect(payload.reqId).toBe(3);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayDispatchJobBatchDelete();
		const replyJson: JsonObject = { jobs: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepDispatchJobBatchDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			jobs: [
				{ id: 777 },
				{ id: 888 }
			],
			reqId: 3
		};
		const payload = new PayDispatchJobBatchDelete(json);
		const output = payload.toJSON();
		expect(output.jobs).toBeDefined();
		expect(output.jobs).toHaveLength(2);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDispatchJobBatchDelete();
		expect(payload.action()).toBe("DispatchJob.BatchDelete");
		expect(payload.actionShort()).toBe("DispatchJobBatchDelete");
		expect(payload.actionNormalized()).toBe("dispatch_job_batch_delete");
	});
});
