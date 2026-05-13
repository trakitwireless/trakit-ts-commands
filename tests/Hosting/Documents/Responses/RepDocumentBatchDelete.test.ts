import { Document, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepDocumentBatchDelete } from "../../../../src/Hosting/Documents/Responses/RepDocumentBatchDelete";

describe('RepDocumentBatchDelete', () => {
	it('should create instance with empty constructor', () => {
		const reply = new RepDocumentBatchDelete();
		expect(reply).toBeInstanceOf(RepDocumentBatchDelete);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			documents: [
				{ id: 777 },
				{ id: 888 }
			],
			reqId: 3
		};
		const reply = new RepDocumentBatchDelete(json);
		expect(reply.documents).toHaveLength(2);
		expect(reply.documents[0]).toBeInstanceOf(Document);
		expect(reply.documents[0].id).toBe(777);
		expect(reply.documents[1].id).toBe(888);
		expect(reply.reqId).toBe(3);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			documents: [
				{ id: 777 },
				{ id: 888 }
			],
			reqId: 3
		};
		const reply = new RepDocumentBatchDelete(json);
		const output = reply.toJSON();
		expect(output.documents).toBeDefined();
		expect(output.documents).toHaveLength(2);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const reply = new RepDocumentBatchDelete();
		expect(reply.action()).toBe("Document.BatchDelete");
		expect(reply.actionShort()).toBe("DocumentBatchDelete");
		expect(reply.actionNormalized()).toBe("document_batch_delete");
	});
});
