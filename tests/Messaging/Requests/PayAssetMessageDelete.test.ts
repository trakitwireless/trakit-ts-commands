import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../commands/API/Requests/Payload";
import { PayAssetMessage } from "../../../commands/Messaging/Requests/PayAssetMessage";
import { PayAssetMessageDelete } from "../../../commands/Messaging/Requests/PayAssetMessageDelete";
import { RepAssetMessageDelete } from "../../../commands/Messaging/Responses/RepAssetMessageDelete";

describe('PayAssetMessageDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayAssetMessageDelete();
		expect(payload).toBeInstanceOf(PayAssetMessageDelete);
		expect(payload).toBeInstanceOf(PayAssetMessage);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			assetMessage: {
				id: 555
			},
			reqId: 2
		};
		const payload = new PayAssetMessageDelete(json);
		expect(payload.assetMessage.id).toBe(555);
		expect(payload.reqId).toBe(2);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayAssetMessageDelete();
		const replyJson: JsonObject = { assetMessage: { id: 123 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepAssetMessageDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			assetMessage: {
				id: 555
			},
			reqId: 2
		};
		const payload = new PayAssetMessageDelete(json);
		const output = payload.toJSON();
		expect(output.assetMessage).toBeDefined();
		expect(output.assetMessage.id).toBe(555);
		expect(output.reqId).toBe(2);
	});

	it('should return correct action metadata', () => {
		const payload = new PayAssetMessageDelete();
		const action = payload.getAction();
		expect(action.kind).toBe("Delete");
		expect(action.object).toBe("AssetMessage");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(false);
	});
});