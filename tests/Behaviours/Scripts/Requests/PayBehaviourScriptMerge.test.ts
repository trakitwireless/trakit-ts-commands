import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { ParamBehaviourScriptMerge } from "../../../../commands/Behaviours/Scripts/Requests/Parameters/ParamBehaviourScriptMerge";
import { PayBehaviourScriptMerge } from "../../../../commands/Behaviours/Scripts/Requests/PayBehaviourScriptMerge";
import { RepBehaviourScriptMerge } from "../../../../commands/Behaviours/Scripts/Responses/RepBehaviourScriptMerge";

describe('PayBehaviourScriptMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayBehaviourScriptMerge();
		expect(payload).toBeInstanceOf(PayBehaviourScriptMerge);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.behaviourScript).toBeInstanceOf(ParamBehaviourScriptMerge);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			behaviourScript: {
				company: 100,
				name: "Test BehaviourScript"
			},
			reqId: 6
		};
		const payload = new PayBehaviourScriptMerge(json);
		expect(payload.behaviourScript).toBeInstanceOf(ParamBehaviourScriptMerge);
		expect(payload.behaviourScript.name).toBe("Test BehaviourScript");
		expect(payload.behaviourScript.company).toBe(100);
		expect(payload.reqId).toBe(6);
	});

	it('should implement getKey method', () => {
		const json: JsonObject = {
			behaviourScript: {
				id: 444,
				name: "BehaviourScript"
			}
		};
		const payload = new PayBehaviourScriptMerge(json);
		expect(payload.getKey()).toBe("444");
	});

	it('should return empty string from getKey when id is not set', () => {
		const payload = new PayBehaviourScriptMerge();
		expect(payload.getKey()).toBe("");
	});

	it('should create reply with createReply method', () => {
		const payload = new PayBehaviourScriptMerge();
		const replyJson: JsonObject = { behaviourScript: { id: 123, company: 100 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepBehaviourScriptMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviourScript: {
				company: 100,
				name: "Test BehaviourScript"
			},
			reqId: 6
		};
		const payload = new PayBehaviourScriptMerge(json);
		const output = payload.toJSON();
		expect(output.behaviourScript).toBeDefined();
		expect(output.behaviourScript.company).toBe(100);
		expect(output.behaviourScript.name).toBe("Test BehaviourScript");
		expect(output.reqId).toBe(6);
	});

	it('should return correct action metadata', () => {
		const payload = new PayBehaviourScriptMerge();
		expect(payload.action()).toBe("BehaviourScript.Merge");
		expect(payload.actionShort()).toBe("BehaviourScriptMerge");
		expect(payload.actionNormalized()).toBe("behaviour_script_merge");
	});

	it('should handle behaviourScript for update operation', () => {
		const json: JsonObject = {
			behaviourScript: {
				id: 555,
				company: 200,
				name: "Updated BehaviourScript"
			}
		};
		const payload = new PayBehaviourScriptMerge(json);
		expect(payload.behaviourScript.id).toBe(555);
		expect(payload.behaviourScript.name).toBe("Updated BehaviourScript");
	});
});
