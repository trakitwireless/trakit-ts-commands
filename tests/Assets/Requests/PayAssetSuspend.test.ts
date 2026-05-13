import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../src/API/Requests/Payload";
import { PayAsset } from "../../../src/Assets/Requests/PayAsset";
import { PayAssetSuspend } from "../../../src/Assets/Requests/PayAssetSuspend";
import { RepAssetSuspend } from "../../../src/Assets/Responses/RepAssetSuspend";

describe('PayAssetSuspend', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayAssetSuspend();
		expect(payload).toBeInstanceOf(PayAssetSuspend);
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
		const payload = new PayAssetSuspend(json);
		expect(payload.asset.id).toBe(555);
		expect(payload.reqId).toBe(2);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayAssetSuspend();
		const replyJson: JsonObject = { asset: { id: 123 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepAssetSuspend);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			asset: {
				id: 555
			},
			reqId: 2
		};
		const payload = new PayAssetSuspend(json);
		const output = payload.toJSON();
		expect(output.asset).toBeDefined();
		expect(output.asset.id).toBe(555);
		expect(output.reqId).toBe(2);
	});

	it('should return correct action metadata', () => {
		const payload = new PayAssetSuspend();
		expect(payload.action()).toBe("Asset.Suspend");
		expect(payload.actionShort()).toBe("AssetSuspend");
		expect(payload.actionNormalized()).toBe("asset_suspend");
	});
});
