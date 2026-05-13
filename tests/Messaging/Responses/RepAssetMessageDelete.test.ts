import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentIdDeleted } from "../../../src/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../src/API/Responses/Reply";
import { ReplySyncDelete } from "../../../src/API/Responses/ReplySyncDelete";
import { RepAssetMessageDelete } from "../../../src/Messaging/Responses/RepAssetMessageDelete";

describe('RepAssetMessageDelete', () => {
	it('should create instance with assetMessage data', () => {
		const json: JsonObject = {
			assetMessage: {
				id: 555,
				company: 100,
				deleted: true
			}
		};
		const reply = new RepAssetMessageDelete(json);
		expect(reply).toBeInstanceOf(RepAssetMessageDelete);
		expect(reply).toBeInstanceOf(ReplySyncDelete);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.assetMessage).toBeInstanceOf(ContentIdDeleted);
		expect(reply.assetMessage!.id).toBe(555);
		expect(reply.assetMessage!.company).toBe(100);
	});

	it('should implement getKey method', () => {
		const json: JsonObject = {
			assetMessage: {
				id: 777,
				company: 200,
				deleted: true
			}
		};
		const reply = new RepAssetMessageDelete(json);
		expect(reply.getKey()).toBe(777);
	});

	it('should implement getCompanyId method', () => {
		const json: JsonObject = {
			assetMessage: {
				id: 888,
				company: 999,
				deleted: false
			}
		};
		const reply = new RepAssetMessageDelete(json);
		expect(reply.getCompanyId()).toBe(999);
	});

	it('should handle assetMessage with deleted status', () => {
		const json: JsonObject = {
			assetMessage: {
				id: 111,
				company: 222,
				deleted: false
			}
		};
		const reply = new RepAssetMessageDelete(json);
		expect(reply.assetMessage!.deleted).toBe(false);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			assetMessage: {
				id: 555,
				company: 100,
				deleted: true
			}
		};
		const reply = new RepAssetMessageDelete(json);
		const output = reply.toJSON();
		expect(output.assetMessage).toBeDefined();
		expect(output.assetMessage.id).toBe(555);
		expect(output.assetMessage.company).toBe(100);
		expect(output.assetMessage.deleted).toBe(true);
	});
});