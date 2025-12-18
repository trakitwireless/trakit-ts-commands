import { DispatchJob, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayDispatchJobMerge } from "../../../../commands/Dispatch/DispatchJob/Requests/PayDispatchJobMerge";
import { RepDispatchJobMerge } from "../../../../commands/Dispatch/DispatchJob/Responses/RepDispatchJobMerge";

describe('PayDispatchJobMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDispatchJobMerge();
		expect(payload).toBeInstanceOf(PayDispatchJobMerge);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			job: {
				id: 789,
				name: "Test Job"
			},
			reqId: 3
		};
		const payload = new PayDispatchJobMerge(json);
		expect(payload.job.id).toBe(789);
		expect(payload.job.name).toBe("Test Job");
		expect(payload.reqId).toBe(3);
	});

	it('should handle getKey method', () => {
		const payload = new PayDispatchJobMerge();
		const job = new DispatchJob({ id: 789, name: "Key Test" });
		const key = payload.getKey(job);
		expect(key).toBe(789);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayDispatchJobMerge();
		const replyJson: JsonObject = { job: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepDispatchJobMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			job: {
				id: 789,
				name: "Test Job"
			},
			reqId: 3
		};
		const payload = new PayDispatchJobMerge(json);
		const output = payload.toJSON();
		expect(output.job).toBeDefined();
		expect(output.job.id).toBe(789);
		expect(output.job.name).toBe("Test Job");
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDispatchJobMerge();
		expect(payload.action()).toBe("DispatchJob.Merge");
		expect(payload.actionShort()).toBe("DispatchJobMerge");
		expect(payload.actionNormalized()).toBe("dispatch_job_merge");
	});
});
