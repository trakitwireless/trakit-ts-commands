import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentId } from "../../../commands/API/Responses/Content/ContentId";
import { Reply } from "../../../commands/API/Responses/Reply";
import { RepAssetBatchDelete } from "../../../commands/Assets/Responses/RepAssetBatchDelete";

describe('RepAssetBatchDelete', () => {
	it('should create instance with assets data', () => {
		const json: JsonObject = {
			assets: [
				{ id: 111 },
				{ id: 222 },
				{ id: 333 }
			]
		};
		const reply = new RepAssetBatchDelete(json);
		expect(reply).toBeInstanceOf(RepAssetBatchDelete);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.assets).toHaveLength(3);
		expect(reply.assets[0]).toBeInstanceOf(ContentId);
		expect(reply.assets[0].id).toBe(111);
		expect(reply.assets[1].id).toBe(222);
		expect(reply.assets[2].id).toBe(333);
	});

	it('should handle empty assets list', () => {
		const json: JsonObject = {
			assets: []
		};
		const reply = new RepAssetBatchDelete(json);
		expect(reply.assets).toEqual([]);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			assets: [
				{ id: 111 },
				{ id: 222 }
			]
		};
		const reply = new RepAssetBatchDelete(json);
		const output = reply.toJSON();
		expect(output.assets).toBeDefined();
		expect(output.assets).toHaveLength(2);
	});
});
