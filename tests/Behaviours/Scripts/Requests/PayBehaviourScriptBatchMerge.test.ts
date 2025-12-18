import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { ParamBehaviourScriptMerge } from "../../../../commands/Behaviours/Scripts/Requests/Parameters/ParamBehaviourScriptMerge";
import { PayBehaviourScriptBatchMerge } from "../../../../commands/Behaviours/Scripts/Requests/PayBehaviourScriptBatchMerge";
import { RepBehaviourScriptBatchMerge } from "../../../../commands/Behaviours/Scripts/Responses/RepBehaviourScriptBatchMerge";

describe('PayBehaviourScriptBatchMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayBehaviourScriptBatchMerge();
		expect(payload).toBeInstanceOf(PayBehaviourScriptBatchMerge);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.behaviourScripts).toEqual([]);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			behaviourScripts: [
				{ company: 100, name: "BehaviourScript 1" },
				{ company: 100, name: "BehaviourScript 2" },
				{ company: 100, name: "BehaviourScript 3" }
			],
			reqId: 8
		};
		const payload = new PayBehaviourScriptBatchMerge(json);
		expect(payload.behaviourScripts).toHaveLength(3);
		expect(payload.behaviourScripts[0]).toBeInstanceOf(ParamBehaviourScriptMerge);
		expect(payload.behaviourScripts[0].name).toBe("BehaviourScript 1");
		expect(payload.behaviourScripts[1].name).toBe("BehaviourScript 2");
		expect(payload.behaviourScripts[2].name).toBe("BehaviourScript 3");
		expect(payload.reqId).toBe(8);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayBehaviourScriptBatchMerge();
		const replyJson: JsonObject = { behaviourScripts: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepBehaviourScriptBatchMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviourScripts: [
				{ company: 100, name: "BehaviourScript 1" },
				{ company: 100, name: "BehaviourScript 2" }
			],
			reqId: 8
		};
		const payload = new PayBehaviourScriptBatchMerge(json);
		const output = payload.toJSON();
		expect(output.behaviourScripts).toBeDefined();
		expect(output.behaviourScripts).toHaveLength(2);
		expect(output.behaviourScripts[0].name).toBe("BehaviourScript 1");
		expect(output.behaviourScripts[1].name).toBe("BehaviourScript 2");
		expect(output.reqId).toBe(8);
	});

	it('should return correct action metadata', () => {
		const payload = new PayBehaviourScriptBatchMerge();
		expect(payload.action()).toBe("BehaviourScript.BatchMerge");
		expect(payload.actionShort()).toBe("BehaviourScriptBatchMerge");
		expect(payload.actionNormalized()).toBe("behaviour_script_batch_merge");
	});
});
