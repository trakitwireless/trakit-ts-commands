import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentIdCompany } from "../../../../src/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../../src/API/Responses/Reply";
import { RepBehaviourBatchMerge } from "../../../../src/Behaviours/Behaviours/Responses/RepBehaviourBatchMerge";

describe('RepBehaviourBatchMerge', () => {
	it('should create instance with behaviours data', () => {
		const json: JsonObject = {
			behaviours: [
				{ id: 111, company: 100 },
				{ id: 222, company: 100 },
				{ id: 333, company: 100 }
			]
		};
		const reply = new RepBehaviourBatchMerge(json);
		expect(reply).toBeInstanceOf(RepBehaviourBatchMerge);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.behaviours).toHaveLength(3);
		expect(reply.behaviours[0]).toBeInstanceOf(ContentIdCompany);
		expect(reply.behaviours[0].id).toBe(111);
		expect(reply.behaviours[1].id).toBe(222);
		expect(reply.behaviours[2].id).toBe(333);
	});

	it('should handle empty behaviours list', () => {
		const json: JsonObject = {
			behaviours: []
		};
		const reply = new RepBehaviourBatchMerge(json);
		expect(reply.behaviours).toEqual([]);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviours: [
				{ id: 111, company: 100 },
				{ id: 222, company: 100 }
			]
		};
		const reply = new RepBehaviourBatchMerge(json);
		const output = reply.toJSON();
		expect(output.behaviours).toBeDefined();
		expect(output.behaviours).toHaveLength(2);
	});
});
