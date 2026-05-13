import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../src/API/Requests/Payload";
import { PayAssetGeneralGet } from "../../../src/Assets/Requests/PayAssetGeneralGet";
import { RepAssetGeneralGet } from "../../../src/Assets/Responses/RepAssetGeneralGet";

describe('PayAssetGeneralGet', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayAssetGeneralGet();
		expect(payload).toBeInstanceOf(PayAssetGeneralGet);
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
		const payload = new PayAssetGeneralGet(json);
		expect(payload.asset.id).toBe(777);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(3);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			asset: { id: 888 },
			includeDeleted: false
		};
		const payload = new PayAssetGeneralGet(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayAssetGeneralGet();
		const replyJson: JsonObject = { asset: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepAssetGeneralGet);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			asset: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayAssetGeneralGet(json);
		const output = payload.toJSON();
		expect(output.asset).toBeDefined();
		expect(output.asset.id).toBe(777);
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayAssetGeneralGet();
		expect(payload.action()).toBe("Asset.GeneralGet");
		expect(payload.actionShort()).toBe("AssetGeneralGet");
		expect(payload.actionNormalized()).toBe("asset_general_get");
	});
});
