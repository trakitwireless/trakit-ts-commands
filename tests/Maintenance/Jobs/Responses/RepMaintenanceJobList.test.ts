import { JsonObject, MaintenanceJob } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentId } from "../../../../src/API/Responses/Content/ContentId";
import { Reply } from "../../../../src/API/Responses/Reply";
import { RepMaintenanceJobListByCompany } from "../../../../src/Maintenance/Jobs/Responses/RepMaintenanceJobList";

describe('RepMaintenanceJobListByCompany', () => {
	it('should create instance with empty maintenanceJobs array', () => {
		const json: JsonObject = {
			maintenanceJobs: [],
			company: { id: 100 }
		};
		const reply = new RepMaintenanceJobListByCompany(json);
		expect(reply).toBeInstanceOf(RepMaintenanceJobListByCompany);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.maintenanceJobs).toEqual([]);
		expect(reply.company).toBeInstanceOf(ContentId);
	});

	it('should create instance with maintenanceJobs data', () => {
		const json: JsonObject = {
			maintenanceJobs: [
				{ id: 111, companyId: 100, assetId: 200, name: "Oil Change", status: 1 },
				{ id: 222, companyId: 100, assetId: 300, name: "Tire Rotation", status: 2 },
				{ id: 333, companyId: 100, assetId: 400, name: "Brake Service", status: 1 }
			],
			company: { id: 100 }
		};
		const reply = new RepMaintenanceJobListByCompany(json);
		expect(reply.maintenanceJobs).toHaveLength(3);
		expect(reply.maintenanceJobs![0]).toBeInstanceOf(MaintenanceJob);
		expect(reply.maintenanceJobs![0].id).toBe(111);
		expect(reply.maintenanceJobs![0].name).toBe("Oil Change");
		expect(reply.maintenanceJobs![1].id).toBe(222);
		expect(reply.maintenanceJobs![2].id).toBe(333);
	});

	it('should implement getList method', () => {
		const json: JsonObject = {
			maintenanceJobs: [
				{ id: 111, companyId: 100, name: "Service 1" },
				{ id: 222, companyId: 100, name: "Service 2" }
			],
			company: { id: 100 }
		};
		const reply = new RepMaintenanceJobListByCompany(json);
		const list = reply.getList();
		expect(list).toHaveLength(2);
		expect(list![0]).toBeInstanceOf(MaintenanceJob);
	});

	it('should implement getCompanyId method', () => {
		const json: JsonObject = {
			maintenanceJobs: [],
			company: { id: 999 }
		};
		const reply = new RepMaintenanceJobListByCompany(json);
		expect(reply.getCompanyId()).toBe(999);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceJobs: [
				{ id: 111, companyId: 100, assetId: 200, name: "Oil Change", status: 1 },
				{ id: 222, companyId: 100, assetId: 300, name: "Tire Rotation", status: 2 }
			],
			company: { id: 100 }
		};
		const reply = new RepMaintenanceJobListByCompany(json);
		const output = reply.toJSON();
		expect(output.maintenanceJobs).toBeDefined();
		expect(output.maintenanceJobs).toHaveLength(2);
		expect(output.maintenanceJobs[0].id).toBe(111);
		expect(output.maintenanceJobs[0].name).toBe("Oil Change");
		expect(output.maintenanceJobs[1].id).toBe(222);
		expect(output.company).toBeDefined();
		expect(output.company.id).toBe(100);
	});
});