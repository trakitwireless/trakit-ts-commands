import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../../src/API/Requests/Parameters/ParamId";
import { Payload } from "../../../../src/API/Requests/Payload";
import { PayMaintenanceScheduleGet } from "../../../../src/Maintenance/Schedules/Requests/PayMaintenanceScheduleGet";
import { RepMaintenanceScheduleGet } from "../../../../src/Maintenance/Schedules/Responses/RepMaintenanceScheduleGet";

describe('PayMaintenanceScheduleGet', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayMaintenanceScheduleGet();
		expect(payload).toBeInstanceOf(PayMaintenanceScheduleGet);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
		expect(payload.maintenanceSchedule).toBeInstanceOf(ParamId);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				id: 555
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayMaintenanceScheduleGet(json);
		expect(payload.maintenanceSchedule).toBeInstanceOf(ParamId);
		expect(payload.maintenanceSchedule.id).toBe(555);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(3);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			maintenanceSchedule: { id: 999 },
			includeDeleted: false
		};
		const payload = new PayMaintenanceScheduleGet(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayMaintenanceScheduleGet();
		const replyJson: JsonObject = { maintenanceSchedule: { id: 1 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepMaintenanceScheduleGet);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				id: 555
			},
			includeDeleted: true,
			reqId: 3
		};
		const payload = new PayMaintenanceScheduleGet(json);
		const output = payload.toJSON();
		expect(output.maintenanceSchedule).toBeDefined();
		expect(output.maintenanceSchedule.id).toBe(555);
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const payload = new PayMaintenanceScheduleGet();
		const action = payload.getAction();
		expect(action.kind).toBe("Get");
		expect(action.object).toBe("MaintenanceSchedule");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(false);
	});
});