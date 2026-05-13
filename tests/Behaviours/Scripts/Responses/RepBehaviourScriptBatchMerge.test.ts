import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentIdCompany } from "../../../../src/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../../src/API/Responses/Reply";
import { RepBehaviourScriptBatchMerge } from "../../../../src/Behaviours/Scripts/Responses/RepBehaviourScriptBatchMerge";

describe('RepBehaviourScriptBatchMerge', () => {
	it('should create instance with behaviourScripts data', () => {
		const json: JsonObject = {
			behaviourScripts: [
				{ id: 111, company: 100 },
				{ id: 222, company: 100 },
				{ id: 333, company: 100 }
			]
		};
		const reply = new RepBehaviourScriptBatchMerge(json);
		expect(reply).toBeInstanceOf(RepBehaviourScriptBatchMerge);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.behaviourScripts).toHaveLength(3);
		expect(reply.behaviourScripts[0]).toBeInstanceOf(ContentIdCompany);
		expect(reply.behaviourScripts[0].id).toBe(111);
		expect(reply.behaviourScripts[1].id).toBe(222);
		expect(reply.behaviourScripts[2].id).toBe(333);
	});

	it('should handle empty behaviourScripts list', () => {
		const json: JsonObject = {
			behaviourScripts: []
		};
		const reply = new RepBehaviourScriptBatchMerge(json);
		expect(reply.behaviourScripts).toEqual([]);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviourScripts: [
				{ id: 111, company: 100 },
				{ id: 222, company: 100 }
			]
		};
		const reply = new RepBehaviourScriptBatchMerge(json);
		const output = reply.toJSON();
		expect(output.behaviourScripts).toBeDefined();
		expect(output.behaviourScripts).toHaveLength(2);
	});
});
