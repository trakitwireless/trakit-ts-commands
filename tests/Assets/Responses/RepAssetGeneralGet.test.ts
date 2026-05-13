import { AssetGeneral, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Reply } from "../../../src/API/Responses/Reply";
import { RepAssetGeneralGet } from "../../../src/Assets/Responses/RepAssetGeneralGet";

describe('RepAssetGeneralGet', () => {
	it('should create instance with asset data', () => {
		const json: JsonObject = {
			asset: {
				id: 555,
				companyId: 100,
				name: "Test Asset"
			}
		};
		const reply = new RepAssetGeneralGet(json);
		expect(reply).toBeInstanceOf(RepAssetGeneralGet);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.asset).toBeInstanceOf(AssetGeneral);
		expect(reply.asset!.id).toBe(555);
		expect(reply.asset!.companyId).toBe(100);
		expect(reply.asset!.name).toBe("Test Asset");
	});

	it('should handle missing asset', () => {
		const json: JsonObject = {};
		const reply = new RepAssetGeneralGet(json);
		expect(reply.asset).toBeUndefined();
	});

	it('should implement getObject method', () => {
		const json: JsonObject = {
			asset: {
				id: 777,
				companyId: 200,
				name: "Another Asset"
			}
		};
		const reply = new RepAssetGeneralGet(json);
		const obj = reply.getObject();
		expect(obj).toBeInstanceOf(AssetGeneral);
		expect(obj.id).toBe(777);
	});

	it('should implement getCompanyId method', () => {
		const json: JsonObject = {
			asset: {
				id: 888,
				companyId: 999,
				name: "Asset"
			}
		};
		const reply = new RepAssetGeneralGet(json);
		expect(reply.getCompanyId()).toBe(999);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			asset: {
				id: 555,
				companyId: 100,
				name: "Test Asset"
			}
		};
		const reply = new RepAssetGeneralGet(json);
		const output = reply.toJSON();
		expect(output.asset).toBeDefined();
	});
});
