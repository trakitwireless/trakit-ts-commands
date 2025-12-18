import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayBehaviourScript } from "../../../../commands/Behaviours/Scripts/Requests/PayBehaviourScript";
import { PayBehaviourScriptRestore } from "../../../../commands/Behaviours/Scripts/Requests/PayBehaviourScriptRestore";
import { RepBehaviourScriptGet } from "../../../../commands/Behaviours/Scripts/Responses/RepBehaviourScriptGet";

describe('PayBehaviourScriptRestore', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayBehaviourScriptRestore();
		expect(payload).toBeInstanceOf(PayBehaviourScriptRestore);
		expect(payload).toBeInstanceOf(PayBehaviourScript);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			behaviourScript: {
				id: 666
			},
			reqId: 7
		};
		const payload = new PayBehaviourScriptRestore(json);
		expect(payload.behaviourScript.id).toBe(666);
		expect(payload.reqId).toBe(7);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayBehaviourScriptRestore();
		const replyJson: JsonObject = { behaviourScript: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepBehaviourScriptGet);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviourScript: {
				id: 666
			},
			reqId: 7
		};
		const payload = new PayBehaviourScriptRestore(json);
		const output = payload.toJSON();
		expect(output.behaviourScript).toBeDefined();
		expect(output.behaviourScript.id).toBe(666);
		expect(output.reqId).toBe(7);
	});

	it('should return correct action metadata', () => {
		const payload = new PayBehaviourScriptRestore();
		expect(payload.action()).toBe("BehaviourScript.Restore");
		expect(payload.actionShort()).toBe("BehaviourScriptRestore");
		expect(payload.actionNormalized()).toBe("behaviour_script_restore");
	});
});
