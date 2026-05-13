import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../src/API/Requests/Payload";
import { PayAsset } from "../../../src/Assets/Requests/PayAsset";
import { PayAssetReactivate } from "../../../src/Assets/Requests/PayAssetReactivate";
import { RepAssetGet } from "../../../src/Assets/Responses/RepAssetGet";

describe('PayAssetReactivate', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayAssetReactivate();
		expect(payload).toBeInstanceOf(PayAssetReactivate);
		expect(payload).toBeInstanceOf(PayAsset);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			asset: {
				id: 666
			},
			reqId: 7
		};
		const payload = new PayAssetReactivate(json);
		expect(payload.asset.id).toBe(666);
		expect(payload.reqId).toBe(7);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayAssetReactivate();
		const replyJson: JsonObject = { asset: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepAssetGet);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			asset: {
				id: 666
			},
			reqId: 7
		};
		const payload = new PayAssetReactivate(json);
		const output = payload.toJSON();
		expect(output.asset).toBeDefined();
		expect(output.asset.id).toBe(666);
		expect(output.reqId).toBe(7);
	});

	it('should return correct action metadata', () => {
		const payload = new PayAssetReactivate();
		expect(payload.action()).toBe("Asset.Reactivate");
		expect(payload.actionShort()).toBe("AssetReactivate");
		expect(payload.actionNormalized()).toBe("asset_reactivate");
	});
});
