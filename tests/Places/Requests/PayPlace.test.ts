import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../src/API/Requests/Parameters/ParamId";
import { Payload } from "../../../src/API/Requests/Payload";
import { PayPlace } from "../../../src/Places/Requests/PayPlace";
import { PayPlaceDelete } from "../../../src/Places/Requests/PayPlaceDelete";

describe('PayPlace', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayPlaceDelete();
		expect(payload).toBeInstanceOf(PayPlaceDelete);
		expect(payload).toBeInstanceOf(PayPlace);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.place).toBeInstanceOf(ParamId);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			place: {
				id: 12345
			},
			reqId: 1
		};
		const payload = new PayPlaceDelete(json);
		expect(payload.place).toBeInstanceOf(ParamId);
		expect(payload.place.id).toBe(12345);
		expect(payload.reqId).toBe(1);
	});

	it('should implement getKey method', () => {
		const json: JsonObject = {
			place: {
				id: 99999
			}
		};
		const payload = new PayPlaceDelete(json);
		expect(payload.getKey()).toBe("99999");
	});

	it('should return empty string from getKey when id is not set', () => {
		const payload = new PayPlaceDelete();
		expect(payload.getKey()).toBe("");
	});
});