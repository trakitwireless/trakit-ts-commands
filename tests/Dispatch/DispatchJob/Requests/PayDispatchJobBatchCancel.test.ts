import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayDispatchJobBatchCancel } from "../../../../commands/Dispatch/DispatchJob/Requests/PayDispatchJobBatchCancel";

describe('PayDispatchJobBatchCancel', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDispatchJobBatchCancel();
		expect(payload).toBeInstanceOf(PayDispatchJobBatchCancel);
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
		const payload = new PayDispatchJobBatchCancel(json);
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
		const payload = new PayDispatchJobBatchCancel(json);
		const output = payload.toJSON();
		expect(output.jobs).toBeDefined();
		expect(output.jobs).toHaveLength(2);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDispatchJobBatchCancel();
		expect(payload.action()).toBe("DispatchJob.BatchCancel");
		expect(payload.actionShort()).toBe("DispatchJobBatchCancel");
		expect(payload.actionNormalized()).toBe("dispatch_job_batch_cancel");
	});
});
