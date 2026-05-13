import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../../src/API/Requests/Parameters/ParamId";
import { Payload } from "../../../../src/API/Requests/Payload";
import { PayMaintenanceScheduleDelete } from "../../../../src/Maintenance/Schedules/Requests/PayMaintenanceScheduleDelete";
import { RepMaintenanceScheduleDelete } from "../../../../src/Maintenance/Schedules/Responses/RepMaintenanceScheduleDelete";

describe('PayMaintenanceScheduleDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayMaintenanceScheduleDelete();
		expect(payload).toBeInstanceOf(PayMaintenanceScheduleDelete);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.maintenanceSchedule).toBeInstanceOf(ParamId);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				id: 777
			},
			reqId: 6
		};
		const payload = new PayMaintenanceScheduleDelete(json);
		expect(payload.maintenanceSchedule).toBeInstanceOf(ParamId);
		expect(payload.maintenanceSchedule.id).toBe(777);
		expect(payload.reqId).toBe(6);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayMaintenanceScheduleDelete();
		const replyJson: JsonObject = { maintenanceSchedule: { id: 1, company: 100, deleted: true } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepMaintenanceScheduleDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				id: 777
			},
			reqId: 6
		};
		const payload = new PayMaintenanceScheduleDelete(json);
		const output = payload.toJSON();
		expect(output.maintenanceSchedule).toBeDefined();
		expect(output.maintenanceSchedule.id).toBe(777);
		expect(output.reqId).toBe(6);
	});

	it('should return correct action metadata', () => {
		const payload = new PayMaintenanceScheduleDelete();
		const action = payload.getAction();
		expect(action.kind).toBe("Delete");
		expect(action.object).toBe("MaintenanceSchedule");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(false);
	});
});