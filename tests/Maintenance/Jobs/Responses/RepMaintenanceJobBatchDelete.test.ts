import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepMaintenanceJobBatchDelete } from "../../../../src/Maintenance/Jobs/Responses/RepMaintenanceJobBatchDelete";
import { ContentIdDeleted } from "../../../../src/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../../src/API/Responses/Reply";
import { ReplySyncBatchDelete } from "../../../../src/API/Responses/ReplySyncBatchDelete";

describe('RepMaintenanceJobBatchDelete', () => {
	it('should create instance with empty maintenanceJobs array', () => {
		const json: JsonObject = {
			maintenanceJobs: []
		};
		const reply = new RepMaintenanceJobBatchDelete(json);
		expect(reply).toBeInstanceOf(RepMaintenanceJobBatchDelete);
		expect(reply).toBeInstanceOf(ReplySyncBatchDelete);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.maintenanceJobs).toEqual([]);
	});

	it('should create instance with maintenanceJobs data', () => {
		const json: JsonObject = {
			maintenanceJobs: [
				{ id: 111, company: 100, deleted: true },
				{ id: 222, company: 100, deleted: true },
				{ id: 333, company: 100, deleted: false }
			]
		};
		const reply = new RepMaintenanceJobBatchDelete(json);
		expect(reply.maintenanceJobs).toHaveLength(3);
		expect(reply.maintenanceJobs![0]).toBeInstanceOf(ContentIdDeleted);
		expect(reply.maintenanceJobs![0].id).toBe(111);
		expect(reply.maintenanceJobs![0].company).toBe(100);
		expect(reply.maintenanceJobs![1].id).toBe(222);
		expect(reply.maintenanceJobs![2].id).toBe(333);
	});

	it('should implement getCompanyId method', () => {
		const json: JsonObject = {
			maintenanceJobs: [
				{ id: 111, company: 999, deleted: true }
			]
		};
		const reply = new RepMaintenanceJobBatchDelete(json);
		expect(reply.getCompanyId()).toBe(999);
	});

	it('should implement getResults method', () => {
		const json: JsonObject = {
			maintenanceJobs: [
				{ id: 111, company: 100, deleted: true },
				{ id: 222, company: 100, deleted: true }
			]
		};
		const reply = new RepMaintenanceJobBatchDelete(json);
		const results = reply.getResults();
		expect(results).toHaveLength(2);
		expect(results![0]).toBeInstanceOf(ContentIdDeleted);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceJobs: [
				{ id: 111, company: 100, deleted: true },
				{ id: 222, company: 100, deleted: true },
				{ id: 333, company: 100, deleted: false }
			]
		};
		const reply = new RepMaintenanceJobBatchDelete(json);
		const output = reply.toJSON();
		expect(output.maintenanceJobs).toBeDefined();
		expect(output.maintenanceJobs).toHaveLength(3);
		expect(output.maintenanceJobs[0].id).toBe(111);
		expect(output.maintenanceJobs[0].company).toBe(100);
		expect(output.maintenanceJobs[0].deleted).toBe(true);
		expect(output.maintenanceJobs[1].id).toBe(222);
		expect(output.maintenanceJobs[1].deleted).toBe(true);
		expect(output.maintenanceJobs[2].id).toBe(333);
		expect(output.maintenanceJobs[2].deleted).toBe(false);
	});
});