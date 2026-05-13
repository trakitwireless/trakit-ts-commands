import { Behaviour, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Reply } from "../../../../src/API/Responses/Reply";
import { RepBehaviourListByCompany } from "../../../../src/Behaviours/Behaviours/Responses/RepBehaviourList";

describe('RepBehaviourListByCompany', () => {
	it('should create instance with behaviours data', () => {
		const json: JsonObject = {
			behaviours: [
				{ id: 111, companyId: 100, name: "Behaviour 1" },
				{ id: 222, companyId: 100, name: "Behaviour 2" }
			],
			company: { id: 100 }
		};
		const reply = new RepBehaviourListByCompany(json);
		expect(reply).toBeInstanceOf(RepBehaviourListByCompany);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.behaviours).toHaveLength(2);
		expect(reply.behaviours[0]).toBeInstanceOf(Behaviour);
		expect(reply.behaviours[0].id).toBe(111);
		expect(reply.behaviours[1].id).toBe(222);
	});

	it('should handle empty behaviours list', () => {
		const json: JsonObject = {
			behaviours: [],
			company: { id: 100 }
		};
		const reply = new RepBehaviourListByCompany(json);
		expect(reply.behaviours).toEqual([]);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviours: [
				{ id: 111, companyId: 100, name: "Behaviour 1" }
			],
			company: { id: 100 }
		};
		const reply = new RepBehaviourListByCompany(json);
		const output = reply.toJSON();
		expect(output.behaviours).toBeDefined();
		expect(output.behaviours).toHaveLength(1);
	});
});
