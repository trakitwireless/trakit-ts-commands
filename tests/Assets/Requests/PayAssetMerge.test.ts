import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../commands/Assets/../API/Requests/Payload";
import { ParamAssetMerge } from "../../../commands/Assets/Requests/Parameters/ParamAssetMerge";
import { PayAssetMerge } from "../../../commands/Assets/Requests/PayAssetMerge";
import { RepAssetMerge } from "../../../commands/Assets/Responses/RepAssetMerge";

describe('PayAssetMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayAssetMerge();
		expect(payload).toBeInstanceOf(PayAssetMerge);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.asset).toBeInstanceOf(ParamAssetMerge);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			asset: {
				company: 100,
				name: "Test Asset",
				kind: 1,
				icon: 5
			},
			reqId: 6
		};
		const payload = new PayAssetMerge(json);
		expect(payload.asset).toBeInstanceOf(ParamAssetMerge);
		expect(payload.asset.name).toBe("Test Asset");
		expect(payload.asset.company).toBe(100);
		expect(payload.reqId).toBe(6);
	});

	it('should implement getKey method', () => {
		const json: JsonObject = {
			asset: {
				id: 444,
				name: "Asset"
			}
		};
		const payload = new PayAssetMerge(json);
		expect(payload.getKey()).toBe("444");
	});

	it('should return empty string from getKey when id is not set', () => {
		const payload = new PayAssetMerge();
		expect(payload.getKey()).toBe("");
	});

	it('should create reply with createReply method', () => {
		const payload = new PayAssetMerge();
		const replyJson: JsonObject = { asset: { id: 123, company: 100 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepAssetMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			asset: {
				company: 100,
				name: "Test Asset",
				kind: 1,
				icon: 5
			},
			reqId: 6
		};
		const payload = new PayAssetMerge(json);
		const output = payload.toJSON();
		expect(output.asset).toBeDefined();
		expect(output.asset.company).toBe(100);
		expect(output.asset.name).toBe("Test Asset");
		expect(output.reqId).toBe(6);
	});

	it('should return correct action metadata', () => {
		const payload = new PayAssetMerge();
		expect(payload.action()).toBe("Asset.Merge");
		expect(payload.actionShort()).toBe("AssetMerge");
		expect(payload.actionNormalized()).toBe("asset_merge");
	});

	it('should handle asset for update operation', () => {
		const json: JsonObject = {
			asset: {
				id: 555,
				company: 200,
				name: "Updated Asset"
			}
		};
		const payload = new PayAssetMerge(json);
		expect(payload.asset.id).toBe(555);
		expect(payload.asset.name).toBe("Updated Asset");
	});
});
