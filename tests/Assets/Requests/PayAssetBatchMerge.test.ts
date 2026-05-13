import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../src/API/Requests/Payload";
import { ParamAssetMerge } from "../../../src/Assets/Requests/Parameters/ParamAssetMerge";
import { PayAssetBatchMerge } from "../../../src/Assets/Requests/PayAssetBatchMerge";
import { RepAssetBatchMerge } from "../../../src/Assets/Responses/RepAssetBatchMerge";

describe('PayAssetBatchMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayAssetBatchMerge();
		expect(payload).toBeInstanceOf(PayAssetBatchMerge);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.assets).toEqual([]);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			assets: [
				{ company: 100, name: "Asset 1" },
				{ company: 100, name: "Asset 2" },
				{ company: 100, name: "Asset 3" }
			],
			reqId: 8
		};
		const payload = new PayAssetBatchMerge(json);
		expect(payload.assets).toHaveLength(3);
		expect(payload.assets[0]).toBeInstanceOf(ParamAssetMerge);
		expect(payload.assets[0].name).toBe("Asset 1");
		expect(payload.assets[1].name).toBe("Asset 2");
		expect(payload.assets[2].name).toBe("Asset 3");
		expect(payload.reqId).toBe(8);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayAssetBatchMerge();
		const replyJson: JsonObject = { assets: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepAssetBatchMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			assets: [
				{ company: 100, name: "Asset 1" },
				{ company: 100, name: "Asset 2" }
			],
			reqId: 8
		};
		const payload = new PayAssetBatchMerge(json);
		const output = payload.toJSON();
		expect(output.assets).toBeDefined();
		expect(output.assets).toHaveLength(2);
		expect(output.assets[0].name).toBe("Asset 1");
		expect(output.assets[1].name).toBe("Asset 2");
		expect(output.reqId).toBe(8);
	});

	it('should return correct action metadata', () => {
		const payload = new PayAssetBatchMerge();
		expect(payload.action()).toBe("Asset.BatchMerge");
		expect(payload.actionShort()).toBe("AssetBatchMerge");
		expect(payload.actionNormalized()).toBe("asset_batch_merge");
	});
});
