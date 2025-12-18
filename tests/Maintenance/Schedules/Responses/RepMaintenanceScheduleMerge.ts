import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentIdCompany } from "../../../../commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../../commands/API/Responses/Reply";
import { RepMaintenanceScheduleMerge } from "../../../../commands/Maintenance/Schedules/Responses/RepMaintenanceScheduleMerge";

describe('RepMaintenanceScheduleMerge', () => {
	it('should create instance with maintenanceSchedule data', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				id: 555,
				company: 100
			}
		};
		const reply = new RepMaintenanceScheduleMerge(json);
		expect(reply).toBeInstanceOf(RepMaintenanceScheduleMerge);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.maintenanceSchedule).toBeInstanceOf(ContentIdCompany);
		expect(reply.maintenanceSchedule!.id).toBe(555);
		expect(reply.maintenanceSchedule!.company).toBe(100);
	});

	it('should handle maintenanceSchedule for create operation', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				id: 999,
				company: 888
			}
		};
		const reply = new RepMaintenanceScheduleMerge(json);
		expect(reply.maintenanceSchedule!.id).toBe(999);
		expect(reply.maintenanceSchedule!.company).toBe(888);
	});

	it('should handle maintenanceSchedule for update operation', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				id: 123,
				company: 456
			}
		};
		const reply = new RepMaintenanceScheduleMerge(json);
		expect(reply.maintenanceSchedule).toBeInstanceOf(ContentIdCompany);
		expect(reply.maintenanceSchedule!.id).toBe(123);
		expect(reply.maintenanceSchedule!.company).toBe(456);
	});

	it('should handle missing maintenanceSchedule', () => {
		const json: JsonObject = {};
		const reply = new RepMaintenanceScheduleMerge(json);
		expect(reply.maintenanceSchedule).toBeUndefined();
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceSchedule: {
				id: 555,
				company: 100
			}
		};
		const reply = new RepMaintenanceScheduleMerge(json);
		const output = reply.toJSON();
		expect(output.maintenanceSchedule).toBeDefined();
		expect(output.maintenanceSchedule.id).toBe(555);
		expect(output.maintenanceSchedule.company).toBe(100);
	});
});