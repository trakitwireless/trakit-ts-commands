import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../../commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayMaintenanceJobDelete } from "../../../../commands/Maintenance/Jobs/Requests/PayMaintenanceJobDelete";
import { RepMaintenanceJobDelete } from "../../../../commands/Maintenance/Jobs/Responses/RepMaintenanceJobDelete";

describe('PayMaintenanceJobDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayMaintenanceJobDelete();
		expect(payload).toBeInstanceOf(PayMaintenanceJobDelete);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.maintenanceJob).toBeInstanceOf(ParamId);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			maintenanceJob: {
				id: 777
			},
			reqId: 6
		};
		const payload = new PayMaintenanceJobDelete(json);
		expect(payload.maintenanceJob).toBeInstanceOf(ParamId);
		expect(payload.maintenanceJob.id).toBe(777);
		expect(payload.reqId).toBe(6);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayMaintenanceJobDelete();
		const replyJson: JsonObject = { maintenanceJob: { id: 1, company: 100, deleted: true } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepMaintenanceJobDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceJob: {
				id: 777
			},
			reqId: 6
		};
		const payload = new PayMaintenanceJobDelete(json);
		const output = payload.toJSON();
		expect(output.maintenanceJob).toBeDefined();
		expect(output.maintenanceJob.id).toBe(777);
		expect(output.reqId).toBe(6);
	});

	it('should return correct action metadata', () => {
		const payload = new PayMaintenanceJobDelete();
		const action = payload.getAction();
		expect(action.kind).toBe("Delete");
		expect(action.object).toBe("MaintenanceJob");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(false);
	});
});