import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../src/API/Requests/Payload";
import { PayBehaviour } from "../../../../src/Behaviours/Behaviours/Requests/PayBehaviour";
import { PayBehaviourDelete } from "../../../../src/Behaviours/Behaviours/Requests/PayBehaviourDelete";
import { RepBehaviourDelete } from "../../../../src/Behaviours/Behaviours/Responses/RepBehaviourDelete";

describe('PayBehaviourDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayBehaviourDelete();
		expect(payload).toBeInstanceOf(PayBehaviourDelete);
		expect(payload).toBeInstanceOf(PayBehaviour);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			behaviour: {
				id: 555
			},
			reqId: 2
		};
		const payload = new PayBehaviourDelete(json);
		expect(payload.behaviour.id).toBe(555);
		expect(payload.reqId).toBe(2);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayBehaviourDelete();
		const replyJson: JsonObject = { behaviour: { id: 123 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepBehaviourDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviour: {
				id: 555
			},
			reqId: 2
		};
		const payload = new PayBehaviourDelete(json);
		const output = payload.toJSON();
		expect(output.behaviour).toBeDefined();
		expect(output.behaviour.id).toBe(555);
		expect(output.reqId).toBe(2);
	});

	it('should return correct action metadata', () => {
		const payload = new PayBehaviourDelete();
		expect(payload.action()).toBe("Behaviour.Delete");
		expect(payload.actionShort()).toBe("BehaviourDelete");
		expect(payload.actionNormalized()).toBe("behaviour_delete");
	});
});
