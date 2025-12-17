import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../commands/Places/../API/Requests/Payload";
import { PayPlaceRestore } from "../../../commands/Places/Requests/PayPlaceRestore";
import { RepPlaceDelete } from "../../../commands/Places/Responses/RepPlaceDelete";

describe('PayPlaceRestore', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayPlaceRestore();
		expect(payload).toBeInstanceOf(PayPlaceRestore);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			place: {
				id: 666
			},
			reqId: 8
		};
		const payload = new PayPlaceRestore(json);
		expect(payload.place.id).toBe(666);
		expect(payload.reqId).toBe(8);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayPlaceRestore();
		const replyJson: JsonObject = { place: { id: 123 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepPlaceDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			place: {
				id: 666
			},
			reqId: 8
		};
		const payload = new PayPlaceRestore(json);
		const output = payload.toJSON();
		expect(output.place).toBeDefined();
		expect(output.place.id).toBe(666);
		expect(output.reqId).toBe(8);
	});
});