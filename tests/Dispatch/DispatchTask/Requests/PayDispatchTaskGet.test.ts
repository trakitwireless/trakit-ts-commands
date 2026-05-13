import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../src/API/Requests/Payload";
import { PayDispatchTaskGet } from "../../../../src/Dispatch/DispatchTask/Requests/PayDispatchTaskGet";
import { RepDispatchTaskGet } from "../../../../src/Dispatch/DispatchTask/Responses/RepDispatchTaskGet";

describe('PayDispatchTaskGet', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDispatchTaskGet();
		expect(payload).toBeInstanceOf(PayDispatchTaskGet);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			task: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayDispatchTaskGet(json);
		expect(payload.task.id).toBe(777);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(3);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			task: { id: 888 },
			includeDeleted: false
		};
		const payload = new PayDispatchTaskGet(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayDispatchTaskGet();
		const replyJson: JsonObject = { task: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepDispatchTaskGet);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			task: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayDispatchTaskGet(json);
		const output = payload.toJSON();
		expect(output.task).toBeDefined();
		expect(output.task.id).toBe(777);
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDispatchTaskGet();
		expect(payload.action()).toBe("DispatchTask.Get");
		expect(payload.actionShort()).toBe("DispatchTaskGet");
		expect(payload.actionNormalized()).toBe("dispatch_task_get");
	});
});
