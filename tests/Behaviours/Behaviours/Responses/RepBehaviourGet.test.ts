import { Behaviour, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Reply } from "../../../../src/API/Responses/Reply";
import { RepBehaviourGet } from "../../../../src/Behaviours/Behaviours/Responses/RepBehaviourGet";

describe('RepBehaviourGet', () => {
	it('should create instance with behaviour data', () => {
		const json: JsonObject = {
			behaviour: {
				id: 555,
				companyId: 100,
				name: "Test Behaviour",
				kind: 1
			}
		};
		const reply = new RepBehaviourGet(json);
		expect(reply).toBeInstanceOf(RepBehaviourGet);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.behaviour).toBeInstanceOf(Behaviour);
		expect(reply.behaviour!.id).toBe(555);
		expect(reply.behaviour!.companyId).toBe(100);
		expect(reply.behaviour!.name).toBe("Test Behaviour");
	});

	it('should handle missing behaviour', () => {
		const json: JsonObject = {};
		const reply = new RepBehaviourGet(json);
		expect(reply.behaviour).toBeUndefined();
	});

	it('should implement getObject method', () => {
		const json: JsonObject = {
			behaviour: {
				id: 777,
				companyId: 200,
				name: "Another Behaviour"
			}
		};
		const reply = new RepBehaviourGet(json);
		const obj = reply.getObject();
		expect(obj).toBeInstanceOf(Behaviour);
		expect(obj.id).toBe(777);
	});

	it('should implement getCompanyId method', () => {
		const json: JsonObject = {
			behaviour: {
				id: 888,
				companyId: 999,
				name: "Behaviour"
			}
		};
		const reply = new RepBehaviourGet(json);
		expect(reply.getCompanyId()).toBe(999);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviour: {
				id: 555,
				companyId: 100,
				name: "Test Behaviour"
			}
		};
		const reply = new RepBehaviourGet(json);
		const output = reply.toJSON();
		expect(output.behaviour).toBeDefined();
	});
});
