import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../commands/Places/../API/Requests/Payload";
import { ParamPlaceMerge } from "../../../commands/Places/Requests/Parameters/ParamPlaceMerge";
import { PayPlaceMerge } from "../../../commands/Places/Requests/PayPlaceMerge";
import { RepPlaceMerge } from "../../../commands/Places/Responses/RepPlaceMerge";

describe('PayPlaceMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayPlaceMerge();
		expect(payload).toBeInstanceOf(PayPlaceMerge);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.place).toBeInstanceOf(ParamPlaceMerge);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			place: {
				company: 100,
				name: "Test Place",
				kind: 1,
				icon: 5
			},
			reqId: 6
		};
		const payload = new PayPlaceMerge(json);
		expect(payload.place).toBeInstanceOf(ParamPlaceMerge);
		expect(payload.place.name).toBe("Test Place");
		expect(payload.place.company).toBe(100);
		expect(payload.reqId).toBe(6);
	});

	it('should implement getKey method', () => {
		const json: JsonObject = {
			place: {
				id: 444,
				name: "Place"
			}
		};
		const payload = new PayPlaceMerge(json);
		expect(payload.getKey()).toBe("444");
	});

	it('should return empty string from getKey when id is not set', () => {
		const payload = new PayPlaceMerge();
		expect(payload.getKey()).toBe("");
	});

	it('should create reply with createReply method', () => {
		const payload = new PayPlaceMerge();
		const replyJson: JsonObject = { place: { id: 1, company: 1 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepPlaceMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			place: {
				company: 100,
				name: "Test Place",
				kind: 1,
				icon: 5
			},
			reqId: 6
		};
		const payload = new PayPlaceMerge(json);
		const output = payload.toJSON();
		expect(output.place).toBeDefined();
		expect(output.place.company).toBe(100);
		expect(output.place.name).toBe("Test Place");
		expect(output.place.kind).toBe(1);
		expect(output.place.icon).toBe(5);
		expect(output.reqId).toBe(6);
	});

	it('should return correct action metadata', () => {
		const payload = new PayPlaceMerge();
		const action = payload.getAction();
		expect(action.kind).toBe("Merge");
		expect(action.object).toBe("Place");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(false);
	});
});