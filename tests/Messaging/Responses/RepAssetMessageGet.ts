import { JsonObject, AssetMessage } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Reply } from "../../../commands/API/Responses/Reply";
import { RepAssetMessageGet } from "../../../commands/Messaging/Responses/RepAssetMessageGet";

describe('RepAssetMessageGet', () => {
	it('should create instance with assetMessage data', () => {
		const json: JsonObject = {
			assetMessage: {
				id: 555,
				assetId: 100,
				kind: 1,
				folder: 1,
				subject: "Test Message"
			}
		};
		const reply = new RepAssetMessageGet(json);
		expect(reply).toBeInstanceOf(RepAssetMessageGet);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.assetMessage).toBeInstanceOf(AssetMessage);
		expect(reply.assetMessage!.id).toBe(555);
		expect(reply.assetMessage!.assetId).toBe(100);
		expect(reply.assetMessage!.subject).toBe("Test Message");
	});

	it('should handle missing assetMessage', () => {
		const json: JsonObject = {};
		const reply = new RepAssetMessageGet(json);
		expect(reply.assetMessage).toBeUndefined();
	});

	it('should implement getObject method', () => {
		const json: JsonObject = {
			assetMessage: {
				id: 777,
				assetId: 200,
				subject: "Another Message"
			}
		};
		const reply = new RepAssetMessageGet(json);
		const obj = reply.getObject();
		expect(obj).toBeInstanceOf(AssetMessage);
		expect(obj.id).toBe(777);
	});

	it('should implement getCompanyId method', () => {
		const json: JsonObject = {
			assetMessage: {
				id: 888,
				assetId: 300,
				companyId: 999,
				subject: "Message"
			}
		};
		const reply = new RepAssetMessageGet(json);
		expect(reply.getCompanyId()).toBe(999);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			assetMessage: {
				id: 555,
				assetId: 100,
				kind: 1,
				folder: 1,
				subject: "Test Message"
			}
		};
		const reply = new RepAssetMessageGet(json);
		const output = reply.toJSON();
		expect(output.assetMessage).toBeDefined();
		expect(output.assetMessage.id).toBe(555);
		expect(output.assetMessage.assetId).toBe(100);
		expect(output.assetMessage.subject).toBe("Test Message");
	});
});