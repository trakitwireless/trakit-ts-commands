import { JsonObject, MaintenanceSchedule } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Reply } from "../../../../src/API/Responses/Reply";
import { RepMaintenanceScheduleGet } from "../../../../src/Maintenance/Schedules/Responses/RepMaintenanceScheduleGet";

describe('RepMaintenanceScheduleGet', () => {
	it('should create instance with maintenanceSchedule data', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				id: 555,
				companyId: 100,
				name: "Monthly Service",
				recurDays: 30
			}
		};
		const reply = new RepMaintenanceScheduleGet(json);
		expect(reply).toBeInstanceOf(RepMaintenanceScheduleGet);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.maintenanceSchedule).toBeInstanceOf(MaintenanceSchedule);
		expect(reply.maintenanceSchedule!.id).toBe(555);
		expect(reply.maintenanceSchedule!.companyId).toBe(100);
		expect(reply.maintenanceSchedule!.name).toBe("Monthly Service");
	});

	it('should handle missing maintenanceSchedule', () => {
		const json: JsonObject = {};
		const reply = new RepMaintenanceScheduleGet(json);
		expect(reply.maintenanceSchedule).toBeUndefined();
	});

	it('should implement getObject method', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				id: 777,
				companyId: 200,
				name: "Weekly Check"
			}
		};
		const reply = new RepMaintenanceScheduleGet(json);
		const obj = reply.getObject();
		expect(obj).toBeInstanceOf(MaintenanceSchedule);
		expect(obj.id).toBe(777);
	});

	it('should implement getCompanyId method', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				id: 888,
				companyId: 999,
				name: "Schedule"
			}
		};
		const reply = new RepMaintenanceScheduleGet(json);
		expect(reply.getCompanyId()).toBe(999);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				id: 555,
				companyId: 100,
				name: "Monthly Service",
				recurDays: 30
			}
		};
		const reply = new RepMaintenanceScheduleGet(json);
		const output = reply.toJSON();
		expect(output.maintenanceSchedule).toBeDefined();
		expect(output.maintenanceSchedule.id).toBe(555);
		expect(output.maintenanceSchedule.companyId).toBe(100);
		expect(output.maintenanceSchedule.name).toBe("Monthly Service");
	});
});