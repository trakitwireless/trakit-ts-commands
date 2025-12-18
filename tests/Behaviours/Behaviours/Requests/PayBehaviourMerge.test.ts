import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { ParamBehaviourMerge } from "../../../../commands/Behaviours/Behaviours/Requests/Parameters/ParamBehaviourMerge";
import { PayBehaviourMerge } from "../../../../commands/Behaviours/Behaviours/Requests/PayBehaviourMerge";
import { RepBehaviourMerge } from "../../../../commands/Behaviours/Behaviours/Responses/RepBehaviourMerge";

describe('PayBehaviourMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayBehaviourMerge();
		expect(payload).toBeInstanceOf(PayBehaviourMerge);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.behaviour).toBeInstanceOf(ParamBehaviourMerge);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			behaviour: {
				company: 100,
				name: "Test Behaviour",
				kind: 1
			},
			reqId: 6
		};
		const payload = new PayBehaviourMerge(json);
		expect(payload.behaviour).toBeInstanceOf(ParamBehaviourMerge);
		expect(payload.behaviour.name).toBe("Test Behaviour");
		expect(payload.behaviour.company).toBe(100);
		expect(payload.reqId).toBe(6);
	});

	it('should implement getKey method', () => {
		const json: JsonObject = {
			behaviour: {
				id: 444,
				name: "Behaviour"
			}
		};
		const payload = new PayBehaviourMerge(json);
		expect(payload.getKey()).toBe("444");
	});

	it('should return empty string from getKey when id is not set', () => {
		const payload = new PayBehaviourMerge();
		expect(payload.getKey()).toBe("");
	});

	it('should create reply with createReply method', () => {
		const payload = new PayBehaviourMerge();
		const replyJson: JsonObject = { behaviour: { id: 123, company: 100 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepBehaviourMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviour: {
				company: 100,
				name: "Test Behaviour",
				kind: 1
			},
			reqId: 6
		};
		const payload = new PayBehaviourMerge(json);
		const output = payload.toJSON();
		expect(output.behaviour).toBeDefined();
		expect(output.behaviour.company).toBe(100);
		expect(output.behaviour.name).toBe("Test Behaviour");
		expect(output.reqId).toBe(6);
	});

	it('should return correct action metadata', () => {
		const payload = new PayBehaviourMerge();
		expect(payload.action()).toBe("Behaviour.Merge");
		expect(payload.actionShort()).toBe("BehaviourMerge");
		expect(payload.actionNormalized()).toBe("behaviour_merge");
	});

	it('should handle behaviour for update operation', () => {
		const json: JsonObject = {
			behaviour: {
				id: 555,
				company: 200,
				name: "Updated Behaviour"
			}
		};
		const payload = new PayBehaviourMerge(json);
		expect(payload.behaviour.id).toBe(555);
		expect(payload.behaviour.name).toBe("Updated Behaviour");
	});
});
