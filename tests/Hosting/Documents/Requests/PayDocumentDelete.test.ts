import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../src/API/Requests/Payload";
import { PayDocumentDelete } from "../../../../src/Hosting/Documents/Requests/PayDocumentDelete";
import { RepDocumentDelete } from "../../../../src/Hosting/Documents/Responses/RepDocumentDelete";

describe('PayDocumentDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDocumentDelete();
		expect(payload).toBeInstanceOf(PayDocumentDelete);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			document: {
				id: 777
			},
			reqId: 3
		};
		const payload = new PayDocumentDelete(json);
		expect(payload.document.id).toBe(777);
		expect(payload.reqId).toBe(3);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayDocumentDelete();
		const replyJson: JsonObject = { document: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepDocumentDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			document: {
				id: 777
			},
			reqId: 3
		};
		const payload = new PayDocumentDelete(json);
		const output = payload.toJSON();
		expect(output.document).toBeDefined();
		expect(output.document.id).toBe(777);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDocumentDelete();
		expect(payload.action()).toBe("Document.Delete");
		expect(payload.actionShort()).toBe("DocumentDelete");
		expect(payload.actionNormalized()).toBe("document_delete");
	});
});
