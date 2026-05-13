import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../src/API/Requests/Parameters/ParamId";
import { Payload } from "../../../src/API/Requests/Payload";
import { PayAssetAdvancedListByCompany } from "../../../src/Assets/Requests/PayAssetAdvancedList";
import { RepAssetAdvancedListByCompany } from "../../../src/Assets/Responses/RepAssetAdvancedList";

describe('PayAssetAdvancedListByCompany', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayAssetAdvancedListByCompany();
		expect(payload).toBeInstanceOf(PayAssetAdvancedListByCompany);
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
		const payload = new PayAssetAdvancedListByCompany(json);
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
		const payload = new PayAssetAdvancedListByCompany(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayAssetAdvancedListByCompany();
		const replyJson: JsonObject = { assets: [], company: { id: 1 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepAssetAdvancedListByCompany);
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
		const payload = new PayAssetAdvancedListByCompany(json);
		const output = payload.toJSON();
		expect(output.company).toBeDefined();
		expect(output.company.id).toBe(999);
		expect(output.includeDeleted).toBe(true);
		expect(output.includeSuspended).toBe(false);
		expect(output.reqId).toBe(4);
	});

	it('should return correct action metadata', () => {
		const payload = new PayAssetAdvancedListByCompany();
		expect(payload.action()).toBe("Asset.AdvancedList");
		expect(payload.actionShort()).toBe("AssetAdvancedList");
		expect(payload.actionNormalized()).toBe("asset_advanced_list");
	});
});
