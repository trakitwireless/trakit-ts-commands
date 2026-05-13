import { DispatchTask, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepDispatchTaskBatchMerge } from "../../../../src/Dispatch/DispatchTask/Responses/RepDispatchTaskBatchMerge";

describe('RepDispatchTaskBatchMerge', () => {
	it('should create instance with empty constructor', () => {
		const reply = new RepDispatchTaskBatchMerge();
		expect(reply).toBeInstanceOf(RepDispatchTaskBatchMerge);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			tasks: [
				{ id: 777, name: "Task One" },
				{ id: 888, name: "Task Two" }
			],
			reqId: 3
		};
		const reply = new RepDispatchTaskBatchMerge(json);
		expect(reply.tasks).toHaveLength(2);
		expect(reply.tasks[0]).toBeInstanceOf(DispatchTask);
		expect(reply.tasks[0].id).toBe(777);
		expect(reply.tasks[1].id).toBe(888);
		expect(reply.reqId).toBe(3);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			tasks: [
				{ id: 777, name: "Task One" },
				{ id: 888, name: "Task Two" }
			],
			reqId: 3
		};
		const reply = new RepDispatchTaskBatchMerge(json);
		const output = reply.toJSON();
		expect(output.tasks).toBeDefined();
		expect(output.tasks).toHaveLength(2);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const reply = new RepDispatchTaskBatchMerge();
		expect(reply.action()).toBe("DispatchTask.BatchMerge");
		expect(reply.actionShort()).toBe("DispatchTaskBatchMerge");
		expect(reply.actionNormalized()).toBe("dispatch_task_batch_merge");
	});
});
