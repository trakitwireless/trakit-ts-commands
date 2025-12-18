import { Document, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayDocumentBatchMerge } from "../../../../commands/Hosting/Documents/Requests/PayDocumentBatchMerge";
import { RepDocumentBatchMerge } from "../../../../commands/Hosting/Documents/Responses/RepDocumentBatchMerge";

describe('PayDocumentBatchMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDocumentBatchMerge();
		expect(payload).toBeInstanceOf(PayDocumentBatchMerge);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			documents: [
				{ id: 777, name: "Document One" },
				{ id: 888, name: "Document Two" }
			],
			reqId: 3
		};
		const payload = new PayDocumentBatchMerge(json);
		expect(payload.documents).toHaveLength(2);
		expect(payload.documents[0].id).toBe(777);
		expect(payload.documents[1].id).toBe(888);
		expect(payload.reqId).toBe(3);
	});

	it('should handle getKey method', () => {
		const payload = new PayDocumentBatchMerge();
		const document = new Document({ id: 789, name: "Key Test" });
		const key = payload.getKey(document);
		expect(key).toBe(789);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayDocumentBatchMerge();
		const replyJson: JsonObject = { documents: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepDocumentBatchMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			documents: [
				{ id: 777, name: "Document One" },
				{ id: 888, name: "Document Two" }
			],
			reqId: 3
		};
		const payload = new PayDocumentBatchMerge(json);
		const output = payload.toJSON();
		expect(output.documents).toBeDefined();
		expect(output.documents).toHaveLength(2);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDocumentBatchMerge();
		expect(payload.action()).toBe("Document.BatchMerge");
		expect(payload.actionShort()).toBe("DocumentBatchMerge");
		expect(payload.actionNormalized()).toBe("document_batch_merge");
	});
});
