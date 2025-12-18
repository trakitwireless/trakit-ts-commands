import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../../commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayBehaviourScriptBatchDelete } from "../../../../commands/Behaviours/Scripts/Requests/PayBehaviourScriptBatchDelete";
import { RepBehaviourScriptBatchDelete } from "../../../../commands/Behaviours/Scripts/Responses/RepBehaviourScriptBatchDelete";

describe('PayBehaviourScriptBatchDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayBehaviourScriptBatchDelete();
		expect(payload).toBeInstanceOf(PayBehaviourScriptBatchDelete);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.behaviourScripts).toEqual([]);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			behaviourScripts: [
				{ id: 111 },
				{ id: 222 },
				{ id: 333 }
			],
			reqId: 5
		};
		const payload = new PayBehaviourScriptBatchDelete(json);
		expect(payload.behaviourScripts).toHaveLength(3);
		expect(payload.behaviourScripts[0]).toBeInstanceOf(ParamId);
		expect(payload.behaviourScripts[0].id).toBe(111);
		expect(payload.behaviourScripts[1].id).toBe(222);
		expect(payload.behaviourScripts[2].id).toBe(333);
		expect(payload.reqId).toBe(5);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayBehaviourScriptBatchDelete();
		const replyJson: JsonObject = { behaviourScripts: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepBehaviourScriptBatchDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviourScripts: [
				{ id: 111 },
				{ id: 222 },
				{ id: 333 }
			],
			reqId: 5
		};
		const payload = new PayBehaviourScriptBatchDelete(json);
		const output = payload.toJSON();
		expect(output.behaviourScripts).toBeDefined();
		expect(output.behaviourScripts).toHaveLength(3);
		expect(output.behaviourScripts[0].id).toBe(111);
		expect(output.behaviourScripts[1].id).toBe(222);
		expect(output.behaviourScripts[2].id).toBe(333);
		expect(output.reqId).toBe(5);
	});

	it('should return correct action metadata', () => {
		const payload = new PayBehaviourScriptBatchDelete();
		expect(payload.action()).toBe("BehaviourScript.BatchDelete");
		expect(payload.actionShort()).toBe("BehaviourScriptBatchDelete");
		expect(payload.actionNormalized()).toBe("behaviour_script_batch_delete");
	});
});
