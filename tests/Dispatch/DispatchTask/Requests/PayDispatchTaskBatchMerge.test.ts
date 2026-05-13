import { DispatchTask, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../src/API/Requests/Payload";
import { PayDispatchTaskBatchMerge } from "../../../../src/Dispatch/DispatchTask/Requests/PayDispatchTaskBatchMerge";
import { RepDispatchTaskBatchMerge } from "../../../../src/Dispatch/DispatchTask/Responses/RepDispatchTaskBatchMerge";

describe('PayDispatchTaskBatchMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDispatchTaskBatchMerge();
		expect(payload).toBeInstanceOf(PayDispatchTaskBatchMerge);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			tasks: [
				{ id: 777, name: "Task One" },
				{ id: 888, name: "Task Two" }
			],
			reqId: 3
		};
		const payload = new PayDispatchTaskBatchMerge(json);
		expect(payload.tasks).toHaveLength(2);
		expect(payload.tasks[0].id).toBe(777);
		expect(payload.tasks[1].id).toBe(888);
		expect(payload.reqId).toBe(3);
	});

	it('should handle getKey method', () => {
		const payload = new PayDispatchTaskBatchMerge();
		const task = new DispatchTask({ id: 789, name: "Key Test" });
		const key = payload.getKey(task);
		expect(key).toBe(789);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayDispatchTaskBatchMerge();
		const replyJson: JsonObject = { tasks: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepDispatchTaskBatchMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			tasks: [
				{ id: 777, name: "Task One" },
				{ id: 888, name: "Task Two" }
			],
			reqId: 3
		};
		const payload = new PayDispatchTaskBatchMerge(json);
		const output = payload.toJSON();
		expect(output.tasks).toBeDefined();
		expect(output.tasks).toHaveLength(2);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDispatchTaskBatchMerge();
		expect(payload.action()).toBe("DispatchTask.BatchMerge");
		expect(payload.actionShort()).toBe("DispatchTaskBatchMerge");
		expect(payload.actionNormalized()).toBe("dispatch_task_batch_merge");
	});
});
