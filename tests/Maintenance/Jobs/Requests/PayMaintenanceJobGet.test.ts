import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../../src/API/Requests/Parameters/ParamId";
import { Payload } from "../../../../src/API/Requests/Payload";
import { PayMaintenanceJobGet } from "../../../../src/Maintenance/Jobs/Requests/PayMaintenanceJobGet";
import { RepMaintenanceJobGet } from "../../../../src/Maintenance/Jobs/Responses/RepMaintenanceJobGet";

describe('PayMaintenanceJobGet', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayMaintenanceJobGet();
		expect(payload).toBeInstanceOf(PayMaintenanceJobGet);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
		expect(payload.maintenanceJob).toBeInstanceOf(ParamId);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			maintenanceJob: {
				id: 555
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayMaintenanceJobGet(json);
		expect(payload.maintenanceJob).toBeInstanceOf(ParamId);
		expect(payload.maintenanceJob.id).toBe(555);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(3);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			maintenanceJob: { id: 999 },
			includeDeleted: false
		};
		const payload = new PayMaintenanceJobGet(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayMaintenanceJobGet();
		const replyJson: JsonObject = { maintenanceJob: { id: 1 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepMaintenanceJobGet);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceJob: {
				id: 555
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayMaintenanceJobGet(json);
		const output = payload.toJSON();
		expect(output.maintenanceJob).toBeDefined();
		expect(output.maintenanceJob.id).toBe(555);
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayMaintenanceJobGet();
		const action = payload.getAction();
		expect(action.kind).toBe("Get");
		expect(action.object).toBe("MaintenanceJob");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(false);
	});
});