import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../src/API/Requests/Payload";
import { PayPlace } from "../../../src/Places/Requests/PayPlace";
import { PayPlaceDelete } from "../../../src/Places/Requests/PayPlaceDelete";
import { RepPlaceDelete } from "../../../src/Places/Responses/RepPlaceDelete";

describe('PayPlaceDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayPlaceDelete();
		expect(payload).toBeInstanceOf(PayPlaceDelete);
		expect(payload).toBeInstanceOf(PayPlace);
		expect(payload).toBeInstanceOf(Payload);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			place: {
				id: 555
			},
			reqId: 2
		};
		const payload = new PayPlaceDelete(json);
		expect(payload.place.id).toBe(555);
		expect(payload.reqId).toBe(2);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayPlaceDelete();
		const replyJson: JsonObject = { place: { id: 123 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepPlaceDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			place: {
				id: 555
			},
			reqId: 2
		};
		const payload = new PayPlaceDelete(json);
		const output = payload.toJSON();
		expect(output.place).toBeDefined();
		expect(output.place.id).toBe(555);
		expect(output.reqId).toBe(2);
	});

	it('should return correct action metadata', () => {
		const payload = new PayPlaceDelete();
		const action = payload.getAction();
		expect(action.kind).toBe("Delete");
		expect(action.object).toBe("Place");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(false);
	});
});