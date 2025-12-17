import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepAssetMessageBatchMerge } from "../../../commands/Messaging/Responses/RepAssetMessageBatchMerge";
import { ContentIdCompany } from "../../../commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../commands/API/Responses/Reply";

describe('RepAssetMessageBatchMerge', () => {
	it('should create instance with empty assetMessages array', () => {
		const json: JsonObject = {
			assetMessages: []
		};
		const reply = new RepAssetMessageBatchMerge(json);
		expect(reply).toBeInstanceOf(RepAssetMessageBatchMerge);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.assetMessages).toEqual([]);
	});

	it('should create instance with assetMessages data', () => {
		const json: JsonObject = {
			assetMessages: [
				{ id: 111, company: 100 },
				{ id: 222, company: 100 },
				{ id: 333, company: 200 }
			]
		};
		const reply = new RepAssetMessageBatchMerge(json);
		expect(reply.assetMessages).toHaveLength(3);
		expect(reply.assetMessages![0]).toBeInstanceOf(ContentIdCompany);
		expect(reply.assetMessages![0].id).toBe(111);
		expect(reply.assetMessages![0].company).toBe(100);
		expect(reply.assetMessages![1].id).toBe(222);
		expect(reply.assetMessages![2].company).toBe(200);
	});

	it('should handle single assetMessage result', () => {
		const json: JsonObject = {
			assetMessages: [
				{ id: 999, company: 888 }
			]
		};
		const reply = new RepAssetMessageBatchMerge(json);
		expect(reply.assetMessages).toHaveLength(1);
		expect(reply.assetMessages![0].id).toBe(999);
		expect(reply.assetMessages![0].company).toBe(888);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			assetMessages: [
				{ id: 111, company: 100 },
				{ id: 222, company: 100 },
				{ id: 333, company: 200 }
			]
		};
		const reply = new RepAssetMessageBatchMerge(json);
		const output = reply.toJSON();
		expect(output.assetMessages).toBeDefined();
		expect(output.assetMessages).toHaveLength(3);
		expect(output.assetMessages[0].id).toBe(111);
		expect(output.assetMessages[0].company).toBe(100);
		expect(output.assetMessages[1].id).toBe(222);
		expect(output.assetMessages[1].company).toBe(100);
		expect(output.assetMessages[2].id).toBe(333);
		expect(output.assetMessages[2].company).toBe(200);
	});
});