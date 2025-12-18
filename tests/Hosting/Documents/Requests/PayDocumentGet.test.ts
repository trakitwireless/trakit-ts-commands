import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayDocumentGet } from "../../../../commands/Hosting/Documents/Requests/PayDocumentGet";
import { RepDocumentGet } from "../../../../commands/Hosting/Documents/Responses/RepDocumentGet";

describe('PayDocumentGet', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDocumentGet();
		expect(payload).toBeInstanceOf(PayDocumentGet);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			document: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayDocumentGet(json);
		expect(payload.document.id).toBe(777);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(3);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			document: { id: 888 },
			includeDeleted: false
		};
		const payload = new PayDocumentGet(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayDocumentGet();
		const replyJson: JsonObject = { document: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepDocumentGet);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			document: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayDocumentGet(json);
		const output = payload.toJSON();
		expect(output.document).toBeDefined();
		expect(output.document.id).toBe(777);
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDocumentGet();
		expect(payload.action()).toBe("Document.Get");
		expect(payload.actionShort()).toBe("DocumentGet");
		expect(payload.actionNormalized()).toBe("document_get");
	});
});
