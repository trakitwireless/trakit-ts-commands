import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentIdCompany } from "../../../commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../commands/API/Responses/Reply";
import { RepAssetBatchMerge } from "../../../commands/Assets/Responses/RepAssetBatchMerge";

describe('RepAssetBatchMerge', () => {
	it('should create instance with assets data', () => {
		const json: JsonObject = {
			assets: [
				{ id: 111, company: 100 },
				{ id: 222, company: 100 },
				{ id: 333, company: 100 }
			]
		};
		const reply = new RepAssetBatchMerge(json);
		expect(reply).toBeInstanceOf(RepAssetBatchMerge);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.assets).toHaveLength(3);
		expect(reply.assets[0]).toBeInstanceOf(ContentIdCompany);
		expect(reply.assets[0].id).toBe(111);
		expect(reply.assets[1].id).toBe(222);
		expect(reply.assets[2].id).toBe(333);
	});

	it('should handle empty assets list', () => {
		const json: JsonObject = {
			assets: []
		};
		const reply = new RepAssetBatchMerge(json);
		expect(reply.assets).toEqual([]);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			assets: [
				{ id: 111, company: 100 },
				{ id: 222, company: 100 }
			]
		};
		const reply = new RepAssetBatchMerge(json);
		const output = reply.toJSON();
		expect(output.assets).toBeDefined();
		expect(output.assets).toHaveLength(2);
	});
});
