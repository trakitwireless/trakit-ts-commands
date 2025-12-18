import { Document, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepDocumentDelete } from "../../../../commands/Hosting/Documents/Responses/RepDocumentDelete";

describe('RepDocumentDelete', () => {
	it('should create instance with empty constructor', () => {
		const reply = new RepDocumentDelete();
		expect(reply).toBeInstanceOf(RepDocumentDelete);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			document: {
				id: 777
			},
			reqId: 3
		};
		const reply = new RepDocumentDelete(json);
		expect(reply.document).toBeInstanceOf(Document);
		expect(reply.document.id).toBe(777);
		expect(reply.reqId).toBe(3);
	});

	it('should get object with getObject method', () => {
		const json: JsonObject = {
			document: {
				id: 888
			}
		};
		const reply = new RepDocumentDelete(json);
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
		const reply = new RepDocumentDelete(json);
		const companyId = reply.getCompanyId();
		expect(companyId).toBe(123);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			document: {
				id: 777
			},
			reqId: 3
		};
		const reply = new RepDocumentDelete(json);
		const output = reply.toJSON();
		expect(output.document).toBeDefined();
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const reply = new RepDocumentDelete();
		expect(reply.action()).toBe("Document.Delete");
		expect(reply.actionShort()).toBe("DocumentDelete");
		expect(reply.actionNormalized()).toBe("document_delete");
	});
});
