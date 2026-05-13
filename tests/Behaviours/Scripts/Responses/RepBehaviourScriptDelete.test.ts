import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentId } from "../../../../src/API/Responses/Content/ContentId";
import { Reply } from "../../../../src/API/Responses/Reply";
import { RepBehaviourScriptDelete } from "../../../../src/Behaviours/Scripts/Responses/RepBehaviourScriptDelete";

describe('RepBehaviourScriptDelete', () => {
	it('should create instance with behaviourScript data', () => {
		const json: JsonObject = {
			behaviourScript: {
				id: 555
			}
		};
		const reply = new RepBehaviourScriptDelete(json);
		expect(reply).toBeInstanceOf(RepBehaviourScriptDelete);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.behaviourScript).toBeInstanceOf(ContentId);
		expect(reply.behaviourScript!.id).toBe(555);
	});

	it('should handle missing behaviourScript', () => {
		const json: JsonObject = {};
		const reply = new RepBehaviourScriptDelete(json);
		expect(reply.behaviourScript).toBeUndefined();
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviourScript: {
				id: 555
			}
		};
		const reply = new RepBehaviourScriptDelete(json);
		const output = reply.toJSON();
		expect(output.behaviourScript).toBeDefined();
	});
});
