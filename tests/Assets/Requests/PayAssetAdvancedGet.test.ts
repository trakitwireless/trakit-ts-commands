import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../commands/API/Requests/Payload";
import { PayAssetAdvancedGet } from "../../../commands/Assets/Requests/PayAssetAdvancedGet";
import { RepAssetAdvancedGet } from "../../../commands/Assets/Responses/RepAssetAdvancedGet";

describe('PayAssetAdvancedGet', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayAssetAdvancedGet();
		expect(payload).toBeInstanceOf(PayAssetAdvancedGet);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			asset: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayAssetAdvancedGet(json);
		expect(payload.asset.id).toBe(777);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(3);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			asset: { id: 888 },
			includeDeleted: false
		};
		const payload = new PayAssetAdvancedGet(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayAssetAdvancedGet();
		const replyJson: JsonObject = { asset: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepAssetAdvancedGet);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			asset: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayAssetAdvancedGet(json);
		const output = payload.toJSON();
		expect(output.asset).toBeDefined();
		expect(output.asset.id).toBe(777);
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayAssetAdvancedGet();
		expect(payload.action()).toBe("Asset.AdvancedGet");
		expect(payload.actionShort()).toBe("AssetAdvancedGet");
		expect(payload.actionNormalized()).toBe("asset_advanced_get");
	});
});
