import { Document, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepDocumentBatchMerge } from "../../../../src/Hosting/Documents/Responses/RepDocumentBatchMerge";

describe('RepDocumentBatchMerge', () => {
	it('should create instance with empty constructor', () => {
		const reply = new RepDocumentBatchMerge();
		expect(reply).toBeInstanceOf(RepDocumentBatchMerge);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			documents: [
				{ id: 777, name: "Document One" },
				{ id: 888, name: "Document Two" }
			],
			reqId: 3
		};
		const reply = new RepDocumentBatchMerge(json);
		expect(reply.documents).toHaveLength(2);
		expect(reply.documents[0]).toBeInstanceOf(Document);
		expect(reply.documents[0].id).toBe(777);
		expect(reply.documents[1].id).toBe(888);
		expect(reply.reqId).toBe(3);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			documents: [
				{ id: 777, name: "Document One" },
				{ id: 888, name: "Document Two" }
			],
			reqId: 3
		};
		const reply = new RepDocumentBatchMerge(json);
		const output = reply.toJSON();
		expect(output.documents).toBeDefined();
		expect(output.documents).toHaveLength(2);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const reply = new RepDocumentBatchMerge();
		expect(reply.action()).toBe("Document.BatchMerge");
		expect(reply.actionShort()).toBe("DocumentBatchMerge");
		expect(reply.actionNormalized()).toBe("document_batch_merge");
	});
});
