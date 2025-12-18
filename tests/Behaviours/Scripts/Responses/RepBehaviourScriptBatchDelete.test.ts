import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentId } from "../../../../commands/API/Responses/Content/ContentId";
import { Reply } from "../../../../commands/API/Responses/Reply";
import { RepBehaviourScriptBatchDelete } from "../../../../commands/Behaviours/Scripts/Responses/RepBehaviourScriptBatchDelete";

describe('RepBehaviourScriptBatchDelete', () => {
	it('should create instance with behaviourScripts data', () => {
		const json: JsonObject = {
			behaviourScripts: [
				{ id: 111 },
				{ id: 222 },
				{ id: 333 }
			]
		};
		const reply = new RepBehaviourScriptBatchDelete(json);
		expect(reply).toBeInstanceOf(RepBehaviourScriptBatchDelete);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.behaviourScripts).toHaveLength(3);
		expect(reply.behaviourScripts[0]).toBeInstanceOf(ContentId);
		expect(reply.behaviourScripts[0].id).toBe(111);
		expect(reply.behaviourScripts[1].id).toBe(222);
		expect(reply.behaviourScripts[2].id).toBe(333);
	});

	it('should handle empty behaviourScripts list', () => {
		const json: JsonObject = {
			behaviourScripts: []
		};
		const reply = new RepBehaviourScriptBatchDelete(json);
		expect(reply.behaviourScripts).toEqual([]);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviourScripts: [
				{ id: 111 },
				{ id: 222 }
			]
		};
		const reply = new RepBehaviourScriptBatchDelete(json);
		const output = reply.toJSON();
		expect(output.behaviourScripts).toBeDefined();
		expect(output.behaviourScripts).toHaveLength(2);
	});
});
