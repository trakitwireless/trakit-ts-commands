import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepPlaceBatchDelete } from "../../../src/Places/../../src/Places/Responses/RepPlaceBatchDelete";
import { ContentIdDeleted } from "../../../src/Places/../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../src/Places/../API/Responses/Reply";
import { ReplySyncBatchDelete } from "../../../src/Places/../API/Responses/ReplySyncBatchDelete";

describe('RepPlaceBatchDelete', () => {
	it('should create instance with empty places array', () => {
		const json: JsonObject = {
			places: []
		};
		const reply = new RepPlaceBatchDelete(json);
		expect(reply).toBeInstanceOf(RepPlaceBatchDelete);
		expect(reply).toBeInstanceOf(ReplySyncBatchDelete);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.places).toEqual([]);
	});

	it('should create instance with places data', () => {
		const json: JsonObject = {
			places: [
				{ id: 111, company: 100, deleted: true },
				{ id: 222, company: 100, deleted: true },
				{ id: 333, company: 100, deleted: false }
			]
		};
		const reply = new RepPlaceBatchDelete(json);
		expect(reply.places).toHaveLength(3);
		expect(reply.places![0]).toBeInstanceOf(ContentIdDeleted);
		expect(reply.places![0].id).toBe(111);
		expect(reply.places![0].company).toBe(100);
		expect(reply.places![1].id).toBe(222);
		expect(reply.places![2].id).toBe(333);
	});

	it('should implement getCompanyId method', () => {
		const json: JsonObject = {
			places: [
				{ id: 111, company: 999, deleted: true }
			]
		};
		const reply = new RepPlaceBatchDelete(json);
		expect(reply.getCompanyId()).toBe(999);
	});

	it('should implement getResults method', () => {
		const json: JsonObject = {
			places: [
				{ id: 111, company: 100, deleted: true },
				{ id: 222, company: 100, deleted: true }
			]
		};
		const reply = new RepPlaceBatchDelete(json);
		const results = reply.getResults();
		expect(results).toHaveLength(2);
		expect(results![0]).toBeInstanceOf(ContentIdDeleted);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			places: [
				{ id: 111, company: 100, deleted: true },
				{ id: 222, company: 100, deleted: true },
				{ id: 333, company: 100, deleted: false }
			]
		};
		const reply = new RepPlaceBatchDelete(json);
		const output = reply.toJSON();
		expect(output.places).toBeDefined();
		expect(output.places).toHaveLength(3);
		expect(output.places[0].id).toBe(111);
		expect(output.places[0].company).toBe(100);
		expect(output.places[0].deleted).toBe(true);
		expect(output.places[1].id).toBe(222);
		expect(output.places[2].id).toBe(333);
		expect(output.places[2].deleted).toBe(false);
	});
});