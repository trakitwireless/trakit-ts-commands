import { JsonObject, AssetMessage } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentId } from "../../../src/API/Responses/Content/ContentId";
import { Reply } from "../../../src/API/Responses/Reply";
import { RepAssetMessageListByCompany, RepAssetMessageListByAsset } from "../../../src/Messaging/Responses/RepAssetMessageList";

describe('RepAssetMessageListByCompany', () => {
	it('should create instance with empty assetMessages array', () => {
		const json: JsonObject = {
			assetMessages: [],
			company: { id: 100 }
		};
		const reply = new RepAssetMessageListByCompany(json);
		expect(reply).toBeInstanceOf(RepAssetMessageListByCompany);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.assetMessages).toEqual([]);
		expect(reply.company).toBeInstanceOf(ContentId);
	});

	it('should create instance with assetMessages data', () => {
		const json: JsonObject = {
			assetMessages: [
				{ id: 111, assetId: 100, companyId: 100, kind: 1, folder: 1, subject: "Message 1" },
				{ id: 222, assetId: 200, companyId: 100, kind: 2, folder: 1, subject: "Message 2" },
				{ id: 333, assetId: 300, companyId: 100, kind: 1, folder: 2, subject: "Message 3" }
			],
			company: { id: 100 }
		};
		const reply = new RepAssetMessageListByCompany(json);
		expect(reply.assetMessages).toHaveLength(3);
		expect(reply.assetMessages![0]).toBeInstanceOf(AssetMessage);
		expect(reply.assetMessages![0].id).toBe(111);
		expect(reply.assetMessages![0].subject).toBe("Message 1");
		expect(reply.assetMessages![1].id).toBe(222);
		expect(reply.assetMessages![2].id).toBe(333);
	});

	it('should implement getList method', () => {
		const json: JsonObject = {
			assetMessages: [
				{ id: 111, assetId: 100, companyId: 100, subject: "Message 1" },
				{ id: 222, assetId: 200, companyId: 100, subject: "Message 2" }
			],
			company: { id: 100 }
		};
		const reply = new RepAssetMessageListByCompany(json);
		const list = reply.getList();
		expect(list).toHaveLength(2);
		expect(list![0]).toBeInstanceOf(AssetMessage);
	});

	it('should implement getCompanyId method', () => {
		const json: JsonObject = {
			assetMessages: [],
			company: { id: 999 }
		};
		const reply = new RepAssetMessageListByCompany(json);
		expect(reply.getCompanyId()).toBe(999);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			assetMessages: [
				{ id: 111, assetId: 100, companyId: 100, kind: 1, folder: 1, subject: "Message 1" },
				{ id: 222, assetId: 200, companyId: 100, kind: 2, folder: 1, subject: "Message 2" }
			],
			company: { id: 100 }
		};
		const reply = new RepAssetMessageListByCompany(json);
		const output = reply.toJSON();
		expect(output.assetMessages).toBeDefined();
		expect(output.assetMessages).toHaveLength(2);
		expect(output.assetMessages[0].id).toBe(111);
		expect(output.assetMessages[0].subject).toBe("Message 1");
		expect(output.assetMessages[1].id).toBe(222);
		expect(output.company).toBeDefined();
		expect(output.company.id).toBe(100);
	});
});

describe('RepAssetMessageListByAsset', () => {
	it('should create instance with empty assetMessages array', () => {
		const json: JsonObject = {
			assetMessages: [],
			asset: { id: 100 }
		};
		const reply = new RepAssetMessageListByAsset(json);
		expect(reply).toBeInstanceOf(RepAssetMessageListByAsset);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.assetMessages).toEqual([]);
		expect(reply.asset).toBeInstanceOf(ContentId);
	});

	it('should create instance with assetMessages data', () => {
		const json: JsonObject = {
			assetMessages: [
				{ id: 111, assetId: 500, companyId: 100, kind: 1, folder: 1, subject: "Message 1" },
				{ id: 222, assetId: 500, companyId: 100, kind: 2, folder: 1, subject: "Message 2" }
			],
			asset: { id: 500 }
		};
		const reply = new RepAssetMessageListByAsset(json);
		expect(reply.assetMessages).toHaveLength(2);
		expect(reply.assetMessages![0]).toBeInstanceOf(AssetMessage);
		expect(reply.assetMessages![0].id).toBe(111);
		expect(reply.assetMessages![0].subject).toBe("Message 1");
		expect(reply.assetMessages![1].id).toBe(222);
	});

	it('should implement getList method', () => {
		const json: JsonObject = {
			assetMessages: [
				{ id: 111, assetId: 500, companyId: 100, subject: "Message 1" },
				{ id: 222, assetId: 500, companyId: 100, subject: "Message 2" }
			],
			asset: { id: 500 }
		};
		const reply = new RepAssetMessageListByAsset(json);
		const list = reply.getList();
		expect(list).toHaveLength(2);
		expect(list![0]).toBeInstanceOf(AssetMessage);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			assetMessages: [
				{ id: 111, assetId: 500, companyId: 100, kind: 1, folder: 1, subject: "Message 1" },
				{ id: 222, assetId: 500, companyId: 100, kind: 2, folder: 1, subject: "Message 2" }
			],
			asset: { id: 500 }
		};
		const reply = new RepAssetMessageListByAsset(json);
		const output = reply.toJSON();
		expect(output.assetMessages).toBeDefined();
		expect(output.assetMessages).toHaveLength(2);
		expect(output.assetMessages[0].id).toBe(111);
		expect(output.assetMessages[0].subject).toBe("Message 1");
		expect(output.assetMessages[1].id).toBe(222);
		expect(output.asset).toBeDefined();
		expect(output.asset.id).toBe(500);
	});
});