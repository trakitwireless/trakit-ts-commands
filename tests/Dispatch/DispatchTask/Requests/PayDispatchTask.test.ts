import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayDispatchTask } from "../../../../commands/Dispatch/DispatchTask/Requests/PayDispatchTask";

describe('PayDispatchTask', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDispatchTask();
		expect(payload).toBeInstanceOf(PayDispatchTask);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			task: {
				id: 777
			},
			reqId: 3
		};
		const payload = new PayDispatchTask(json);
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
		const payload = new PayDispatchTask(json);
		const output = payload.toJSON();
		expect(output.task).toBeDefined();
		expect(output.task.id).toBe(777);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDispatchTask();
		expect(payload.action()).toBe("DispatchTask.Dispatch");
		expect(payload.actionShort()).toBe("DispatchTask");
		expect(payload.actionNormalized()).toBe("dispatch_task");
	});
});
