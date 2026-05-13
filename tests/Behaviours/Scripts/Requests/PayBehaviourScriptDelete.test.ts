import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../src/API/Requests/Payload";
import { PayBehaviourScript } from "../../../../src/Behaviours/Scripts/Requests/PayBehaviourScript";
import { PayBehaviourScriptDelete } from "../../../../src/Behaviours/Scripts/Requests/PayBehaviourScriptDelete";
import { RepBehaviourScriptDelete } from "../../../../src/Behaviours/Scripts/Responses/RepBehaviourScriptDelete";

describe('PayBehaviourScriptDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayBehaviourScriptDelete();
		expect(payload).toBeInstanceOf(PayBehaviourScriptDelete);
		expect(payload).toBeInstanceOf(PayBehaviourScript);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			behaviourScript: {
				id: 555
			},
			reqId: 2
		};
		const payload = new PayBehaviourScriptDelete(json);
		expect(payload.behaviourScript.id).toBe(555);
		expect(payload.reqId).toBe(2);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayBehaviourScriptDelete();
		const replyJson: JsonObject = { behaviourScript: { id: 123 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepBehaviourScriptDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviourScript: {
				id: 555
			},
			reqId: 2
		};
		const payload = new PayBehaviourScriptDelete(json);
		const output = payload.toJSON();
		expect(output.behaviourScript).toBeDefined();
		expect(output.behaviourScript.id).toBe(555);
		expect(output.reqId).toBe(2);
	});

	it('should return correct action metadata', () => {
		const payload = new PayBehaviourScriptDelete();
		expect(payload.action()).toBe("BehaviourScript.Delete");
		expect(payload.actionShort()).toBe("BehaviourScriptDelete");
		expect(payload.actionNormalized()).toBe("behaviour_script_delete");
	});
});
