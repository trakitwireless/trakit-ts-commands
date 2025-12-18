import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentId } from "../../../../commands/API/Responses/Content/ContentId";
import { Reply } from "../../../../commands/API/Responses/Reply";
import { RepBehaviourDelete } from "../../../../commands/Behaviours/Behaviours/Responses/RepBehaviourDelete";

describe('RepBehaviourDelete', () => {
	it('should create instance with behaviour data', () => {
		const json: JsonObject = {
			behaviour: {
				id: 555
			}
		};
		const reply = new RepBehaviourDelete(json);
		expect(reply).toBeInstanceOf(RepBehaviourDelete);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.behaviour).toBeInstanceOf(ContentId);
		expect(reply.behaviour!.id).toBe(555);
	});

	it('should handle missing behaviour', () => {
		const json: JsonObject = {};
		const reply = new RepBehaviourDelete(json);
		expect(reply.behaviour).toBeUndefined();
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviour: {
				id: 555
			}
		};
		const reply = new RepBehaviourDelete(json);
		const output = reply.toJSON();
		expect(output.behaviour).toBeDefined();
	});
});
