import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayDocumentRestore } from "../../../../commands/Hosting/Documents/Requests/PayDocumentRestore";

describe('PayDocumentRestore', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDocumentRestore();
		expect(payload).toBeInstanceOf(PayDocumentRestore);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			document: {
				id: 777
			},
			reqId: 3
		};
		const payload = new PayDocumentRestore(json);
		expect(payload.document.id).toBe(777);
		expect(payload.reqId).toBe(3);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			document: {
				id: 777
			},
			reqId: 3
		};
		const payload = new PayDocumentRestore(json);
		const output = payload.toJSON();
		expect(output.document).toBeDefined();
		expect(output.document.id).toBe(777);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDocumentRestore();
		expect(payload.action()).toBe("Document.Restore");
		expect(payload.actionShort()).toBe("DocumentRestore");
		expect(payload.actionNormalized()).toBe("document_restore");
	});
});
