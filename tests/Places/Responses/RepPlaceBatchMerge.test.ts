import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepPlaceBatchMerge } from "../../../src/Places/Responses/RepPlaceBatchMerge";
import { ContentIdCompany } from "../../../src/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../src/API/Responses/Reply";

describe('RepPlaceBatchMerge', () => {
	it('should create instance with empty places array', () => {
		const json: JsonObject = {
			places: []
		};
		const reply = new RepPlaceBatchMerge(json);
		expect(reply).toBeInstanceOf(RepPlaceBatchMerge);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.places).toEqual([]);
	});

	it('should create instance with places data', () => {
		const json: JsonObject = {
			places: [
				{ id: 111, company: 100 },
				{ id: 222, company: 100 },
				{ id: 333, company: 200 }
			]
		};
		const reply = new RepPlaceBatchMerge(json);
		expect(reply.places).toHaveLength(3);
		expect(reply.places![0]).toBeInstanceOf(ContentIdCompany);
		expect(reply.places![0].id).toBe(111);
		expect(reply.places![0].company).toBe(100);
		expect(reply.places![1].id).toBe(222);
		expect(reply.places![2].company).toBe(200);
	});

	it('should handle single place result', () => {
		const json: JsonObject = {
			places: [
				{ id: 999, company: 888 }
			]
		};
		const reply = new RepPlaceBatchMerge(json);
		expect(reply.places).toHaveLength(1);
		expect(reply.places![0].id).toBe(999);
		expect(reply.places![0].company).toBe(888);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			places: [
				{ id: 111, company: 100 },
				{ id: 222, company: 100 },
				{ id: 333, company: 200 }
			]
		};
		const reply = new RepPlaceBatchMerge(json);
		const output = reply.toJSON();
		expect(output.places).toBeDefined();
		expect(output.places).toHaveLength(3);
		expect(output.places[0].id).toBe(111);
		expect(output.places[0].company).toBe(100);
		expect(output.places[1].id).toBe(222);
		expect(output.places[1].company).toBe(100);
		expect(output.places[2].id).toBe(333);
		expect(output.places[2].company).toBe(200);
	});
});