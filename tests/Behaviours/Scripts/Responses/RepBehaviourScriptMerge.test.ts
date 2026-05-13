import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentIdCompany } from "../../../../src/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../../src/API/Responses/Reply";
import { RepBehaviourScriptMerge } from "../../../../src/Behaviours/Scripts/Responses/RepBehaviourScriptMerge";

describe('RepBehaviourScriptMerge', () => {
	it('should create instance with behaviourScript data', () => {
		const json: JsonObject = {
			behaviourScript: {
				id: 555,
				company: 100
			}
		};
		const reply = new RepBehaviourScriptMerge(json);
		expect(reply).toBeInstanceOf(RepBehaviourScriptMerge);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.behaviourScript).toBeInstanceOf(ContentIdCompany);
		expect(reply.behaviourScript!.id).toBe(555);
		expect(reply.behaviourScript!.company).toBe(100);
	});

	it('should handle behaviourScript for create operation', () => {
		const json: JsonObject = {
			behaviourScript: {
				id: 999,
				company: 888
			}
		};
		const reply = new RepBehaviourScriptMerge(json);
		expect(reply.behaviourScript!.id).toBe(999);
		expect(reply.behaviourScript!.company).toBe(888);
	});

	it('should handle behaviourScript for update operation', () => {
		const json: JsonObject = {
			behaviourScript: {
				id: 123,
				company: 456
			}
		};
		const reply = new RepBehaviourScriptMerge(json);
		expect(reply.behaviourScript).toBeInstanceOf(ContentIdCompany);
		expect(reply.behaviourScript!.id).toBe(123);
		expect(reply.behaviourScript!.company).toBe(456);
	});

	it('should handle missing behaviourScript', () => {
		const json: JsonObject = {};
		const reply = new RepBehaviourScriptMerge(json);
		expect(reply.behaviourScript).toBeUndefined();
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviourScript: {
				id: 555,
				company: 100
			}
		};
		const reply = new RepBehaviourScriptMerge(json);
		const output = reply.toJSON();
		expect(output.behaviourScript).toBeDefined();
	});
});
