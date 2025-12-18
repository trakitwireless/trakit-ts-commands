import { DispatchJob, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayDispatchJobBatchMerge } from "../../../../commands/Dispatch/DispatchJob/Requests/PayDispatchJobBatchMerge";
import { RepDispatchJobBatchMerge } from "../../../../commands/Dispatch/DispatchJob/Responses/RepDispatchJobBatchMerge";

describe('PayDispatchJobBatchMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDispatchJobBatchMerge();
		expect(payload).toBeInstanceOf(PayDispatchJobBatchMerge);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			jobs: [
				{ id: 777, name: "Job One" },
				{ id: 888, name: "Job Two" }
			],
			reqId: 3
		};
		const payload = new PayDispatchJobBatchMerge(json);
		expect(payload.jobs).toHaveLength(2);
		expect(payload.jobs[0].id).toBe(777);
		expect(payload.jobs[1].id).toBe(888);
		expect(payload.reqId).toBe(3);
	});

	it('should handle getKey method', () => {
		const payload = new PayDispatchJobBatchMerge();
		const job = new DispatchJob({ id: 789, name: "Key Test" });
		const key = payload.getKey(job);
		expect(key).toBe(789);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayDispatchJobBatchMerge();
		const replyJson: JsonObject = { jobs: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepDispatchJobBatchMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			jobs: [
				{ id: 777, name: "Job One" },
				{ id: 888, name: "Job Two" }
			],
			reqId: 3
		};
		const payload = new PayDispatchJobBatchMerge(json);
		const output = payload.toJSON();
		expect(output.jobs).toBeDefined();
		expect(output.jobs).toHaveLength(2);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDispatchJobBatchMerge();
		expect(payload.action()).toBe("DispatchJob.BatchMerge");
		expect(payload.actionShort()).toBe("DispatchJobBatchMerge");
		expect(payload.actionNormalized()).toBe("dispatch_job_batch_merge");
	});
});
