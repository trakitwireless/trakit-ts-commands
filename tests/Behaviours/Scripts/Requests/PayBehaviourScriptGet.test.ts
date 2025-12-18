import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayBehaviourScriptGet } from "../../../../commands/Behaviours/Scripts/Requests/PayBehaviourScriptGet";
import { RepBehaviourScriptGet } from "../../../../commands/Behaviours/Scripts/Responses/RepBehaviourScriptGet";

describe('PayBehaviourScriptGet', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayBehaviourScriptGet();
		expect(payload).toBeInstanceOf(PayBehaviourScriptGet);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			behaviourScript: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayBehaviourScriptGet(json);
		expect(payload.behaviourScript.id).toBe(777);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(3);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			behaviourScript: { id: 888 },
			includeDeleted: false
		};
		const payload = new PayBehaviourScriptGet(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayBehaviourScriptGet();
		const replyJson: JsonObject = { behaviourScript: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepBehaviourScriptGet);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviourScript: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayBehaviourScriptGet(json);
		const output = payload.toJSON();
		expect(output.behaviourScript).toBeDefined();
		expect(output.behaviourScript.id).toBe(777);
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayBehaviourScriptGet();
		expect(payload.action()).toBe("BehaviourScript.Get");
		expect(payload.actionShort()).toBe("BehaviourScriptGet");
		expect(payload.actionNormalized()).toBe("behaviour_script_get");
	});
});
