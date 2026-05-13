import { DispatchTask, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepDispatchTaskDelete } from "../../../../src/Dispatch/DispatchTask/Responses/RepDispatchTaskDelete";

describe('RepDispatchTaskDelete', () => {
	it('should create instance with empty constructor', () => {
		const reply = new RepDispatchTaskDelete();
		expect(reply).toBeInstanceOf(RepDispatchTaskDelete);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			task: {
				id: 777
			},
			reqId: 3
		};
		const reply = new RepDispatchTaskDelete(json);
		expect(reply.task).toBeInstanceOf(DispatchTask);
		expect(reply.task.id).toBe(777);
		expect(reply.reqId).toBe(3);
	});

	it('should get object with getObject method', () => {
		const json: JsonObject = {
			task: {
				id: 888
			}
		};
		const reply = new RepDispatchTaskDelete(json);
		const object = reply.getObject();
		expect(object).toBeInstanceOf(DispatchTask);
		expect(object.id).toBe(888);
	});

	it('should get company ID with getCompanyId method', () => {
		const json: JsonObject = {
			task: {
				id: 999,
				companyId: 123
			}
		};
		const reply = new RepDispatchTaskDelete(json);
		const companyId = reply.getCompanyId();
		expect(companyId).toBe(123);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			task: {
				id: 777
			},
			reqId: 3
		};
		const reply = new RepDispatchTaskDelete(json);
		const output = reply.toJSON();
		expect(output.task).toBeDefined();
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const reply = new RepDispatchTaskDelete();
		expect(reply.action()).toBe("DispatchTask.Delete");
		expect(reply.actionShort()).toBe("DispatchTaskDelete");
		expect(reply.actionNormalized()).toBe("dispatch_task_delete");
	});
});
