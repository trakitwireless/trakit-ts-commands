import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { PayPlaceBatchMerge } from "../../../src/../src/Places/Requests/PayPlaceBatchMerge";
import { Payload } from "../../../src/API/Requests/Payload";
import { ParamPlaceMerge } from "../../../src/Places/Requests/Parameters/ParamPlaceMerge";
import { RepPlaceBatchMerge } from "../../../src/Places/Responses/RepPlaceBatchMerge";

describe('PayPlaceBatchMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayPlaceBatchMerge();
		expect(payload).toBeInstanceOf(PayPlaceBatchMerge);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.places).toEqual([]);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			places: [
				{ company: 100, name: "Place 1", kind: 1, icon: 10 },
				{ company: 100, name: "Place 2", kind: 2, icon: 11 }
			],
			reqId: 7
		};
		const payload = new PayPlaceBatchMerge(json);
		expect(payload.places).toHaveLength(2);
		expect(payload.places[0]).toBeInstanceOf(ParamPlaceMerge);
		expect(payload.places[0].name).toBe("Place 1");
		expect(payload.places[1].name).toBe("Place 2");
		expect(payload.reqId).toBe(7);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayPlaceBatchMerge();
		const replyJson: JsonObject = { places: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepPlaceBatchMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			places: [
				{ company: 100, name: "Place 1", kind: 1, icon: 10 },
				{ company: 100, name: "Place 2", kind: 2, icon: 11 }
			],
			reqId: 7
		};
		const payload = new PayPlaceBatchMerge(json);
		const output = payload.toJSON();
		expect(output.places).toBeDefined();
		expect(output.places).toHaveLength(2);
		expect(output.places[0].company).toBe(100);
		expect(output.places[0].name).toBe("Place 1");
		expect(output.places[0].kind).toBe(1);
		expect(output.places[0].icon).toBe(10);
		expect(output.places[1].company).toBe(100);
		expect(output.places[1].name).toBe("Place 2");
		expect(output.places[1].kind).toBe(2);
		expect(output.places[1].icon).toBe(11);
		expect(output.reqId).toBe(7);
	});

	it('should return correct action metadata', () => {
		const payload = new PayPlaceBatchMerge();
		const action = payload.getAction();
		expect(action.kind).toBe("Merge");
		expect(action.object).toBe("Place");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(true);
	});
});