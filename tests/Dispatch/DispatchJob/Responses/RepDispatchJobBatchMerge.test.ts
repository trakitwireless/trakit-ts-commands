import { DispatchJob, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepDispatchJobBatchMerge } from "../../../../src/Dispatch/DispatchJob/Responses/RepDispatchJobBatchMerge";

describe('RepDispatchJobBatchMerge', () => {
	it('should create instance with empty constructor', () => {
		const reply = new RepDispatchJobBatchMerge();
		expect(reply).toBeInstanceOf(RepDispatchJobBatchMerge);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			jobs: [
				{ id: 777, name: "Job One" },
				{ id: 888, name: "Job Two" }
			],
			reqId: 3
		};
		const reply = new RepDispatchJobBatchMerge(json);
		expect(reply.jobs).toHaveLength(2);
		expect(reply.jobs[0]).toBeInstanceOf(DispatchJob);
		expect(reply.jobs[0].id).toBe(777);
		expect(reply.jobs[1].id).toBe(888);
		expect(reply.reqId).toBe(3);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			jobs: [
				{ id: 777, name: "Job One" },
				{ id: 888, name: "Job Two" }
			],
			reqId: 3
		};
		const reply = new RepDispatchJobBatchMerge(json);
		const output = reply.toJSON();
		expect(output.jobs).toBeDefined();
		expect(output.jobs).toHaveLength(2);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const reply = new RepDispatchJobBatchMerge();
		expect(reply.action()).toBe("DispatchJob.BatchMerge");
		expect(reply.actionShort()).toBe("DispatchJobBatchMerge");
		expect(reply.actionNormalized()).toBe("dispatch_job_batch_merge");
	});
});
