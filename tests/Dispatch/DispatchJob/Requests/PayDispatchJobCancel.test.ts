import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayDispatchJobCancel } from "../../../../commands/Dispatch/DispatchJob/Requests/PayDispatchJobCancel";

describe('PayDispatchJobCancel', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDispatchJobCancel();
		expect(payload).toBeInstanceOf(PayDispatchJobCancel);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			job: {
				id: 777
			},
			reqId: 3
		};
		const payload = new PayDispatchJobCancel(json);
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
		const payload = new PayDispatchJobCancel(json);
		const output = payload.toJSON();
		expect(output.job).toBeDefined();
		expect(output.job.id).toBe(777);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDispatchJobCancel();
		expect(payload.action()).toBe("DispatchJob.Cancel");
		expect(payload.actionShort()).toBe("DispatchJobCancel");
		expect(payload.actionNormalized()).toBe("dispatch_job_cancel");
	});
});
