import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../../src/API/Requests/Parameters/ParamId";
import { Payload } from "../../../../src/API/Requests/Payload";
import { PayMaintenanceScheduleRestore } from "../../../../src/Maintenance/Schedules/Requests/PayMaintenanceScheduleRestore";
import { RepMaintenanceScheduleDelete } from "../../../../src/Maintenance/Schedules/Responses/RepMaintenanceScheduleDelete";

describe('PayMaintenanceScheduleRestore', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayMaintenanceScheduleRestore();
		expect(payload).toBeInstanceOf(PayMaintenanceScheduleRestore);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.maintenanceSchedule).toBeInstanceOf(ParamId);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				id: 888
			},
			reqId: 9
		};
		const payload = new PayMaintenanceScheduleRestore(json);
		expect(payload.maintenanceSchedule).toBeInstanceOf(ParamId);
		expect(payload.maintenanceSchedule.id).toBe(888);
		expect(payload.reqId).toBe(9);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayMaintenanceScheduleRestore();
		const replyJson: JsonObject = { maintenanceSchedule: { id: 1, company: 100, deleted: false } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepMaintenanceScheduleDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				id: 888
			},
			reqId: 9
		};
		const payload = new PayMaintenanceScheduleRestore(json);
		const output = payload.toJSON();
		expect(output.maintenanceSchedule).toBeDefined();
		expect(output.maintenanceSchedule.id).toBe(888);
		expect(output.reqId).toBe(9);
	});

	it('should return correct action metadata', () => {
		const payload = new PayMaintenanceScheduleRestore();
		const action = payload.getAction();
		expect(action.kind).toBe("Restore");
		expect(action.object).toBe("MaintenanceSchedule");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(false);
	});
});