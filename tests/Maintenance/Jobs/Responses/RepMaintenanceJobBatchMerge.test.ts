import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepMaintenanceJobBatchMerge } from "../../../../src/Maintenance/Jobs/Responses/RepMaintenanceJobBatchMerge";
import { ContentIdCompany } from "../../../../src/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../../src/API/Responses/Reply";

describe('RepMaintenanceJobBatchMerge', () => {
	it('should create instance with empty maintenanceJobs array', () => {
		const json: JsonObject = {
			maintenanceJobs: []
		};
		const reply = new RepMaintenanceJobBatchMerge(json);
		expect(reply).toBeInstanceOf(RepMaintenanceJobBatchMerge);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.maintenanceJobs).toEqual([]);
	});

	it('should create instance with maintenanceJobs data', () => {
		const json: JsonObject = {
			maintenanceJobs: [
				{ id: 111, company: 100 },
				{ id: 222, company: 100 },
				{ id: 333, company: 200 }
			]
		};
		const reply = new RepMaintenanceJobBatchMerge(json);
		expect(reply.maintenanceJobs).toHaveLength(3);
		expect(reply.maintenanceJobs![0]).toBeInstanceOf(ContentIdCompany);
		expect(reply.maintenanceJobs![0].id).toBe(111);
		expect(reply.maintenanceJobs![0].company).toBe(100);
		expect(reply.maintenanceJobs![1].id).toBe(222);
		expect(reply.maintenanceJobs![2].company).toBe(200);
	});

	it('should handle single maintenanceJob result', () => {
		const json: JsonObject = {
			maintenanceJobs: [
				{ id: 999, company: 888 }
			]
		};
		const reply = new RepMaintenanceJobBatchMerge(json);
		expect(reply.maintenanceJobs).toHaveLength(1);
		expect(reply.maintenanceJobs![0].id).toBe(999);
		expect(reply.maintenanceJobs![0].company).toBe(888);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceJobs: [
				{ id: 111, company: 100 },
				{ id: 222, company: 100 },
				{ id: 333, company: 200 }
			]
		};
		const reply = new RepMaintenanceJobBatchMerge(json);
		const output = reply.toJSON();
		expect(output.maintenanceJobs).toBeDefined();
		expect(output.maintenanceJobs).toHaveLength(3);
		expect(output.maintenanceJobs[0].id).toBe(111);
		expect(output.maintenanceJobs[0].company).toBe(100);
		expect(output.maintenanceJobs[1].id).toBe(222);
		expect(output.maintenanceJobs[1].company).toBe(100);
		expect(output.maintenanceJobs[2].id).toBe(333);
		expect(output.maintenanceJobs[2].company).toBe(200);
	});
});