import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../src/API/Requests/Payload";
import { PayDispatchTaskListAll } from "../../../../src/Dispatch/DispatchTask/Requests/PayDispatchTaskList";
import { RepDispatchTaskListAll } from "../../../../src/Dispatch/DispatchTask/Responses/RepDispatchTaskList";

describe('PayDispatchTaskListAll', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDispatchTaskListAll();
		expect(payload).toBeInstanceOf(PayDispatchTaskListAll);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayDispatchTaskListAll(json);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(4);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			includeDeleted: false
		};
		const payload = new PayDispatchTaskListAll(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayDispatchTaskListAll();
		const replyJson: JsonObject = { tasks: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepDispatchTaskListAll);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayDispatchTaskListAll(json);
		const output = payload.toJSON();
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(4);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDispatchTaskListAll();
		expect(payload.action()).toBe("DispatchTask.List");
		expect(payload.actionShort()).toBe("DispatchTaskList");
		expect(payload.actionNormalized()).toBe("dispatch_task_list");
	});
});
