import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../src/API/Requests/Payload";
import { PayDispatchJobBatchChange } from "../../../../src/Dispatch/DispatchJob/Requests/PayDispatchJobBatchChange";

describe('PayDispatchJobBatchChange', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDispatchJobBatchChange();
		expect(payload).toBeInstanceOf(PayDispatchJobBatchChange);
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
		const payload = new PayDispatchJobBatchChange(json);
		expect(payload.jobs).toHaveLength(2);
		expect(payload.jobs[0].id).toBe(777);
		expect(payload.jobs[1].id).toBe(888);
		expect(payload.reqId).toBe(3);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			jobs: [
				{ id: 777 },
				{ id: 888 }
			],
			reqId: 3
		};
		const payload = new PayDispatchJobBatchChange(json);
		const output = payload.toJSON();
		expect(output.jobs).toBeDefined();
		expect(output.jobs).toHaveLength(2);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDispatchJobBatchChange();
		expect(payload.action()).toBe("DispatchJob.BatchChange");
		expect(payload.actionShort()).toBe("DispatchJobBatchChange");
		expect(payload.actionNormalized()).toBe("dispatch_job_batch_change");
	});
});
