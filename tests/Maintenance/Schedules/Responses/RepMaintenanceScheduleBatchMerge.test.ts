import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepMaintenanceScheduleBatchMerge } from "../../../../commands/Maintenance/Schedules/Responses/RepMaintenanceScheduleBatchMerge";
import { ContentIdCompany } from "../../../../commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../../commands/API/Responses/Reply";

describe('RepMaintenanceScheduleBatchMerge', () => {
	it('should create instance with empty maintenanceSchedules array', () => {
		const json: JsonObject = {
			maintenanceSchedules: []
		};
		const reply = new RepMaintenanceScheduleBatchMerge(json);
		expect(reply).toBeInstanceOf(RepMaintenanceScheduleBatchMerge);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.maintenanceSchedules).toEqual([]);
	});

	it('should create instance with maintenanceSchedules data', () => {
		const json: JsonObject = {
			maintenanceSchedules: [
				{ id: 111, company: 100 },
				{ id: 222, company: 100 },
				{ id: 333, company: 200 }
			]
		};
		const reply = new RepMaintenanceScheduleBatchMerge(json);
		expect(reply.maintenanceSchedules).toHaveLength(3);
		expect(reply.maintenanceSchedules![0]).toBeInstanceOf(ContentIdCompany);
		expect(reply.maintenanceSchedules![0].id).toBe(111);
		expect(reply.maintenanceSchedules![0].company).toBe(100);
		expect(reply.maintenanceSchedules![1].id).toBe(222);
		expect(reply.maintenanceSchedules![2].company).toBe(200);
	});

	it('should handle single maintenanceSchedule result', () => {
		const json: JsonObject = {
			maintenanceSchedules: [
				{ id: 999, company: 888 }
			]
		};
		const reply = new RepMaintenanceScheduleBatchMerge(json);
		expect(reply.maintenanceSchedules).toHaveLength(1);
		expect(reply.maintenanceSchedules![0].id).toBe(999);
		expect(reply.maintenanceSchedules![0].company).toBe(888);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceSchedules: [
				{ id: 111, company: 100 },
				{ id: 222, company: 100 },
				{ id: 333, company: 200 }
			]
		};
		const reply = new RepMaintenanceScheduleBatchMerge(json);
		const output = reply.toJSON();
		expect(output.maintenanceSchedules).toBeDefined();
		expect(output.maintenanceSchedules).toHaveLength(3);
		expect(output.maintenanceSchedules[0].id).toBe(111);
		expect(output.maintenanceSchedules[0].company).toBe(100);
		expect(output.maintenanceSchedules[1].id).toBe(222);
		expect(output.maintenanceSchedules[1].company).toBe(100);
		expect(output.maintenanceSchedules[2].id).toBe(333);
		expect(output.maintenanceSchedules[2].company).toBe(200);
	});
});