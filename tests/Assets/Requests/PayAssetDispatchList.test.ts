import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../src/API/Requests/Parameters/ParamId";
import { Payload } from "../../../src/API/Requests/Payload";
import { PayAssetDispatchListByCompany } from "../../../src/Assets/Requests/PayAssetDispatchList";
import { RepAssetDispatchListByCompany } from "../../../src/Assets/Responses/RepAssetDispatchList";

describe('PayAssetDispatchListByCompany', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayAssetDispatchListByCompany();
		expect(payload).toBeInstanceOf(PayAssetDispatchListByCompany);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
		expect(payload.includeSuspended).toBe(true);
		expect(payload.company).toBeInstanceOf(ParamId);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			company: {
				id: 999
			},
			includeDeleted: true,
			includeSuspended: false,
			reqId: 4
		};
		const payload = new PayAssetDispatchListByCompany(json);
		expect(payload.company).toBeInstanceOf(ParamId);
		expect(payload.company.id).toBe(999);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.includeSuspended).toBe(false);
		expect(payload.reqId).toBe(4);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			company: { id: 1000 },
			includeDeleted: false
		};
		const payload = new PayAssetDispatchListByCompany(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayAssetDispatchListByCompany();
		const replyJson: JsonObject = { assets: [], company: { id: 1 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepAssetDispatchListByCompany);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			company: {
				id: 999
			},
			includeDeleted: true,
			includeSuspended: false,
			reqId: 4
		};
		const payload = new PayAssetDispatchListByCompany(json);
		const output = payload.toJSON();
		expect(output.company).toBeDefined();
		expect(output.company.id).toBe(999);
		expect(output.includeDeleted).toBe(true);
		expect(output.includeSuspended).toBe(false);
		expect(output.reqId).toBe(4);
	});

	it('should return correct action metadata', () => {
		const payload = new PayAssetDispatchListByCompany();
		expect(payload.action()).toBe("Asset.DispatchList");
		expect(payload.actionShort()).toBe("AssetDispatchList");
		expect(payload.actionNormalized()).toBe("asset_dispatch_list");
	});
});
