import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../src/API/Requests/Payload";
import { PayBehaviour } from "../../../../src/Behaviours/Behaviours/Requests/PayBehaviour";
import { PayBehaviourRestore } from "../../../../src/Behaviours/Behaviours/Requests/PayBehaviourRestore";
import { RepBehaviourGet } from "../../../../src/Behaviours/Behaviours/Responses/RepBehaviourGet";

describe('PayBehaviourRestore', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayBehaviourRestore();
		expect(payload).toBeInstanceOf(PayBehaviourRestore);
		expect(payload).toBeInstanceOf(PayBehaviour);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			behaviour: {
				id: 666
			},
			reqId: 7
		};
		const payload = new PayBehaviourRestore(json);
		expect(payload.behaviour.id).toBe(666);
		expect(payload.reqId).toBe(7);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayBehaviourRestore();
		const replyJson: JsonObject = { behaviour: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepBehaviourGet);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviour: {
				id: 666
			},
			reqId: 7
		};
		const payload = new PayBehaviourRestore(json);
		const output = payload.toJSON();
		expect(output.behaviour).toBeDefined();
		expect(output.behaviour.id).toBe(666);
		expect(output.reqId).toBe(7);
	});

	it('should return correct action metadata', () => {
		const payload = new PayBehaviourRestore();
		expect(payload.action()).toBe("Behaviour.Restore");
		expect(payload.actionShort()).toBe("BehaviourRestore");
		expect(payload.actionNormalized()).toBe("behaviour_restore");
	});
});
