import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../src/API/Requests/Payload";
import { PayAssetMessageGet } from "../../../src/Messaging/Requests/PayAssetMessageGet";
import { RepAssetMessageGet } from "../../../src/Messaging/Responses/RepAssetMessageGet";

describe('PayAssetMessageGet', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayAssetMessageGet();
		expect(payload).toBeInstanceOf(PayAssetMessageGet);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			assetMessage: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayAssetMessageGet(json);
		expect(payload.assetMessage.id).toBe(777);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(3);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			assetMessage: { id: 888 },
			includeDeleted: false
		};
		const payload = new PayAssetMessageGet(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayAssetMessageGet();
		const replyJson: JsonObject = { assetMessage: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepAssetMessageGet);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			assetMessage: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayAssetMessageGet(json);
		const output = payload.toJSON();
		expect(output.assetMessage).toBeDefined();
		expect(output.assetMessage.id).toBe(777);
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayAssetMessageGet();
		const action = payload.getAction();
		expect(action.kind).toBe("Get");
		expect(action.object).toBe("AssetMessage");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(false);
	});
});