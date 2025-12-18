import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayDispatchTaskDelete } from "../../../../commands/Dispatch/DispatchTask/Requests/PayDispatchTaskDelete";
import { RepDispatchTaskDelete } from "../../../../commands/Dispatch/DispatchTask/Responses/RepDispatchTaskDelete";

describe('PayDispatchTaskDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDispatchTaskDelete();
		expect(payload).toBeInstanceOf(PayDispatchTaskDelete);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			task: {
				id: 777
			},
			reqId: 3
		};
		const payload = new PayDispatchTaskDelete(json);
		expect(payload.task.id).toBe(777);
		expect(payload.reqId).toBe(3);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayDispatchTaskDelete();
		const replyJson: JsonObject = { task: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepDispatchTaskDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			task: {
				id: 777
			},
			reqId: 3
		};
		const payload = new PayDispatchTaskDelete(json);
		const output = payload.toJSON();
		expect(output.task).toBeDefined();
		expect(output.task.id).toBe(777);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDispatchTaskDelete();
		expect(payload.action()).toBe("DispatchTask.Delete");
		expect(payload.actionShort()).toBe("DispatchTaskDelete");
		expect(payload.actionNormalized()).toBe("dispatch_task_delete");
	});
});
