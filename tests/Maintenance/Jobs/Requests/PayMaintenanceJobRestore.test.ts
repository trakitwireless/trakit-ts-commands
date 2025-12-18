import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../../commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayMaintenanceJobRestore } from "../../../../commands/Maintenance/Jobs/Requests/PayMaintenanceJobRestore";
import { RepMaintenanceJobDelete } from "../../../../commands/Maintenance/Jobs/Responses/RepMaintenanceJobDelete";

describe('PayMaintenanceJobRestore', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayMaintenanceJobRestore();
		expect(payload).toBeInstanceOf(PayMaintenanceJobRestore);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.maintenanceJob).toBeInstanceOf(ParamId);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			maintenanceJob: {
				id: 888
			},
			reqId: 9
		};
		const payload = new PayMaintenanceJobRestore(json);
		expect(payload.maintenanceJob).toBeInstanceOf(ParamId);
		expect(payload.maintenanceJob.id).toBe(888);
		expect(payload.reqId).toBe(9);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayMaintenanceJobRestore();
		const replyJson: JsonObject = { maintenanceJob: { id: 1, company: 100, deleted: false } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepMaintenanceJobDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceJob: {
				id: 888
			},
			reqId: 9
		};
		const payload = new PayMaintenanceJobRestore(json);
		const output = payload.toJSON();
		expect(output.maintenanceJob).toBeDefined();
		expect(output.maintenanceJob.id).toBe(888);
		expect(output.reqId).toBe(9);
	});

	it('should return correct action metadata', () => {
		const payload = new PayMaintenanceJobRestore();
		const action = payload.getAction();
		expect(action.kind).toBe("Restore");
		expect(action.object).toBe("MaintenanceJob");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(false);
	});
});