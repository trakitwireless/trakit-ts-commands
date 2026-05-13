import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../../src/API/Requests/Parameters/ParamId";
import { Payload } from "../../../../src/API/Requests/Payload";
import { PayMaintenanceScheduleListByCompany } from "../../../../src/Maintenance/Schedules/Requests/PayMaintenanceScheduleList";
import { RepMaintenanceScheduleListByCompany } from "../../../../src/Maintenance/Schedules/Responses/RepMaintenanceScheduleList";

describe('PayMaintenanceScheduleListByCompany', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayMaintenanceScheduleListByCompany();
		expect(payload).toBeInstanceOf(PayMaintenanceScheduleListByCompany);
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
		const payload = new PayMaintenanceScheduleListByCompany(json);
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
		const payload = new PayMaintenanceScheduleListByCompany(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayMaintenanceScheduleListByCompany();
		const replyJson: JsonObject = { maintenanceSchedules: [], company: { id: 1 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepMaintenanceScheduleListByCompany);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			company: {
				id: 999
			},
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayMaintenanceScheduleListByCompany(json);
		const output = payload.toJSON();
		expect(output.company).toBeDefined();
		expect(output.company.id).toBe(999);
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(4);
	});

	it('should return correct action metadata', () => {
		const payload = new PayMaintenanceScheduleListByCompany();
		const action = payload.getAction();
		expect(action.kind).toBe("List");
		expect(action.object).toBe("MaintenanceSchedule");
		expect(action.filter).toBe("ByCompany");
		expect(action.batch).toBe(false);
	});
});