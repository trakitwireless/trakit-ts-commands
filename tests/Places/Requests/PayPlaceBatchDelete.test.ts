import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../commands/API/Requests/Payload";
import { PayPlaceBatchDelete } from "../../../commands/Places/Requests/PayPlaceBatchDelete";
import { RepPlaceBatchDelete } from "../../../commands/Places/Responses/RepPlaceBatchDelete";

describe('PayPlaceBatchDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayPlaceBatchDelete();
		expect(payload).toBeInstanceOf(PayPlaceBatchDelete);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.places).toEqual([]);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			places: [
				{ id: 111 },
				{ id: 222 },
				{ id: 333 }
			],
			reqId: 5
		};
		const payload = new PayPlaceBatchDelete(json);
		expect(payload.places).toHaveLength(3);
		expect(payload.places[0]).toBeInstanceOf(ParamId);
		expect(payload.places[0].id).toBe(111);
		expect(payload.places[1].id).toBe(222);
		expect(payload.places[2].id).toBe(333);
		expect(payload.reqId).toBe(5);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayPlaceBatchDelete();
		const replyJson: JsonObject = { places: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepPlaceBatchDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			places: [
				{ id: 111 },
				{ id: 222 },
				{ id: 333 }
			],
			reqId: 5
		};
		const payload = new PayPlaceBatchDelete(json);
		const output = payload.toJSON();
		expect(output.places).toBeDefined();
		expect(output.places).toHaveLength(3);
		expect(output.places[0].id).toBe(111);
		expect(output.places[1].id).toBe(222);
		expect(output.places[2].id).toBe(333);
		expect(output.reqId).toBe(5);
	});

	it('should return correct action metadata', () => {
		const payload = new PayPlaceBatchDelete();
		const action = payload.getAction();
		expect(action.kind).toBe("Delete");
		expect(action.object).toBe("Place");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(true);
	});
});