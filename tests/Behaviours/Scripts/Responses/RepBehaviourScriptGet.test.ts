import { BehaviourScript, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Reply } from "../../../../commands/API/Responses/Reply";
import { RepBehaviourScriptGet } from "../../../../commands/Behaviours/Scripts/Responses/RepBehaviourScriptGet";

describe('RepBehaviourScriptGet', () => {
	it('should create instance with behaviourScript data', () => {
		const json: JsonObject = {
			behaviourScript: {
				id: 555,
				companyId: 100,
				name: "Test BehaviourScript"
			}
		};
		const reply = new RepBehaviourScriptGet(json);
		expect(reply).toBeInstanceOf(RepBehaviourScriptGet);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.behaviourScript).toBeInstanceOf(BehaviourScript);
		expect(reply.behaviourScript!.id).toBe(555);
		expect(reply.behaviourScript!.companyId).toBe(100);
		expect(reply.behaviourScript!.name).toBe("Test BehaviourScript");
	});

	it('should handle missing behaviourScript', () => {
		const json: JsonObject = {};
		const reply = new RepBehaviourScriptGet(json);
		expect(reply.behaviourScript).toBeUndefined();
	});

	it('should implement getObject method', () => {
		const json: JsonObject = {
			behaviourScript: {
				id: 777,
				companyId: 200,
				name: "Another BehaviourScript"
			}
		};
		const reply = new RepBehaviourScriptGet(json);
		const obj = reply.getObject();
		expect(obj).toBeInstanceOf(BehaviourScript);
		expect(obj.id).toBe(777);
	});

	it('should implement getCompanyId method', () => {
		const json: JsonObject = {
			behaviourScript: {
				id: 888,
				companyId: 999,
				name: "BehaviourScript"
			}
		};
		const reply = new RepBehaviourScriptGet(json);
		expect(reply.getCompanyId()).toBe(999);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			behaviourScript: {
				id: 555,
				companyId: 100,
				name: "Test BehaviourScript"
			}
		};
		const reply = new RepBehaviourScriptGet(json);
		const output = reply.toJSON();
		expect(output.behaviourScript).toBeDefined();
	});
});
