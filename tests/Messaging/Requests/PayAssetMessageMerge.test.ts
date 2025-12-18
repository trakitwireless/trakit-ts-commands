import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../commands/API/Requests/Payload";
import { ParamAssetMessageMerge } from "../../../commands/Messaging/Requests/Parameters/ParamAssetMessageMerge";
import { PayAssetMessageMerge } from "../../../commands/Messaging/Requests/PayAssetMessageMerge";
import { RepAssetMessageMerge } from "../../../commands/Messaging/Responses/RepAssetMessageMerge";

describe('PayAssetMessageMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayAssetMessageMerge();
		expect(payload).toBeInstanceOf(PayAssetMessageMerge);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.assetMessage).toBeInstanceOf(ParamAssetMessageMerge);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			assetMessage: {
				asset: 100,
				kind: 1,
				body: "Test message"
			},
			reqId: 6
		};
		const payload = new PayAssetMessageMerge(json);
		expect(payload.assetMessage).toBeInstanceOf(ParamAssetMessageMerge);
		expect(payload.assetMessage.asset).toBe(100);
		expect(payload.assetMessage.body).toBe("Test message");
		expect(payload.reqId).toBe(6);
	});

	it('should implement getKey method', () => {
		const json: JsonObject = {
			assetMessage: {
				id: 444,
				body: "Message"
			}
		};
		const payload = new PayAssetMessageMerge(json);
		expect(payload.getKey()).toBe("444");
	});

	it('should return empty string from getKey when id is not set', () => {
		const payload = new PayAssetMessageMerge();
		expect(payload.getKey()).toBe("");
	});

	it('should create reply with createReply method', () => {
		const payload = new PayAssetMessageMerge();
		const replyJson: JsonObject = { assetMessage: { id: 1, company: 1 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepAssetMessageMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			assetMessage: {
				asset: 100,
				kind: 1,
				body: "Test message"
			},
			reqId: 6
		};
		const payload = new PayAssetMessageMerge(json);
		const output = payload.toJSON();
		expect(output.assetMessage).toBeDefined();
		expect(output.assetMessage.asset).toBe(100);
		expect(output.assetMessage.kind).toBe(1);
		expect(output.assetMessage.body).toBe("Test message");
		expect(output.reqId).toBe(6);
	});

	it('should return correct action metadata', () => {
		const payload = new PayAssetMessageMerge();
		const action = payload.getAction();
		expect(action.kind).toBe("Merge");
		expect(action.object).toBe("AssetMessage");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(false);
	});
});