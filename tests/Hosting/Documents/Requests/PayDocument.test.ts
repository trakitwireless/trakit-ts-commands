import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayDocument } from "../../../../commands/Hosting/Documents/Requests/PayDocument";

describe('PayDocument', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayDocument();
		expect(payload).toBeInstanceOf(PayDocument);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			document: {
				id: 777
			},
			reqId: 3
		};
		const payload = new PayDocument(json);
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
		const payload = new PayDocument(json);
		const output = payload.toJSON();
		expect(output.document).toBeDefined();
		expect(output.document.id).toBe(777);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayDocument();
		expect(payload.action()).toBe("Document.Document");
		expect(payload.actionShort()).toBe("Document");
		expect(payload.actionNormalized()).toBe("document");
	});
});
