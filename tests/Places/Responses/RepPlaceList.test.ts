import { JsonObject, Place } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentId } from "../../../src/API/Responses/Content/ContentId";
import { Reply } from "../../../src/API/Responses/Reply";
import { RepPlaceListByCompany } from "../../../src/Places/Responses/RepPlaceList";

describe('RepPlaceListByCompany', () => {
	it('should create instance with empty places array', () => {
		const json: JsonObject = {
			places: [],
			company: { id: 100 }
		};
		const reply = new RepPlaceListByCompany(json);
		expect(reply).toBeInstanceOf(RepPlaceListByCompany);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.places).toEqual([]);
		expect(reply.company).toBeInstanceOf(ContentId);
	});

	it('should create instance with places data', () => {
		const json: JsonObject = {
			places: [
				{ id: 111, companyId: 100, name: "Place 1", kind: 1 },
				{ id: 222, companyId: 100, name: "Place 2", kind: 2 },
				{ id: 333, companyId: 100, name: "Place 3", kind: 1 }
			],
			company: { id: 100 }
		};
		const reply = new RepPlaceListByCompany(json);
		expect(reply.places).toHaveLength(3);
		expect(reply.places![0]).toBeInstanceOf(Place);
		expect(reply.places![0].id).toBe(111);
		expect(reply.places![0].name).toBe("Place 1");
		expect(reply.places![1].id).toBe(222);
		expect(reply.places![2].id).toBe(333);
	});

	it('should implement getList method', () => {
		const json: JsonObject = {
			places: [
				{ id: 111, companyId: 100, name: "Place 1" },
				{ id: 222, companyId: 100, name: "Place 2" }
			],
			company: { id: 100 }
		};
		const reply = new RepPlaceListByCompany(json);
		const list = reply.getList();
		expect(list).toHaveLength(2);
		expect(list![0]).toBeInstanceOf(Place);
	});

	it('should implement getCompanyId method', () => {
		const json: JsonObject = {
			places: [],
			company: { id: 999 }
		};
		const reply = new RepPlaceListByCompany(json);
		expect(reply.getCompanyId()).toBe(999);
	});

	it('should handle company ContentId', () => {
		const json: JsonObject = {
			places: [],
			company: { id: 777 }
		};
		const reply = new RepPlaceListByCompany(json);
		expect(reply.company).toBeInstanceOf(ContentId);
		expect(reply.company!.id).toBe(777);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			places: [
				{ id: 111, companyId: 100, name: "Place 1", kind: 1 },
				{ id: 222, companyId: 100, name: "Place 2", kind: 2 }
			],
			company: { id: 100 }
		};
		const reply = new RepPlaceListByCompany(json);
		const output = reply.toJSON();
		expect(output.places).toBeDefined();
		expect(output.places).toHaveLength(2);
		expect(output.places[0].id).toBe(111);
		expect(output.places[0].companyId).toBe(100);
		expect(output.places[0].name).toBe("Place 1");
		expect(output.places[1].id).toBe(222);
		expect(output.company).toBeDefined();
		expect(output.company.id).toBe(100);
	});
});