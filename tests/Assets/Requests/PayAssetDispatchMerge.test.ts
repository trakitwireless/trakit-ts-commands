import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../src/API/Requests/Payload";
import { ParamAssetDispatchMerge } from "../../../src/Assets/Requests/Parameters/ParamAssetDispatchMerge";
import { PayAssetDispatchMerge } from "../../../src/Assets/Requests/PayAssetDispatchMerge";
import { RepAssetDispatchMerge } from "../../../src/Assets/Responses/RepAssetDispatchMerge";

describe('PayAssetDispatchMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayAssetDispatchMerge();
		expect(payload).toBeInstanceOf(PayAssetDispatchMerge);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.asset).toBeInstanceOf(ParamAssetDispatchMerge);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			asset: {
				id: 444,
				dispatch: {
					enabled: true
				}
			},
			reqId: 6
		};
		const payload = new PayAssetDispatchMerge(json);
		expect(payload.asset).toBeInstanceOf(ParamAssetDispatchMerge);
		expect(payload.asset.id).toBe(444);
		expect(payload.reqId).toBe(6);
	});

	it('should implement getKey method', () => {
		const json: JsonObject = {
			asset: {
				id: 444
			}
		};
		const payload = new PayAssetDispatchMerge(json);
		expect(payload.getKey()).toBe("444");
	});

	it('should return empty string from getKey when id is not set', () => {
		const payload = new PayAssetDispatchMerge();
		expect(payload.getKey()).toBe("");
	});

	it('should create reply with createReply method', () => {
		const payload = new PayAssetDispatchMerge();
		const replyJson: JsonObject = { asset: { id: 123, company: 100 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepAssetDispatchMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			asset: {
				id: 444,
				dispatch: {
					enabled: true
				}
			},
			reqId: 6
		};
		const payload = new PayAssetDispatchMerge(json);
		const output = payload.toJSON();
		expect(output.asset).toBeDefined();
		expect(output.asset.id).toBe(444);
		expect(output.reqId).toBe(6);
	});

	it('should return correct action metadata', () => {
		const payload = new PayAssetDispatchMerge();
		expect(payload.action()).toBe("Asset.DispatchMerge");
		expect(payload.actionShort()).toBe("AssetDispatchMerge");
		expect(payload.actionNormalized()).toBe("asset_dispatch_merge");
	});
});
