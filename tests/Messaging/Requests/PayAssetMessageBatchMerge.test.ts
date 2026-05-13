import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { PayAssetMessageBatchMerge } from "../../../src/Messaging/Requests/PayAssetMessageBatchMerge";
import { Payload } from "../../../src/API/Requests/Payload";
import { ParamAssetMessageMerge } from "../../../src/Messaging/Requests/Parameters/ParamAssetMessageMerge";
import { RepAssetMessageBatchMerge } from "../../../src/Messaging/Responses/RepAssetMessageBatchMerge";

describe('PayAssetMessageBatchMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayAssetMessageBatchMerge();
		expect(payload).toBeInstanceOf(PayAssetMessageBatchMerge);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.assetMessages).toEqual([]);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			assetMessages: [
				{ asset: 100, kind: 1, folder: 1, subject: "Message 1" },
				{ asset: 100, kind: 2, folder: 2, subject: "Message 2" }
			],
			reqId: 7
		};
		const payload = new PayAssetMessageBatchMerge(json);
		expect(payload.assetMessages).toHaveLength(2);
		expect(payload.assetMessages[0]).toBeInstanceOf(ParamAssetMessageMerge);
		expect(payload.assetMessages[0].subject).toBe("Message 1");
		expect(payload.assetMessages[1].subject).toBe("Message 2");
		expect(payload.reqId).toBe(7);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayAssetMessageBatchMerge();
		const replyJson: JsonObject = { assetMessages: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepAssetMessageBatchMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			assetMessages: [
				{ asset: 100, kind: 1, folder: 1, subject: "Message 1" },
				{ asset: 100, kind: 2, folder: 2, subject: "Message 2" }
			],
			reqId: 7
		};
		const payload = new PayAssetMessageBatchMerge(json);
		const output = payload.toJSON();
		expect(output.assetMessages).toBeDefined();
		expect(output.assetMessages).toHaveLength(2);
		expect(output.assetMessages[0].asset).toBe(100);
		expect(output.assetMessages[0].subject).toBe("Message 1");
		expect(output.assetMessages[0].kind).toBe(1);
		expect(output.assetMessages[0].folder).toBe(1);
		expect(output.assetMessages[1].asset).toBe(100);
		expect(output.assetMessages[1].subject).toBe("Message 2");
		expect(output.assetMessages[1].kind).toBe(2);
		expect(output.assetMessages[1].folder).toBe(2);
		expect(output.reqId).toBe(7);
	});

	it('should return correct action metadata', () => {
		const payload = new PayAssetMessageBatchMerge();
		const action = payload.getAction();
		expect(action.kind).toBe("Merge");
		expect(action.object).toBe("AssetMessage");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(true);
	});
});