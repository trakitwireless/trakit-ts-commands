import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { PayMaintenanceScheduleBatchMerge } from "../../../../commands/Maintenance/Schedules/Requests/PayMaintenanceScheduleBatchMerge";
import { Payload } from "../../../../commands/API/Requests/Payload";
import { ParamMaintenanceScheduleMerge } from "../../../../commands/Maintenance/Schedules/Requests/Parameters/ParamMaintenanceScheduleMerge";
import { RepMaintenanceScheduleBatchMerge } from "../../../../commands/Maintenance/Schedules/Responses/RepMaintenanceScheduleBatchMerge";

describe('PayMaintenanceScheduleBatchMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayMaintenanceScheduleBatchMerge();
		expect(payload).toBeInstanceOf(PayMaintenanceScheduleBatchMerge);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.maintenanceSchedules).toEqual([]);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			maintenanceSchedules: [
				{ company: 100, name: "Weekly Check", notes: "Weekly inspection", recurDays: 7 },
				{ company: 100, name: "Monthly Service", notes: "Monthly maintenance", recurDays: 30 }
			],
			reqId: 7
		};
		const payload = new PayMaintenanceScheduleBatchMerge(json);
		expect(payload.maintenanceSchedules).toHaveLength(2);
		expect(payload.maintenanceSchedules[0]).toBeInstanceOf(ParamMaintenanceScheduleMerge);
		expect(payload.maintenanceSchedules[0].name).toBe("Weekly Check");
		expect(payload.maintenanceSchedules[1].name).toBe("Monthly Service");
		expect(payload.reqId).toBe(7);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayMaintenanceScheduleBatchMerge();
		const replyJson: JsonObject = { maintenanceSchedules: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepMaintenanceScheduleBatchMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceSchedules: [
				{ company: 100, name: "Weekly Check", notes: "Weekly inspection", recurDays: 7 },
				{ company: 100, name: "Monthly Service", notes: "Monthly maintenance", recurDays: 30 }
			],
			reqId: 7
		};
		const payload = new PayMaintenanceScheduleBatchMerge(json);
		const output = payload.toJSON();
		expect(output.maintenanceSchedules).toBeDefined();
		expect(output.maintenanceSchedules).toHaveLength(2);
		expect(output.maintenanceSchedules[0].company).toBe(100);
		expect(output.maintenanceSchedules[0].name).toBe("Weekly Check");
		expect(output.maintenanceSchedules[0].notes).toBe("Weekly inspection");
		expect(output.maintenanceSchedules[0].recurDays).toBe(7);
		expect(output.maintenanceSchedules[1].company).toBe(100);
		expect(output.maintenanceSchedules[1].name).toBe("Monthly Service");
		expect(output.maintenanceSchedules[1].notes).toBe("Monthly maintenance");
		expect(output.maintenanceSchedules[1].recurDays).toBe(30);
		expect(output.reqId).toBe(7);
	});

	it('should return correct action metadata', () => {
		const payload = new PayMaintenanceScheduleBatchMerge();
		const action = payload.getAction();
		expect(action.kind).toBe("Merge");
		expect(action.object).toBe("MaintenanceSchedule");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(true);
	});
});