import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../commands/API/Requests/Payload";
import { PayPlaceListByCompany } from "../../../commands/Places/Requests/PayPlaceList";
import { RepPlaceListByCompany } from "../../../commands/Places/Responses/RepPlaceList";

describe('PayPlaceListByCompany', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayPlaceListByCompany();
		expect(payload).toBeInstanceOf(PayPlaceListByCompany);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
		expect(payload.company).toBeInstanceOf(ParamId);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			company: {
				id: 999
			},
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayPlaceListByCompany(json);
		expect(payload.company).toBeInstanceOf(ParamId);
		expect(payload.company.id).toBe(999);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(4);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			company: { id: 1000 },
			includeDeleted: false
		};
		const payload = new PayPlaceListByCompany(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayPlaceListByCompany();
		const replyJson: JsonObject = { places: [], company: { id: 1 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepPlaceListByCompany);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			company: {
				id: 999
			},
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayPlaceListByCompany(json);
		const output = payload.toJSON();
		expect(output.company).toBeDefined();
		expect(output.company.id).toBe(999);
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(4);
	});

	it('should return correct action metadata', () => {
		const payload = new PayPlaceListByCompany();
		const action = payload.getAction();
		expect(action.kind).toBe("List");
		expect(action.object).toBe("Place");
		expect(action.filter).toBe("Company");
		expect(action.batch).toBe(false);
	});
});