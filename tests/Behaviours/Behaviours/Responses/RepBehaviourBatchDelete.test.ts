import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentId } from "../../../../src/API/Responses/Content/ContentId";
import { Reply } from "../../../../src/API/Responses/Reply";
import { RepBehaviourBatchDelete } from "../../../../src/Behaviours/Behaviours/Responses/RepBehaviourBatchDelete";

describe('RepBehaviourBatchDelete', () => {
	it('should create instance with behaviours data', () => {
		const json: JsonObject = {
			behaviours: [
				{ id: 111 },
				{ id: 222 },
				{ id: 333 }
			]
		};
		const reply = new RepBehaviourBatchDelete(json);
		expect(reply).toBeInstanceOf(RepBehaviourBatchDelete);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.behaviours).toHaveLength(3);
		expect(reply.behaviours[0]).toBeInstanceOf(ContentId);
		expect(reply.behaviours[0].id).toBe(111);
		expect(reply.behaviours[1].id).toBe(222);
		expect(reply.behaviours[2].id).toBe(333);
	});

	it('should handle empty behaviours list', () => {
		const json: JsonObject = {
			behaviours: []
		};
		const reply = new RepBehaviourBatchDelete(json);
		expect(reply.behaviours).toEqual([]);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviours: [
				{ id: 111 },
				{ id: 222 }
			]
		};
		const reply = new RepBehaviourBatchDelete(json);
		const output = reply.toJSON();
		expect(output.behaviours).toBeDefined();
		expect(output.behaviours).toHaveLength(2);
	});
});
