import { AssetGeneral, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Reply } from "../../../commands/API/Responses/Reply";
import { RepAssetGeneralListByCompany } from "../../../commands/Assets/Responses/RepAssetGeneralList";

describe('RepAssetGeneralListByCompany', () => {
	it('should create instance with assets data', () => {
		const json: JsonObject = {
			assets: [
				{ id: 111, companyId: 100, name: "Asset 1" },
				{ id: 222, companyId: 100, name: "Asset 2" }
			],
			company: { id: 100 }
		};
		const reply = new RepAssetGeneralListByCompany(json);
		expect(reply).toBeInstanceOf(RepAssetGeneralListByCompany);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.assets).toHaveLength(2);
		expect(reply.assets[0]).toBeInstanceOf(AssetGeneral);
		expect(reply.assets[0].id).toBe(111);
		expect(reply.assets[1].id).toBe(222);
	});

	it('should handle empty assets list', () => {
		const json: JsonObject = {
			assets: [],
			company: { id: 100 }
		};
		const reply = new RepAssetGeneralListByCompany(json);
		expect(reply.assets).toEqual([]);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			assets: [
				{ id: 111, companyId: 100, name: "Asset 1" }
			],
			company: { id: 100 }
		};
		const reply = new RepAssetGeneralListByCompany(json);
		const output = reply.toJSON();
		expect(output.assets).toBeDefined();
		expect(output.assets).toHaveLength(1);
	});
});
