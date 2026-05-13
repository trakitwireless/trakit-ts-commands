import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../src/API/Requests/Payload";
import { PayAssetMessageRestore } from "../../../src/Messaging/Requests/PayAssetMessageRestore";
import { RepAssetMessageDelete } from "../../../src/Messaging/Responses/RepAssetMessageDelete";

describe('PayAssetMessageRestore', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayAssetMessageRestore();
		expect(payload).toBeInstanceOf(PayAssetMessageRestore);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			assetMessage: {
				id: 666
			},
			reqId: 8
		};
		const payload = new PayAssetMessageRestore(json);
		expect(payload.assetMessage.id).toBe(666);
		expect(payload.reqId).toBe(8);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayAssetMessageRestore();
		const replyJson: JsonObject = { assetMessage: { id: 123 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepAssetMessageDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			assetMessage: {
				id: 666
			},
			reqId: 8
		};
		const payload = new PayAssetMessageRestore(json);
		const output = payload.toJSON();
		expect(output.assetMessage).toBeDefined();
		expect(output.assetMessage.id).toBe(666);
		expect(output.reqId).toBe(8);
	});

	it('should return correct action metadata', () => {
		const payload = new PayAssetMessageRestore();
		const action = payload.getAction();
		expect(action.kind).toBe("Restore");
		expect(action.object).toBe("AssetMessage");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(false);
	});
});