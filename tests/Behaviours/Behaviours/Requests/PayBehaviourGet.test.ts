import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../src/API/Requests/Payload";
import { PayBehaviourGet } from "../../../../src/Behaviours/Behaviours/Requests/PayBehaviourGet";
import { RepBehaviourGet } from "../../../../src/Behaviours/Behaviours/Responses/RepBehaviourGet";

describe('PayBehaviourGet', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayBehaviourGet();
		expect(payload).toBeInstanceOf(PayBehaviourGet);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			behaviour: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayBehaviourGet(json);
		expect(payload.behaviour.id).toBe(777);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(3);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			behaviour: { id: 888 },
			includeDeleted: false
		};
		const payload = new PayBehaviourGet(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayBehaviourGet();
		const replyJson: JsonObject = { behaviour: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepBehaviourGet);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviour: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayBehaviourGet(json);
		const output = payload.toJSON();
		expect(output.behaviour).toBeDefined();
		expect(output.behaviour.id).toBe(777);
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayBehaviourGet();
		expect(payload.action()).toBe("Behaviour.Get");
		expect(payload.actionShort()).toBe("BehaviourGet");
		expect(payload.actionNormalized()).toBe("behaviour_get");
	});
});
