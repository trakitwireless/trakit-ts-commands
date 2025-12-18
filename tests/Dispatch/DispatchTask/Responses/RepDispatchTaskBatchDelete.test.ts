import { DispatchTask, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepDispatchTaskBatchDelete } from "../../../../commands/Dispatch/DispatchTask/Responses/RepDispatchTaskBatchDelete";

describe('RepDispatchTaskBatchDelete', () => {
	it('should create instance with empty constructor', () => {
		const reply = new RepDispatchTaskBatchDelete();
		expect(reply).toBeInstanceOf(RepDispatchTaskBatchDelete);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			tasks: [
				{ id: 777 },
				{ id: 888 }
			],
			reqId: 3
		};
		const reply = new RepDispatchTaskBatchDelete(json);
		expect(reply.tasks).toHaveLength(2);
		expect(reply.tasks[0]).toBeInstanceOf(DispatchTask);
		expect(reply.tasks[0].id).toBe(777);
		expect(reply.tasks[1].id).toBe(888);
		expect(reply.reqId).toBe(3);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			tasks: [
				{ id: 777 },
				{ id: 888 }
			],
			reqId: 3
		};
		const reply = new RepDispatchTaskBatchDelete(json);
		const output = reply.toJSON();
		expect(output.tasks).toBeDefined();
		expect(output.tasks).toHaveLength(2);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const reply = new RepDispatchTaskBatchDelete();
		expect(reply.action()).toBe("DispatchTask.BatchDelete");
		expect(reply.actionShort()).toBe("DispatchTaskBatchDelete");
		expect(reply.actionNormalized()).toBe("dispatch_task_batch_delete");
	});
});
