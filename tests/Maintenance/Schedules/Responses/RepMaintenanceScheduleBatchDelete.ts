import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepMaintenanceScheduleBatchDelete } from "../../../../commands/Maintenance/Schedules/Responses/RepMaintenanceScheduleBatchDelete";
import { ContentIdDeleted } from "../../../../commands/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../../commands/API/Responses/Reply";
import { ReplySyncBatchDelete } from "../../../../commands/API/Responses/ReplySyncBatchDelete";

describe('RepMaintenanceScheduleBatchDelete', () => {
	it('should create instance with empty maintenanceSchedules array', () => {
		const json: JsonObject = {
			maintenanceSchedules: []
		};
		const reply = new RepMaintenanceScheduleBatchDelete(json);
		expect(reply).toBeInstanceOf(RepMaintenanceScheduleBatchDelete);
		expect(reply).toBeInstanceOf(ReplySyncBatchDelete);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.maintenanceSchedules).toEqual([]);
	});

	it('should create instance with maintenanceSchedules data', () => {
		const json: JsonObject = {
			maintenanceSchedules: [
				{ id: 111, company: 100, deleted: true },
				{ id: 222, company: 100, deleted: true },
				{ id: 333, company: 100, deleted: false }
			]
		};
		const reply = new RepMaintenanceScheduleBatchDelete(json);
		expect(reply.maintenanceSchedules).toHaveLength(3);
		expect(reply.maintenanceSchedules![0]).toBeInstanceOf(ContentIdDeleted);
		expect(reply.maintenanceSchedules![0].id).toBe(111);
		expect(reply.maintenanceSchedules![0].company).toBe(100);
		expect(reply.maintenanceSchedules![1].id).toBe(222);
		expect(reply.maintenanceSchedules![2].id).toBe(333);
	});

	it('should implement getCompanyId method', () => {
		const json: JsonObject = {
			maintenanceSchedules: [
				{ id: 111, company: 999, deleted: true }
			]
		};
		const reply = new RepMaintenanceScheduleBatchDelete(json);
		expect(reply.getCompanyId()).toBe(999);
	});

	it('should implement getResults method', () => {
		const json: JsonObject = {
			maintenanceSchedules: [
				{ id: 111, company: 100, deleted: true },
				{ id: 222, company: 100, deleted: true }
			]
		};
		const reply = new RepMaintenanceScheduleBatchDelete(json);
		const results = reply.getResults();
		expect(results).toHaveLength(2);
		expect(results![0]).toBeInstanceOf(ContentIdDeleted);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceSchedules: [
				{ id: 111, company: 100, deleted: true },
				{ id: 222, company: 100, deleted: true },
				{ id: 333, company: 100, deleted: false }
			]
		};
		const reply = new RepMaintenanceScheduleBatchDelete(json);
		const output = reply.toJSON();
		expect(output.maintenanceSchedules).toBeDefined();
		expect(output.maintenanceSchedules).toHaveLength(3);
		expect(output.maintenanceSchedules[0].id).toBe(111);
		expect(output.maintenanceSchedules[0].company).toBe(100);
		expect(output.maintenanceSchedules[0].deleted).toBe(true);
		expect(output.maintenanceSchedules[1].id).toBe(222);
		expect(output.maintenanceSchedules[1].deleted).toBe(true);
		expect(output.maintenanceSchedules[2].id).toBe(333);
		expect(output.maintenanceSchedules[2].deleted).toBe(false);
	});
});