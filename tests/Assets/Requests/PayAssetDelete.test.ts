import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../commands/API/Requests/Payload";
import { PayAsset } from "../../../commands/Assets/Requests/PayAsset";
import { PayAssetDelete } from "../../../commands/Assets/Requests/PayAssetDelete";
import { RepAssetDelete } from "../../../commands/Assets/Responses/RepAssetDelete";

describe('PayAssetDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayAssetDelete();
		expect(payload).toBeInstanceOf(PayAssetDelete);
		expect(payload).toBeInstanceOf(PayAsset);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			asset: {
				id: 555
			},
			reqId: 2
		};
		const payload = new PayAssetDelete(json);
		expect(payload.asset.id).toBe(555);
		expect(payload.reqId).toBe(2);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayAssetDelete();
		const replyJson: JsonObject = { asset: { id: 123 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepAssetDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			asset: {
				id: 555
			},
			reqId: 2
		};
		const payload = new PayAssetDelete(json);
		const output = payload.toJSON();
		expect(output.asset).toBeDefined();
		expect(output.asset.id).toBe(555);
		expect(output.reqId).toBe(2);
	});

	it('should return correct action metadata', () => {
		const payload = new PayAssetDelete();
		expect(payload.action()).toBe("Asset.Delete");
		expect(payload.actionShort()).toBe("AssetDelete");
		expect(payload.actionNormalized()).toBe("asset_delete");
	});
});
