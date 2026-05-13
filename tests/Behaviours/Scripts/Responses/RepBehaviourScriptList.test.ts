import { BehaviourScript, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Reply } from "../../../../src/API/Responses/Reply";
import { RepBehaviourScriptListByCompany } from "../../../../src/Behaviours/Scripts/Responses/RepBehaviourScriptList";

describe('RepBehaviourScriptListByCompany', () => {
	it('should create instance with behaviourScripts data', () => {
		const json: JsonObject = {
			behaviourScripts: [
				{ id: 111, companyId: 100, name: "BehaviourScript 1" },
				{ id: 222, companyId: 100, name: "BehaviourScript 2" }
			],
			company: { id: 100 }
		};
		const reply = new RepBehaviourScriptListByCompany(json);
		expect(reply).toBeInstanceOf(RepBehaviourScriptListByCompany);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.behaviourScripts).toHaveLength(2);
		expect(reply.behaviourScripts[0]).toBeInstanceOf(BehaviourScript);
		expect(reply.behaviourScripts[0].id).toBe(111);
		expect(reply.behaviourScripts[1].id).toBe(222);
	});

	it('should handle empty behaviourScripts list', () => {
		const json: JsonObject = {
			behaviourScripts: [],
			company: { id: 100 }
		};
		const reply = new RepBehaviourScriptListByCompany(json);
		expect(reply.behaviourScripts).toEqual([]);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviourScripts: [
				{ id: 111, companyId: 100, name: "BehaviourScript 1" }
			],
			company: { id: 100 }
		};
		const reply = new RepBehaviourScriptListByCompany(json);
		const output = reply.toJSON();
		expect(output.behaviourScripts).toBeDefined();
		expect(output.behaviourScripts).toHaveLength(1);
	});
});
