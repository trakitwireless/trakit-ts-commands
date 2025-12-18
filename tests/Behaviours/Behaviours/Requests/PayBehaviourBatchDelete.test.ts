import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../../commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayBehaviourBatchDelete } from "../../../../commands/Behaviours/Behaviours/Requests/PayBehaviourBatchDelete";
import { RepBehaviourBatchDelete } from "../../../../commands/Behaviours/Behaviours/Responses/RepBehaviourBatchDelete";

describe('PayBehaviourBatchDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayBehaviourBatchDelete();
		expect(payload).toBeInstanceOf(PayBehaviourBatchDelete);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.behaviours).toEqual([]);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			behaviours: [
				{ id: 111 },
				{ id: 222 },
				{ id: 333 }
			],
			reqId: 5
		};
		const payload = new PayBehaviourBatchDelete(json);
		expect(payload.behaviours).toHaveLength(3);
		expect(payload.behaviours[0]).toBeInstanceOf(ParamId);
		expect(payload.behaviours[0].id).toBe(111);
		expect(payload.behaviours[1].id).toBe(222);
		expect(payload.behaviours[2].id).toBe(333);
		expect(payload.reqId).toBe(5);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayBehaviourBatchDelete();
		const replyJson: JsonObject = { behaviours: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepBehaviourBatchDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviours: [
				{ id: 111 },
				{ id: 222 },
				{ id: 333 }
			],
			reqId: 5
		};
		const payload = new PayBehaviourBatchDelete(json);
		const output = payload.toJSON();
		expect(output.behaviours).toBeDefined();
		expect(output.behaviours).toHaveLength(3);
		expect(output.behaviours[0].id).toBe(111);
		expect(output.behaviours[1].id).toBe(222);
		expect(output.behaviours[2].id).toBe(333);
		expect(output.reqId).toBe(5);
	});

	it('should return correct action metadata', () => {
		const payload = new PayBehaviourBatchDelete();
		expect(payload.action()).toBe("Behaviour.BatchDelete");
		expect(payload.actionShort()).toBe("BehaviourBatchDelete");
		expect(payload.actionNormalized()).toBe("behaviour_batch_delete");
	});
});
