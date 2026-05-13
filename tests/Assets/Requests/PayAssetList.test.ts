import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../src/API/Requests/Parameters/ParamId";
import { Payload } from "../../../src/API/Requests/Payload";
import { PayAssetListByCompany } from "../../../src/Assets/Requests/PayAssetList";
import { RepAssetListByCompany } from "../../../src/Assets/Responses/RepAssetList";

describe('PayAssetListByCompany', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayAssetListByCompany();
		expect(payload).toBeInstanceOf(PayAssetListByCompany);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
		expect(payload.includeMessages).toBe(false);
		expect(payload.includeTasks).toBe(false);
		expect(payload.includeSuspended).toBe(true);
		expect(payload.company).toBeInstanceOf(ParamId);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			company: {
				id: 999
			},
			includeDeleted: true,
			includeMessages: true,
			includeTasks: true,
			includeSuspended: false,
			reqId: 4
		};
		const payload = new PayAssetListByCompany(json);
		expect(payload.company).toBeInstanceOf(ParamId);
		expect(payload.company.id).toBe(999);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.includeMessages).toBe(true);
		expect(payload.includeTasks).toBe(true);
		expect(payload.includeSuspended).toBe(false);
		expect(payload.reqId).toBe(4);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			company: { id: 1000 },
			includeDeleted: false
		};
		const payload = new PayAssetListByCompany(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayAssetListByCompany();
		const replyJson: JsonObject = { assets: [], company: { id: 1 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepAssetListByCompany);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			company: {
				id: 999
			},
			includeDeleted: true,
			includeMessages: true,
			includeTasks: true,
			includeSuspended: false,
			reqId: 4
		};
		const payload = new PayAssetListByCompany(json);
		const output = payload.toJSON();
		expect(output.company).toBeDefined();
		expect(output.company.id).toBe(999);
		expect(output.includeDeleted).toBe(true);
		expect(output.includeMessages).toBe(true);
		expect(output.includeTasks).toBe(true);
		expect(output.includeSuspended).toBe(false);
		expect(output.reqId).toBe(4);
	});

	it('should return correct action metadata', () => {
		const payload = new PayAssetListByCompany();
		expect(payload.action()).toBe("Asset.List");
		expect(payload.actionShort()).toBe("AssetList");
		expect(payload.actionNormalized()).toBe("asset_list");
	});
});
