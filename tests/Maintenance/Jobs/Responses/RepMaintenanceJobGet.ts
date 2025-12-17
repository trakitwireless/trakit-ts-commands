import { JsonObject, MaintenanceJob } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Reply } from "../../../../commands/API/Responses/Reply";
import { RepMaintenanceJobGet } from "../../../../commands/Maintenance/Jobs/Responses/RepMaintenanceJobGet";

describe('RepMaintenanceJobGet', () => {
	it('should create instance with maintenanceJob data', () => {
		const json: JsonObject = {
			maintenanceJob: {
				id: 555,
				companyId: 100,
				assetId: 200,
				name: "Oil Change",
				status: 1
			}
		};
		const reply = new RepMaintenanceJobGet(json);
		expect(reply).toBeInstanceOf(RepMaintenanceJobGet);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.maintenanceJob).toBeInstanceOf(MaintenanceJob);
		expect(reply.maintenanceJob!.id).toBe(555);
		expect(reply.maintenanceJob!.companyId).toBe(100);
		expect(reply.maintenanceJob!.name).toBe("Oil Change");
	});

	it('should handle missing maintenanceJob', () => {
		const json: JsonObject = {};
		const reply = new RepMaintenanceJobGet(json);
		expect(reply.maintenanceJob).toBeUndefined();
	});

	it('should implement getObject method', () => {
		const json: JsonObject = {
			maintenanceJob: {
				id: 777,
				companyId: 200,
				name: "Tire Rotation"
			}
		};
		const reply = new RepMaintenanceJobGet(json);
		const obj = reply.getObject();
		expect(obj).toBeInstanceOf(MaintenanceJob);
		expect(obj.id).toBe(777);
	});

	it('should implement getCompanyId method', () => {
		const json: JsonObject = {
			maintenanceJob: {
				id: 888,
				companyId: 999,
				name: "Service"
			}
		};
		const reply = new RepMaintenanceJobGet(json);
		expect(reply.getCompanyId()).toBe(999);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceJob: {
				id: 555,
				companyId: 100,
				assetId: 200,
				name: "Oil Change",
				status: 1
			}
		};
		const reply = new RepMaintenanceJobGet(json);
		const output = reply.toJSON();
		expect(output.maintenanceJob).toBeDefined();
		expect(output.maintenanceJob.id).toBe(555);
		expect(output.maintenanceJob.companyId).toBe(100);
		expect(output.maintenanceJob.name).toBe("Oil Change");
	});
});