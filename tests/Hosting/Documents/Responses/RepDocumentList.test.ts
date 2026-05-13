import { Document, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepDocumentListAll } from "../../../../src/Hosting/Documents/Responses/RepDocumentList";

describe('RepDocumentListAll', () => {
	it('should create instance with empty constructor', () => {
		const reply = new RepDocumentListAll();
		expect(reply).toBeInstanceOf(RepDocumentListAll);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			documents: [
				{ id: 777, name: "Document One" },
				{ id: 888, name: "Document Two" }
			],
			reqId: 3
		};
		const reply = new RepDocumentListAll(json);
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
		const reply = new RepDocumentListAll(json);
		const output = reply.toJSON();
		expect(output.documents).toBeDefined();
		expect(output.documents).toHaveLength(2);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const reply = new RepDocumentListAll();
		expect(reply.action()).toBe("Document.List");
		expect(reply.actionShort()).toBe("DocumentList");
		expect(reply.actionNormalized()).toBe("document_list");
	});
});
