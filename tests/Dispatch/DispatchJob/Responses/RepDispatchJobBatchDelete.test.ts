import { DispatchJob, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepDispatchJobBatchDelete } from "../../../../commands/Dispatch/DispatchJob/Responses/RepDispatchJobBatchDelete";

describe('RepDispatchJobBatchDelete', () => {
	it('should create instance with empty constructor', () => {
		const reply = new RepDispatchJobBatchDelete();
		expect(reply).toBeInstanceOf(RepDispatchJobBatchDelete);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			jobs: [
				{ id: 777 },
				{ id: 888 }
			],
			reqId: 3
		};
		const reply = new RepDispatchJobBatchDelete(json);
		expect(reply.jobs).toHaveLength(2);
		expect(reply.jobs[0]).toBeInstanceOf(DispatchJob);
		expect(reply.jobs[0].id).toBe(777);
		expect(reply.jobs[1].id).toBe(888);
		expect(reply.reqId).toBe(3);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			jobs: [
				{ id: 777 },
				{ id: 888 }
			],
			reqId: 3
		};
		const reply = new RepDispatchJobBatchDelete(json);
		const output = reply.toJSON();
		expect(output.jobs).toBeDefined();
		expect(output.jobs).toHaveLength(2);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const reply = new RepDispatchJobBatchDelete();
		expect(reply.action()).toBe("DispatchJob.BatchDelete");
		expect(reply.actionShort()).toBe("DispatchJobBatchDelete");
		expect(reply.actionNormalized()).toBe("dispatch_job_batch_delete");
	});
});
