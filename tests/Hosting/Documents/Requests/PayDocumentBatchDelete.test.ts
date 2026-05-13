import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../src/API/Requests/Payload";
import { PayDocumentBatchDelete } from "../../../../src/Hosting/Documents/Requests/PayDocumentBatchDelete";
import { RepDocumentBatchDelete } from "../../../../src/Hosting/Documents/Responses/RepDocumentBatchDelete";

describe('PayDocumentBatchDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDocumentBatchDelete();
		expect(payload).toBeInstanceOf(PayDocumentBatchDelete);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			documents: [
				{ id: 777 },
				{ id: 888 }
			],
			reqId: 3
		};
		const payload = new PayDocumentBatchDelete(json);
		expect(payload.documents).toHaveLength(2);
		expect(payload.documents[0].id).toBe(777);
		expect(payload.documents[1].id).toBe(888);
		expect(payload.reqId).toBe(3);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayDocumentBatchDelete();
		const replyJson: JsonObject = { documents: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepDocumentBatchDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			documents: [
				{ id: 777 },
				{ id: 888 }
			],
			reqId: 3
		};
		const payload = new PayDocumentBatchDelete(json);
		const output = payload.toJSON();
		expect(output.documents).toBeDefined();
		expect(output.documents).toHaveLength(2);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDocumentBatchDelete();
		expect(payload.action()).toBe("Document.BatchDelete");
		expect(payload.actionShort()).toBe("DocumentBatchDelete");
		expect(payload.actionNormalized()).toBe("document_batch_delete");
	});
});
