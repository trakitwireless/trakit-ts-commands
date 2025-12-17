import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../../commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayMaintenanceJobListByCompany } from "../../../../commands/Maintenance/Jobs/Requests/PayMaintenanceJobList";
import { RepMaintenanceJobListByCompany } from "../../../../commands/Maintenance/Jobs/Responses/RepMaintenanceJobList";

describe('PayMaintenanceJobListByCompany', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayMaintenanceJobListByCompany();
		expect(payload).toBeInstanceOf(PayMaintenanceJobListByCompany);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.includeDeleted).toBe(false);
		expect(payload.company).toBeInstanceOf(ParamId);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			company: {
				id: 999
			},
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayMaintenanceJobListByCompany(json);
		expect(payload.company).toBeInstanceOf(ParamId);
		expect(payload.company.id).toBe(999);
		expect(payload.includeDeleted).toBe(true);
		expect(payload.reqId).toBe(4);
	});

	it('should handle includeDeleted false', () => {
		const json: JsonObject = {
			company: { id: 1000 },
			includeDeleted: false
		};
		const payload = new PayMaintenanceJobListByCompany(json);
		expect(payload.includeDeleted).toBe(false);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayMaintenanceJobListByCompany();
		const replyJson: JsonObject = { maintenanceJobs: [], company: { id: 1 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepMaintenanceJobListByCompany);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			company: {
				id: 999
			},
			includeDeleted: true,
			reqId: 4
		};
		const payload = new PayMaintenanceJobListByCompany(json);
		const output = payload.toJSON();
		expect(output.company).toBeDefined();
		expect(output.company.id).toBe(999);
		expect(output.includeDeleted).toBe(true);
		expect(output.reqId).toBe(4);
	});

	it('should return correct action metadata', () => {
		const payload = new PayMaintenanceJobListByCompany();
		const action = payload.getAction();
		expect(action.kind).toBe("List");
		expect(action.object).toBe("MaintenanceJob");
		expect(action.filter).toBe("ByCompany");
		expect(action.batch).toBe(false);
	});
});