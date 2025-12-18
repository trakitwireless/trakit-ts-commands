import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../commands/API/Requests/Payload";
import { PayAssetBatchDelete } from "../../../commands/Assets/Requests/PayAssetBatchDelete";
import { RepAssetBatchDelete } from "../../../commands/Assets/Responses/RepAssetBatchDelete";

describe('PayAssetBatchDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayAssetBatchDelete();
		expect(payload).toBeInstanceOf(PayAssetBatchDelete);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.assets).toEqual([]);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			assets: [
				{ id: 111 },
				{ id: 222 },
				{ id: 333 }
			],
			reqId: 5
		};
		const payload = new PayAssetBatchDelete(json);
		expect(payload.assets).toHaveLength(3);
		expect(payload.assets[0]).toBeInstanceOf(ParamId);
		expect(payload.assets[0].id).toBe(111);
		expect(payload.assets[1].id).toBe(222);
		expect(payload.assets[2].id).toBe(333);
		expect(payload.reqId).toBe(5);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayAssetBatchDelete();
		const replyJson: JsonObject = { assets: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepAssetBatchDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			assets: [
				{ id: 111 },
				{ id: 222 },
				{ id: 333 }
			],
			reqId: 5
		};
		const payload = new PayAssetBatchDelete(json);
		const output = payload.toJSON();
		expect(output.assets).toBeDefined();
		expect(output.assets).toHaveLength(3);
		expect(output.assets[0].id).toBe(111);
		expect(output.assets[1].id).toBe(222);
		expect(output.assets[2].id).toBe(333);
		expect(output.reqId).toBe(5);
	});

	it('should return correct action metadata', () => {
		const payload = new PayAssetBatchDelete();
		expect(payload.action()).toBe("Asset.BatchDelete");
		expect(payload.actionShort()).toBe("AssetBatchDelete");
		expect(payload.actionNormalized()).toBe("asset_batch_delete");
	});
});
