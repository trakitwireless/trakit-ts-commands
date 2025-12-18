import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayDispatchTaskBatchDelete } from "../../../../commands/Dispatch/DispatchTask/Requests/PayDispatchTaskBatchDelete";
import { RepDispatchTaskBatchDelete } from "../../../../commands/Dispatch/DispatchTask/Responses/RepDispatchTaskBatchDelete";

describe('PayDispatchTaskBatchDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDispatchTaskBatchDelete();
		expect(payload).toBeInstanceOf(PayDispatchTaskBatchDelete);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			tasks: [
				{ id: 777 },
				{ id: 888 }
			],
			reqId: 3
		};
		const payload = new PayDispatchTaskBatchDelete(json);
		expect(payload.tasks).toHaveLength(2);
		expect(payload.tasks[0].id).toBe(777);
		expect(payload.tasks[1].id).toBe(888);
		expect(payload.reqId).toBe(3);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayDispatchTaskBatchDelete();
		const replyJson: JsonObject = { tasks: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepDispatchTaskBatchDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			tasks: [
				{ id: 777 },
				{ id: 888 }
			],
			reqId: 3
		};
		const payload = new PayDispatchTaskBatchDelete(json);
		const output = payload.toJSON();
		expect(output.tasks).toBeDefined();
		expect(output.tasks).toHaveLength(2);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDispatchTaskBatchDelete();
		expect(payload.action()).toBe("DispatchTask.BatchDelete");
		expect(payload.actionShort()).toBe("DispatchTaskBatchDelete");
		expect(payload.actionNormalized()).toBe("dispatch_task_batch_delete");
	});
});
