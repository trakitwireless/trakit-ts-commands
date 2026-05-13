import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentIdCompany } from "../../../../src/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../../src/API/Responses/Reply";
import { RepMaintenanceJobMerge } from "../../../../src/Maintenance/Jobs/Responses/RepMaintenanceJobMerge";

describe('RepMaintenanceJobMerge', () => {
	it('should create instance with maintenanceJob data', () => {
		const json: JsonObject = {
			maintenanceJob: {
				id: 555,
				company: 100
			}
		};
		const reply = new RepMaintenanceJobMerge(json);
		expect(reply).toBeInstanceOf(RepMaintenanceJobMerge);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.maintenanceJob).toBeInstanceOf(ContentIdCompany);
		expect(reply.maintenanceJob!.id).toBe(555);
		expect(reply.maintenanceJob!.company).toBe(100);
	});

	it('should handle maintenanceJob for create operation', () => {
		const json: JsonObject = {
			maintenanceJob: {
				id: 999,
				company: 888
			}
		};
		const reply = new RepMaintenanceJobMerge(json);
		expect(reply.maintenanceJob!.id).toBe(999);
		expect(reply.maintenanceJob!.company).toBe(888);
	});

	it('should handle maintenanceJob for update operation', () => {
		const json: JsonObject = {
			maintenanceJob: {
				id: 123,
				company: 456
			}
		};
		const reply = new RepMaintenanceJobMerge(json);
		expect(reply.maintenanceJob).toBeInstanceOf(ContentIdCompany);
		expect(reply.maintenanceJob!.id).toBe(123);
		expect(reply.maintenanceJob!.company).toBe(456);
	});

	it('should handle missing maintenanceJob', () => {
		const json: JsonObject = {};
		const reply = new RepMaintenanceJobMerge(json);
		expect(reply.maintenanceJob).toBeUndefined();
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceJob: {
				id: 555,
				company: 100
			}
		};
		const reply = new RepMaintenanceJobMerge(json);
		const output = reply.toJSON();
		expect(output.maintenanceJob).toBeDefined();
		expect(output.maintenanceJob.id).toBe(555);
		expect(output.maintenanceJob.company).toBe(100);
	});
});