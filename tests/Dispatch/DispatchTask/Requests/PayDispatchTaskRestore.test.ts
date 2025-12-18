import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayDispatchTaskRestore } from "../../../../commands/Dispatch/DispatchTask/Requests/PayDispatchTaskRestore";

describe('PayDispatchTaskRestore', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDispatchTaskRestore();
		expect(payload).toBeInstanceOf(PayDispatchTaskRestore);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			task: {
				id: 777
			},
			reqId: 3
		};
		const payload = new PayDispatchTaskRestore(json);
		expect(payload.task.id).toBe(777);
		expect(payload.reqId).toBe(3);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			task: {
				id: 777
			},
			reqId: 3
		};
		const payload = new PayDispatchTaskRestore(json);
		const output = payload.toJSON();
		expect(output.task).toBeDefined();
		expect(output.task.id).toBe(777);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDispatchTaskRestore();
		expect(payload.action()).toBe("DispatchTask.Restore");
		expect(payload.actionShort()).toBe("DispatchTaskRestore");
		expect(payload.actionNormalized()).toBe("dispatch_task_restore");
	});
});
