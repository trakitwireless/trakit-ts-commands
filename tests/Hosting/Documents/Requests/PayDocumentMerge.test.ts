import { Document, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayDocumentMerge } from "../../../../commands/Hosting/Documents/Requests/PayDocumentMerge";
import { RepDocumentMerge } from "../../../../commands/Hosting/Documents/Responses/RepDocumentMerge";

describe('PayDocumentMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDocumentMerge();
		expect(payload).toBeInstanceOf(PayDocumentMerge);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			document: {
				id: 789,
				name: "Test Document"
			},
			reqId: 3
		};
		const payload = new PayDocumentMerge(json);
		expect(payload.document.id).toBe(789);
		expect(payload.document.name).toBe("Test Document");
		expect(payload.reqId).toBe(3);
	});

	it('should handle getKey method', () => {
		const payload = new PayDocumentMerge();
		const document = new Document({ id: 789, name: "Key Test" });
		const key = payload.getKey(document);
		expect(key).toBe(789);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayDocumentMerge();
		const replyJson: JsonObject = { document: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepDocumentMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			document: {
				id: 789,
				name: "Test Document"
			},
			reqId: 3
		};
		const payload = new PayDocumentMerge(json);
		const output = payload.toJSON();
		expect(output.document).toBeDefined();
		expect(output.document.id).toBe(789);
		expect(output.document.name).toBe("Test Document");
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDocumentMerge();
		expect(payload.action()).toBe("Document.Merge");
		expect(payload.actionShort()).toBe("DocumentMerge");
		expect(payload.actionNormalized()).toBe("document_merge");
	});
});
