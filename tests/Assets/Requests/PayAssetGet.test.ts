import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../src/API/Requests/Payload";
import { PayAssetGet } from "../../../src/Assets/Requests/PayAssetGet";
import { RepAssetGet } from "../../../src/Assets/Responses/RepAssetGet";

describe('PayAssetGet', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayAssetGet();
		expect(payload).toBeInstanceOf(PayAssetGet);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
		expect(payload.includeMessages).toBe(false);
		expect(payload.includeTasks).toBe(false);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			asset: {
				id: 777
			},
			includeDeleted: true,
			includeMessages: true,
			includeTasks: true,
			reqId: 3
		};
		const payload = new PayAssetGet(json);
		expect(payload.asset.id).toBe(777);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.includeMessages).toBe(true);
		expect(payload.includeTasks).toBe(true);
		expect(payload.reqId).toBe(3);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			asset: { id: 888 },
			includeDeleted: false,
			includeMessages: false,
			includeTasks: false
		};
		const payload = new PayAssetGet(json);
		expect(payload.includeDeleted).toBe(false);
		expect(payload.includeMessages).toBe(false);
		expect(payload.includeTasks).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayAssetGet();
		const replyJson: JsonObject = { asset: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepAssetGet);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			asset: {
				id: 777
			},
			includeDeleted: true,
			includeMessages: true,
			includeTasks: true,
			reqId: 3
		};
		const payload = new PayAssetGet(json);
		const output = payload.toJSON();
		expect(output.asset).toBeDefined();
		expect(output.asset.id).toBe(777);
		expect(output.includeDeleted).toBe(true);
		expect(output.includeMessages).toBe(true);
		expect(output.includeTasks).toBe(true);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayAssetGet();
		expect(payload.action()).toBe("Asset.Get");
		expect(payload.actionShort()).toBe("AssetGet");
		expect(payload.actionNormalized()).toBe("asset_get");
	});
});
