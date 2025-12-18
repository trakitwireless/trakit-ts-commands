import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentIdDeleted } from "../../../../commands/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../../commands/API/Responses/Reply";
import { ReplySyncDelete } from "../../../../commands/API/Responses/ReplySyncDelete";
import { RepMaintenanceScheduleDelete } from "../../../../commands/Maintenance/Schedules/Responses/RepMaintenanceScheduleDelete";

describe('RepMaintenanceScheduleDelete', () => {
	it('should create instance with maintenanceSchedule data', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				id: 555,
				company: 100,
				deleted: true
			}
		};
		const reply = new RepMaintenanceScheduleDelete(json);
		expect(reply).toBeInstanceOf(RepMaintenanceScheduleDelete);
		expect(reply).toBeInstanceOf(ReplySyncDelete);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.maintenanceSchedule).toBeInstanceOf(ContentIdDeleted);
		expect(reply.maintenanceSchedule!.id).toBe(555);
		expect(reply.maintenanceSchedule!.company).toBe(100);
	});

	it('should implement getKey method', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				id: 777,
				company: 200,
				deleted: true
			}
		};
		const reply = new RepMaintenanceScheduleDelete(json);
		expect(reply.getKey()).toBe(777);
	});

	it('should implement getCompanyId method', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				id: 888,
				company: 999,
				deleted: false
			}
		};
		const reply = new RepMaintenanceScheduleDelete(json);
		expect(reply.getCompanyId()).toBe(999);
	});

	it('should handle maintenanceSchedule with deleted status', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				id: 111,
				company: 222,
				deleted: false
			}
		};
		const reply = new RepMaintenanceScheduleDelete(json);
		expect(reply.maintenanceSchedule!.deleted).toBe(false);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				id: 555,
				company: 100,
				deleted: true
			}
		};
		const reply = new RepMaintenanceScheduleDelete(json);
		const output = reply.toJSON();
		expect(output.maintenanceSchedule).toBeDefined();
		expect(output.maintenanceSchedule.id).toBe(555);
		expect(output.maintenanceSchedule.company).toBe(100);
		expect(output.maintenanceSchedule.deleted).toBe(true);
	});
});