import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../commands/API/Requests/Payload";
import { PayAssetMessageListByCompany, PayAssetMessageListByAsset } from "../../../commands/Messaging/Requests/PayAssetMessageList";
import { RepAssetMessageListByCompany, RepAssetMessageListByAsset } from "../../../commands/Messaging/Responses/RepAssetMessageList";

describe('PayAssetMessageListByCompany', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayAssetMessageListByCompany();
		expect(payload).toBeInstanceOf(PayAssetMessageListByCompany);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
		expect(payload.company).toBeInstanceOf(ParamId);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			company: {
				id: 999
			},
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayAssetMessageListByCompany(json);
		expect(payload.company).toBeInstanceOf(ParamId);
		expect(payload.company.id).toBe(999);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(4);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			company: { id: 1000 },
			includeDeleted: false
		};
		const payload = new PayAssetMessageListByCompany(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayAssetMessageListByCompany();
		const replyJson: JsonObject = { assetMessages: [], company: { id: 1 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepAssetMessageListByCompany);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			company: {
				id: 999
			},
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayAssetMessageListByCompany(json);
		const output = payload.toJSON();
		expect(output.company).toBeDefined();
		expect(output.company.id).toBe(999);
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(4);
	});

	it('should return correct action metadata', () => {
		const payload = new PayAssetMessageListByCompany();
		const action = payload.getAction();
		expect(action.kind).toBe("List");
		expect(action.object).toBe("AssetMessage");
		expect(action.filter).toBe("ByCompany");
		expect(action.batch).toBe(false);
	});
});

describe('PayAssetMessageListByAsset', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayAssetMessageListByAsset();
		expect(payload).toBeInstanceOf(PayAssetMessageListByAsset);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
		expect(payload.asset).toBeInstanceOf(ParamId);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			asset: {
				id: 777
			},
			includeDeleted: true,
			reqId: 8
		};
		const payload = new PayAssetMessageListByAsset(json);
		expect(payload.asset).toBeInstanceOf(ParamId);
		expect(payload.asset.id).toBe(777);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(8);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			asset: { id: 888 },
			includeDeleted: false
		};
		const payload = new PayAssetMessageListByAsset(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayAssetMessageListByAsset();
		const replyJson: JsonObject = { assetMessages: [], asset: { id: 1 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepAssetMessageListByAsset);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			asset: {
				id: 777
			},
			includeDeleted: true,
			reqId: 8
		};
		const payload = new PayAssetMessageListByAsset(json);
		const output = payload.toJSON();
		expect(output.asset).toBeDefined();
		expect(output.asset.id).toBe(777);
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(8);
	});

	it('should return correct action metadata', () => {
		const payload = new PayAssetMessageListByAsset();
		const action = payload.getAction();
		expect(action.kind).toBe("List");
		expect(action.object).toBe("AssetMessage");
		expect(action.filter).toBe("ByAsset");
		expect(action.batch).toBe(false);
	});
});