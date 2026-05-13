import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../src/API/Requests/Payload";
import { PayDispatchJobRestore } from "../../../../src/Dispatch/DispatchJob/Requests/PayDispatchJobRestore";

describe('PayDispatchJobRestore', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDispatchJobRestore();
		expect(payload).toBeInstanceOf(PayDispatchJobRestore);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			job: {
				id: 777
			},
			reqId: 3
		};
		const payload = new PayDispatchJobRestore(json);
		expect(payload.job.id).toBe(777);
		expect(payload.reqId).toBe(3);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			job: {
				id: 777
			},
			reqId: 3
		};
		const payload = new PayDispatchJobRestore(json);
		const output = payload.toJSON();
		expect(output.job).toBeDefined();
		expect(output.job.id).toBe(777);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDispatchJobRestore();
		expect(payload.action()).toBe("DispatchJob.Restore");
		expect(payload.actionShort()).toBe("DispatchJobRestore");
		expect(payload.actionNormalized()).toBe("dispatch_job_restore");
	});
});
