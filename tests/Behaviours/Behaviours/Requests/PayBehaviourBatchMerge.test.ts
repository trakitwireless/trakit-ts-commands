import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../src/API/Requests/Payload";
import { ParamBehaviourMerge } from "../../../../src/Behaviours/Behaviours/Requests/Parameters/ParamBehaviourMerge";
import { PayBehaviourBatchMerge } from "../../../../src/Behaviours/Behaviours/Requests/PayBehaviourBatchMerge";
import { RepBehaviourBatchMerge } from "../../../../src/Behaviours/Behaviours/Responses/RepBehaviourBatchMerge";

describe('PayBehaviourBatchMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayBehaviourBatchMerge();
		expect(payload).toBeInstanceOf(PayBehaviourBatchMerge);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.behaviours).toEqual([]);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			behaviours: [
				{ company: 100, name: "Behaviour 1" },
				{ company: 100, name: "Behaviour 2" },
				{ company: 100, name: "Behaviour 3" }
			],
			reqId: 8
		};
		const payload = new PayBehaviourBatchMerge(json);
		expect(payload.behaviours).toHaveLength(3);
		expect(payload.behaviours[0]).toBeInstanceOf(ParamBehaviourMerge);
		expect(payload.behaviours[0].name).toBe("Behaviour 1");
		expect(payload.behaviours[1].name).toBe("Behaviour 2");
		expect(payload.behaviours[2].name).toBe("Behaviour 3");
		expect(payload.reqId).toBe(8);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayBehaviourBatchMerge();
		const replyJson: JsonObject = { behaviours: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepBehaviourBatchMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviours: [
				{ company: 100, name: "Behaviour 1" },
				{ company: 100, name: "Behaviour 2" }
			],
			reqId: 8
		};
		const payload = new PayBehaviourBatchMerge(json);
		const output = payload.toJSON();
		expect(output.behaviours).toBeDefined();
		expect(output.behaviours).toHaveLength(2);
		expect(output.behaviours[0].name).toBe("Behaviour 1");
		expect(output.behaviours[1].name).toBe("Behaviour 2");
		expect(output.reqId).toBe(8);
	});

	it('should return correct action metadata', () => {
		const payload = new PayBehaviourBatchMerge();
		expect(payload.action()).toBe("Behaviour.BatchMerge");
		expect(payload.actionShort()).toBe("BehaviourBatchMerge");
		expect(payload.actionNormalized()).toBe("behaviour_batch_merge");
	});
});
