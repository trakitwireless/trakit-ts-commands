import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentIdDeleted } from "../../../../commands/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../../commands/API/Responses/Reply";
import { ReplySyncDelete } from "../../../../commands/API/Responses/ReplySyncDelete";
import { RepMaintenanceJobDelete } from "../../../../commands/Maintenance/Jobs/Responses/RepMaintenanceJobDelete";

describe('RepMaintenanceJobDelete', () => {
	it('should create instance with maintenanceJob data', () => {
		const json: JsonObject = {
			maintenanceJob: {
				id: 555,
				company: 100,
				deleted: true
			}
		};
		const reply = new RepMaintenanceJobDelete(json);
		expect(reply).toBeInstanceOf(RepMaintenanceJobDelete);
		expect(reply).toBeInstanceOf(ReplySyncDelete);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.maintenanceJob).toBeInstanceOf(ContentIdDeleted);
		expect(reply.maintenanceJob!.id).toBe(555);
		expect(reply.maintenanceJob!.company).toBe(100);
	});

	it('should implement getKey method', () => {
		const json: JsonObject = {
			maintenanceJob: {
				id: 777,
				company: 200,
				deleted: true
			}
		};
		const reply = new RepMaintenanceJobDelete(json);
		expect(reply.getKey()).toBe(777);
	});

	it('should implement getCompanyId method', () => {
		const json: JsonObject = {
			maintenanceJob: {
				id: 888,
				company: 999,
				deleted: false
			}
		};
		const reply = new RepMaintenanceJobDelete(json);
		expect(reply.getCompanyId()).toBe(999);
	});

	it('should handle maintenanceJob with deleted status', () => {
		const json: JsonObject = {
			maintenanceJob: {
				id: 111,
				company: 222,
				deleted: false
			}
		};
		const reply = new RepMaintenanceJobDelete(json);
		expect(reply.maintenanceJob!.deleted).toBe(false);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceJob: {
				id: 555,
				company: 100,
				deleted: true
			}
		};
		const reply = new RepMaintenanceJobDelete(json);
		const output = reply.toJSON();
		expect(output.maintenanceJob).toBeDefined();
		expect(output.maintenanceJob.id).toBe(555);
		expect(output.maintenanceJob.company).toBe(100);
		expect(output.maintenanceJob.deleted).toBe(true);
	});
});