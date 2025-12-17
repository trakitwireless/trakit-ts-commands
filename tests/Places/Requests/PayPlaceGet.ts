import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../commands/API/Requests/Payload";
import { PayPlaceGet } from "../../../commands/Places/Requests/PayPlaceGet";
import { RepPlaceGet } from "../../../commands/Places/Responses/RepPlaceGet";

describe('PayPlaceGet', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayPlaceGet();
		expect(payload).toBeInstanceOf(PayPlaceGet);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			place: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayPlaceGet(json);
		expect(payload.place.id).toBe(777);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(3);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			place: { id: 888 },
			includeDeleted: false
		};
		const payload = new PayPlaceGet(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayPlaceGet();
		const replyJson: JsonObject = { place: {} };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepPlaceGet);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			place: {
				id: 777
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayPlaceGet(json);
		const output = payload.toJSON();
		expect(output.place).toBeDefined();
		expect(output.place.id).toBe(777);
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayPlaceGet();
		const action = payload.getAction();
		expect(action.kind).toBe("Get");
		expect(action.object).toBe("Place");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(false);
	});
});