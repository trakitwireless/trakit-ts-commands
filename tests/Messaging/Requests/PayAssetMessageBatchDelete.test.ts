import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../commands/API/Requests/Payload";
import { PayAssetMessageBatchDelete } from "../../../commands/Messaging/Requests/PayAssetMessageBatchDelete";
import { RepAssetMessageBatchDelete } from "../../../commands/Messaging/Responses/RepAssetMessageBatchDelete";

describe('PayAssetMessageBatchDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayAssetMessageBatchDelete();
		expect(payload).toBeInstanceOf(PayAssetMessageBatchDelete);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.assetMessages).toEqual([]);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			assetMessages: [
				{ id: 111 },
				{ id: 222 },
				{ id: 333 }
			],
			reqId: 5
		};
		const payload = new PayAssetMessageBatchDelete(json);
		expect(payload.assetMessages).toHaveLength(3);
		expect(payload.assetMessages[0]).toBeInstanceOf(ParamId);
		expect(payload.assetMessages[0].id).toBe(111);
		expect(payload.assetMessages[1].id).toBe(222);
		expect(payload.assetMessages[2].id).toBe(333);
		expect(payload.reqId).toBe(5);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayAssetMessageBatchDelete();
		const replyJson: JsonObject = { assetMessages: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepAssetMessageBatchDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			assetMessages: [
				{ id: 111 },
				{ id: 222 },
				{ id: 333 }
			],
			reqId: 5
		};
		const payload = new PayAssetMessageBatchDelete(json);
		const output = payload.toJSON();
		expect(output.assetMessages).toBeDefined();
		expect(output.assetMessages).toHaveLength(3);
		expect(output.assetMessages[0].id).toBe(111);
		expect(output.assetMessages[1].id).toBe(222);
		expect(output.assetMessages[2].id).toBe(333);
		expect(output.reqId).toBe(5);
	});

	it('should return correct action metadata', () => {
		const payload = new PayAssetMessageBatchDelete();
		const action = payload.getAction();
		expect(action.kind).toBe("Delete");
		expect(action.object).toBe("AssetMessage");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(true);
	});
});