import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../../commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayMaintenanceScheduleBatchDelete } from "../../../../commands/Maintenance/Schedules/Requests/PayMaintenanceScheduleBatchDelete";
import { RepMaintenanceScheduleBatchDelete } from "../../../../commands/Maintenance/Schedules/Responses/RepMaintenanceScheduleBatchDelete";

describe('PayMaintenanceScheduleBatchDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayMaintenanceScheduleBatchDelete();
		expect(payload).toBeInstanceOf(PayMaintenanceScheduleBatchDelete);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.maintenanceSchedules).toEqual([]);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			maintenanceSchedules: [
				{ id: 111 },
				{ id: 222 },
				{ id: 333 }
			],
			reqId: 5
		};
		const payload = new PayMaintenanceScheduleBatchDelete(json);
		expect(payload.maintenanceSchedules).toHaveLength(3);
		expect(payload.maintenanceSchedules[0]).toBeInstanceOf(ParamId);
		expect(payload.maintenanceSchedules[0].id).toBe(111);
		expect(payload.maintenanceSchedules[1].id).toBe(222);
		expect(payload.maintenanceSchedules[2].id).toBe(333);
		expect(payload.reqId).toBe(5);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayMaintenanceScheduleBatchDelete();
		const replyJson: JsonObject = { maintenanceSchedules: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepMaintenanceScheduleBatchDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceSchedules: [
				{ id: 111 },
				{ id: 222 },
				{ id: 333 }
			],
			reqId: 5
		};
		const payload = new PayMaintenanceScheduleBatchDelete(json);
		const output = payload.toJSON();
		expect(output.maintenanceSchedules).toBeDefined();
		expect(output.maintenanceSchedules).toHaveLength(3);
		expect(output.maintenanceSchedules[0].id).toBe(111);
		expect(output.maintenanceSchedules[1].id).toBe(222);
		expect(output.maintenanceSchedules[2].id).toBe(333);
		expect(output.reqId).toBe(5);
	});

	it('should return correct action metadata', () => {
		const payload = new PayMaintenanceScheduleBatchDelete();
		const action = payload.getAction();
		expect(action.kind).toBe("Delete");
		expect(action.object).toBe("MaintenanceSchedule");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(true);
	});
});