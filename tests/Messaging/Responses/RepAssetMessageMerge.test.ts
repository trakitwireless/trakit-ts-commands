import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentIdCompany } from "../../../src/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../src/API/Responses/Reply";
import { RepAssetMessageMerge } from "../../../src/Messaging/Responses/RepAssetMessageMerge";

describe('RepAssetMessageMerge', () => {
	it('should create instance with assetMessage data', () => {
		const json: JsonObject = {
			assetMessage: {
				id: 555,
				company: 100
			}
		};
		const reply = new RepAssetMessageMerge(json);
		expect(reply).toBeInstanceOf(RepAssetMessageMerge);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.assetMessage).toBeInstanceOf(ContentIdCompany);
		expect(reply.assetMessage!.id).toBe(555);
		expect(reply.assetMessage!.company).toBe(100);
	});

	it('should handle assetMessage for create operation', () => {
		const json: JsonObject = {
			assetMessage: {
				id: 999,
				company: 888
			}
		};
		const reply = new RepAssetMessageMerge(json);
		expect(reply.assetMessage!.id).toBe(999);
		expect(reply.assetMessage!.company).toBe(888);
	});

	it('should handle assetMessage for update operation', () => {
		const json: JsonObject = {
			assetMessage: {
				id: 123,
				company: 456
			}
		};
		const reply = new RepAssetMessageMerge(json);
		expect(reply.assetMessage).toBeInstanceOf(ContentIdCompany);
		expect(reply.assetMessage!.id).toBe(123);
		expect(reply.assetMessage!.company).toBe(456);
	});

	it('should handle missing assetMessage', () => {
		const json: JsonObject = {};
		const reply = new RepAssetMessageMerge(json);
		expect(reply.assetMessage).toBeUndefined();
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			assetMessage: {
				id: 555,
				company: 100
			}
		};
		const reply = new RepAssetMessageMerge(json);
		const output = reply.toJSON();
		expect(output.assetMessage).toBeDefined();
		expect(output.assetMessage.id).toBe(555);
		expect(output.assetMessage.company).toBe(100);
	});
});