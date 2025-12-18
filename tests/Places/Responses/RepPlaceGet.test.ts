import { JsonObject, Place } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Reply } from "../../../commands/API/Responses/Reply";
import { RepPlaceGet } from "../../../commands/Places/Responses/RepPlaceGet";

describe('RepPlaceGet', () => {
	it('should create instance with place data', () => {
		const json: JsonObject = {
			place: {
				id: 555,
				companyId: 100,
				name: "Test Place",
				kind: 1
			}
		};
		const reply = new RepPlaceGet(json);
		expect(reply).toBeInstanceOf(RepPlaceGet);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.place).toBeInstanceOf(Place);
		expect(reply.place!.id).toBe(555);
		expect(reply.place!.companyId).toBe(100);
		expect(reply.place!.name).toBe("Test Place");
	});

	it('should handle missing place', () => {
		const json: JsonObject = {};
		const reply = new RepPlaceGet(json);
		expect(reply.place).toBeUndefined();
	});

	it('should implement getObject method', () => {
		const json: JsonObject = {
			place: {
				id: 777,
				companyId: 200,
				name: "Another Place"
			}
		};
		const reply = new RepPlaceGet(json);
		const obj = reply.getObject();
		expect(obj).toBeInstanceOf(Place);
		expect(obj.id).toBe(777);
	});

	it('should implement getCompanyId method', () => {
		const json: JsonObject = {
			place: {
				id: 888,
				companyId: 999,
				name: "Place"
			}
		};
		const reply = new RepPlaceGet(json);
		expect(reply.getCompanyId()).toBe(999);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			place: {
				id: 555,
				companyId: 100,
				name: "Test Place",
				kind: 1
			}
		};
		const reply = new RepPlaceGet(json);
		const output = reply.toJSON();
		expect(output.place).toBeDefined();
		expect(output.place.id).toBe(555);
		expect(output.place.companyId).toBe(100);
		expect(output.place.name).toBe("Test Place");
		expect(output.place.kind).toBe(1);
	});
});