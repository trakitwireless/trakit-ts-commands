import { DispatchTask, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayDispatchTaskMerge } from "../../../../commands/Dispatch/DispatchTask/Requests/PayDispatchTaskMerge";
import { RepDispatchTaskMerge } from "../../../../commands/Dispatch/DispatchTask/Responses/RepDispatchTaskMerge";

describe('PayDispatchTaskMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDispatchTaskMerge();
		expect(payload).toBeInstanceOf(PayDispatchTaskMerge);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			task: {
				id: 789,
				name: "Test Task"
			},
			reqId: 3
		};
		const payload = new PayDispatchTaskMerge(json);
		expect(payload.task.id).toBe(789);
		expect(payload.task.name).toBe("Test Task");
		expect(payload.reqId).toBe(3);
	});

	it('should handle getKey method', () => {
		const payload = new PayDispatchTaskMerge();
		const task = new DispatchTask({ id: 789, name: "Key Test" });
		const key = payload.getKey(task);
		expect(key).toBe(789);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayDispatchTaskMerge();
		const replyJson: JsonObject = { task: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepDispatchTaskMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			task: {
				id: 789,
				name: "Test Task"
			},
			reqId: 3
		};
		const payload = new PayDispatchTaskMerge(json);
		const output = payload.toJSON();
		expect(output.task).toBeDefined();
		expect(output.task.id).toBe(789);
		expect(output.task.name).toBe("Test Task");
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDispatchTaskMerge();
		expect(payload.action()).toBe("DispatchTask.Merge");
		expect(payload.actionShort()).toBe("DispatchTaskMerge");
		expect(payload.actionNormalized()).toBe("dispatch_task_merge");
	});
});
