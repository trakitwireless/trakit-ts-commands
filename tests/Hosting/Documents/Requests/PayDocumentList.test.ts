import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayDocumentListAll } from "../../../../commands/Hosting/Documents/Requests/PayDocumentList";
import { RepDocumentListAll } from "../../../../commands/Hosting/Documents/Responses/RepDocumentList";

describe('PayDocumentListAll', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDocumentListAll();
		expect(payload).toBeInstanceOf(PayDocumentListAll);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayDocumentListAll(json);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(4);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			includeDeleted: false
		};
		const payload = new PayDocumentListAll(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayDocumentListAll();
		const replyJson: JsonObject = { documents: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepDocumentListAll);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayDocumentListAll(json);
		const output = payload.toJSON();
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(4);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDocumentListAll();
		expect(payload.action()).toBe("Document.List");
		expect(payload.actionShort()).toBe("DocumentList");
		expect(payload.actionNormalized()).toBe("document_list");
	});
});
