import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../../src/API/Requests/Parameters/ParamId";
import { Payload } from "../../../../src/API/Requests/Payload";
import { PayMaintenanceJobBatchDelete } from "../../../../src/Maintenance/Jobs/Requests/PayMaintenanceJobBatchDelete";
import { RepMaintenanceJobBatchDelete } from "../../../../src/Maintenance/Jobs/Responses/RepMaintenanceJobBatchDelete";

describe('PayMaintenanceJobBatchDelete', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayMaintenanceJobBatchDelete();
		expect(payload).toBeInstanceOf(PayMaintenanceJobBatchDelete);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.maintenanceJobs).toEqual([]);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			maintenanceJobs: [
				{ id: 111 },
				{ id: 222 },
				{ id: 333 }
			],
			reqId: 5
		};
		const payload = new PayMaintenanceJobBatchDelete(json);
		expect(payload.maintenanceJobs).toHaveLength(3);
		expect(payload.maintenanceJobs[0]).toBeInstanceOf(ParamId);
		expect(payload.maintenanceJobs[0].id).toBe(111);
		expect(payload.maintenanceJobs[1].id).toBe(222);
		expect(payload.maintenanceJobs[2].id).toBe(333);
		expect(payload.reqId).toBe(5);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayMaintenanceJobBatchDelete();
		const replyJson: JsonObject = { maintenanceJobs: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepMaintenanceJobBatchDelete);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceJobs: [
				{ id: 111 },
				{ id: 222 },
				{ id: 333 }
			],
			reqId: 5
		};
		const payload = new PayMaintenanceJobBatchDelete(json);
		const output = payload.toJSON();
		expect(output.maintenanceJobs).toBeDefined();
		expect(output.maintenanceJobs).toHaveLength(3);
		expect(output.maintenanceJobs[0].id).toBe(111);
		expect(output.maintenanceJobs[1].id).toBe(222);
		expect(output.maintenanceJobs[2].id).toBe(333);
		expect(output.reqId).toBe(5);
	});

	it('should return correct action metadata', () => {
		const payload = new PayMaintenanceJobBatchDelete();
		const action = payload.getAction();
		expect(action.kind).toBe("Delete");
		expect(action.object).toBe("MaintenanceJob");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(true);
	});
});