import { DispatchTask, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepDispatchTaskListAll } from "../../../../commands/Dispatch/DispatchTask/Responses/RepDispatchTaskList";

describe('RepDispatchTaskListAll', () => {
	it('should create instance with empty constructor', () => {
		const reply = new RepDispatchTaskListAll();
		expect(reply).toBeInstanceOf(RepDispatchTaskListAll);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			tasks: [
				{ id: 777, name: "Task One" },
				{ id: 888, name: "Task Two" }
			],
			reqId: 3
		};
		const reply = new RepDispatchTaskListAll(json);
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
		const reply = new RepDispatchTaskListAll(json);
		const output = reply.toJSON();
		expect(output.tasks).toBeDefined();
		expect(output.tasks).toHaveLength(2);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const reply = new RepDispatchTaskListAll();
		expect(reply.action()).toBe("DispatchTask.List");
		expect(reply.actionShort()).toBe("DispatchTaskList");
		expect(reply.actionNormalized()).toBe("dispatch_task_list");
	});
});
