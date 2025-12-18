import { Document, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepDocumentGet } from "../../../../commands/Hosting/Documents/Responses/RepDocumentGet";

describe('RepDocumentGet', () => {
	it('should create instance with empty constructor', () => {
		const reply = new RepDocumentGet();
		expect(reply).toBeInstanceOf(RepDocumentGet);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			document: {
				id: 777,
				name: "Test Document"
			},
			reqId: 3
		};
		const reply = new RepDocumentGet(json);
		expect(reply.document).toBeInstanceOf(Document);
		expect(reply.document.id).toBe(777);
		expect(reply.document.name).toBe("Test Document");
		expect(reply.reqId).toBe(3);
	});

	it('should get object with getObject method', () => {
		const json: JsonObject = {
			document: {
				id: 888,
				name: "Another Document"
			}
		};
		const reply = new RepDocumentGet(json);
		const object = reply.getObject();
		expect(object).toBeInstanceOf(Document);
		expect(object.id).toBe(888);
	});

	it('should get company ID with getCompanyId method', () => {
		const json: JsonObject = {
			document: {
				id: 999,
				companyId: 123
			}
		};
		const reply = new RepDocumentGet(json);
		const companyId = reply.getCompanyId();
		expect(companyId).toBe(123);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			document: {
				id: 777,
				name: "Test Document"
			},
			reqId: 3
		};
		const reply = new RepDocumentGet(json);
		const output = reply.toJSON();
		expect(output.document).toBeDefined();
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const reply = new RepDocumentGet();
		expect(reply.action()).toBe("Document.Get");
		expect(reply.actionShort()).toBe("DocumentGet");
		expect(reply.actionNormalized()).toBe("document_get");
	});
});
