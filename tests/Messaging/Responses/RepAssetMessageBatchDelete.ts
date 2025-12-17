import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepAssetMessageBatchDelete } from "../../../commands/Messaging/Responses/RepAssetMessageBatchDelete";
import { ContentIdDeleted } from "../../../commands/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../commands/API/Responses/Reply";
import { ReplySyncBatchDelete } from "../../../commands/API/Responses/ReplySyncBatchDelete";

describe('RepAssetMessageBatchDelete', () => {
	it('should create instance with empty assetMessages array', () => {
		const json: JsonObject = {
			assetMessages: []
		};
		const reply = new RepAssetMessageBatchDelete(json);
		expect(reply).toBeInstanceOf(RepAssetMessageBatchDelete);
		expect(reply).toBeInstanceOf(ReplySyncBatchDelete);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.assetMessages).toEqual([]);
	});

	it('should create instance with assetMessages data', () => {
		const json: JsonObject = {
			assetMessages: [
				{ id: 111, company: 100, deleted: true },
				{ id: 222, company: 100, deleted: true },
				{ id: 333, company: 100, deleted: false }
			]
		};
		const reply = new RepAssetMessageBatchDelete(json);
		expect(reply.assetMessages).toHaveLength(3);
		expect(reply.assetMessages![0]).toBeInstanceOf(ContentIdDeleted);
		expect(reply.assetMessages![0].id).toBe(111);
		expect(reply.assetMessages![0].company).toBe(100);
		expect(reply.assetMessages![1].id).toBe(222);
		expect(reply.assetMessages![2].id).toBe(333);
	});

	it('should implement getCompanyId method', () => {
		const json: JsonObject = {
			assetMessages: [
				{ id: 111, company: 999, deleted: true }
			]
		};
		const reply = new RepAssetMessageBatchDelete(json);
		expect(reply.getCompanyId()).toBe(999);
	});

	it('should implement getResults method', () => {
		const json: JsonObject = {
			assetMessages: [
				{ id: 111, company: 100, deleted: true },
				{ id: 222, company: 100, deleted: true }
			]
		};
		const reply = new RepAssetMessageBatchDelete(json);
		const results = reply.getResults();
		expect(results).toHaveLength(2);
		expect(results![0]).toBeInstanceOf(ContentIdDeleted);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			assetMessages: [
				{ id: 111, company: 100, deleted: true },
				{ id: 222, company: 100, deleted: true },
				{ id: 333, company: 100, deleted: false }
			]
		};
		const reply = new RepAssetMessageBatchDelete(json);
		const output = reply.toJSON();
		expect(output.assetMessages).toBeDefined();
		expect(output.assetMessages).toHaveLength(3);
		expect(output.assetMessages[0].id).toBe(111);
		expect(output.assetMessages[0].company).toBe(100);
		expect(output.assetMessages[0].deleted).toBe(true);
		expect(output.assetMessages[1].id).toBe(222);
		expect(output.assetMessages[1].deleted).toBe(true);
		expect(output.assetMessages[2].id).toBe(333);
		expect(output.assetMessages[2].deleted).toBe(false);
	});
});