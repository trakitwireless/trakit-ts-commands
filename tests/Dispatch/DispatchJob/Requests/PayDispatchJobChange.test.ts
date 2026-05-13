import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../src/API/Requests/Payload";
import { PayDispatchJobChange } from "../../../../src/Dispatch/DispatchJob/Requests/PayDispatchJobChange";

describe('PayDispatchJobChange', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDispatchJobChange();
		expect(payload).toBeInstanceOf(PayDispatchJobChange);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			job: {
				id: 777
			},
			reqId: 3
		};
		const payload = new PayDispatchJobChange(json);
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
		const payload = new PayDispatchJobChange(json);
		const output = payload.toJSON();
		expect(output.job).toBeDefined();
		expect(output.job.id).toBe(777);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDispatchJobChange();
		expect(payload.action()).toBe("DispatchJob.Change");
		expect(payload.actionShort()).toBe("DispatchJobChange");
		expect(payload.actionNormalized()).toBe("dispatch_job_change");
	});
});
