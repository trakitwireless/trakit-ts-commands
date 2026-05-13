import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentIdCompany } from "../../../../src/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../../src/API/Responses/Reply";
import { RepBehaviourMerge } from "../../../../src/Behaviours/Behaviours/Responses/RepBehaviourMerge";

describe('RepBehaviourMerge', () => {
	it('should create instance with behaviour data', () => {
		const json: JsonObject = {
			behaviour: {
				id: 555,
				company: 100
			}
		};
		const reply = new RepBehaviourMerge(json);
		expect(reply).toBeInstanceOf(RepBehaviourMerge);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.behaviour).toBeInstanceOf(ContentIdCompany);
		expect(reply.behaviour!.id).toBe(555);
		expect(reply.behaviour!.company).toBe(100);
	});

	it('should handle behaviour for create operation', () => {
		const json: JsonObject = {
			behaviour: {
				id: 999,
				company: 888
			}
		};
		const reply = new RepBehaviourMerge(json);
		expect(reply.behaviour!.id).toBe(999);
		expect(reply.behaviour!.company).toBe(888);
	});

	it('should handle behaviour for update operation', () => {
		const json: JsonObject = {
			behaviour: {
				id: 123,
				company: 456
			}
		};
		const reply = new RepBehaviourMerge(json);
		expect(reply.behaviour).toBeInstanceOf(ContentIdCompany);
		expect(reply.behaviour!.id).toBe(123);
		expect(reply.behaviour!.company).toBe(456);
	});

	it('should handle missing behaviour', () => {
		const json: JsonObject = {};
		const reply = new RepBehaviourMerge(json);
		expect(reply.behaviour).toBeUndefined();
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviour: {
				id: 555,
				company: 100
			}
		};
		const reply = new RepBehaviourMerge(json);
		const output = reply.toJSON();
		expect(output.behaviour).toBeDefined();
	});
});
