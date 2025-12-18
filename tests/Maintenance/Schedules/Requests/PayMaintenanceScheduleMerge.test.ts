import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayMaintenanceScheduleMerge } from "../../../../commands/Maintenance/Schedules/Requests/PayMaintenanceScheduleMerge";
import { ParamMaintenanceScheduleMerge } from "../../../../commands/Maintenance/Schedules/Requests/Parameters/ParamMaintenanceScheduleMerge";
import { RepMaintenanceScheduleMerge } from "../../../../commands/Maintenance/Schedules/Responses/RepMaintenanceScheduleMerge";

describe('PayMaintenanceScheduleMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayMaintenanceScheduleMerge();
		expect(payload).toBeInstanceOf(PayMaintenanceScheduleMerge);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.maintenanceSchedule).toBeInstanceOf(ParamMaintenanceScheduleMerge);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				company: 100,
				name: "Monthly Oil Change",
				notes: "Change oil every 30 days",
				recurDays: 30
			},
			reqId: 2
		};
		const payload = new PayMaintenanceScheduleMerge(json);
		expect(payload.maintenanceSchedule).toBeInstanceOf(ParamMaintenanceScheduleMerge);
		expect(payload.maintenanceSchedule.company).toBe(100);
		expect(payload.maintenanceSchedule.name).toBe("Monthly Oil Change");
		expect(payload.maintenanceSchedule.notes).toBe("Change oil every 30 days");
		expect(payload.maintenanceSchedule.recurDays).toBe(30);
		expect(payload.reqId).toBe(2);
	});

	it('should handle update with id', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				id: 444,
				name: "Updated Schedule",
				recurDays: 60
			}
		};
		const payload = new PayMaintenanceScheduleMerge(json);
		expect(payload.maintenanceSchedule.id).toBe(444);
		expect(payload.maintenanceSchedule.name).toBe("Updated Schedule");
		expect(payload.maintenanceSchedule.recurDays).toBe(60);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayMaintenanceScheduleMerge();
		const replyJson: JsonObject = { maintenanceSchedule: { id: 1, company: 100 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepMaintenanceScheduleMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				company: 100,
				name: "Monthly Oil Change",
				notes: "Change oil every 30 days",
				recurDays: 30
			},
			reqId: 2
		};
		const payload = new PayMaintenanceScheduleMerge(json);
		const output = payload.toJSON();
		expect(output.maintenanceSchedule).toBeDefined();
		expect(output.maintenanceSchedule.company).toBe(100);
		expect(output.maintenanceSchedule.name).toBe("Monthly Oil Change");
		expect(output.maintenanceSchedule.notes).toBe("Change oil every 30 days");
		expect(output.maintenanceSchedule.recurDays).toBe(30);
		expect(output.reqId).toBe(2);
	});

	it('should return correct action metadata', () => {
		const payload = new PayMaintenanceScheduleMerge();
		const action = payload.getAction();
		expect(action.kind).toBe("Merge");
		expect(action.object).toBe("MaintenanceSchedule");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(false);
	});
});