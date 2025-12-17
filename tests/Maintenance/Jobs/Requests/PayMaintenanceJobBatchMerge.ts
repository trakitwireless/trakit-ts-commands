import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { PayMaintenanceJobBatchMerge } from "../../../../commands/Maintenance/Jobs/Requests/PayMaintenanceJobBatchMerge";
import { Payload } from "../../../../commands/API/Requests/Payload";
import { ParamMaintenanceJobMerge } from "../../../../commands/Maintenance/Jobs/Requests/Parameters/ParamMaintenanceJobMerge";
import { RepMaintenanceJobBatchMerge } from "../../../../commands/Maintenance/Jobs/Responses/RepMaintenanceJobBatchMerge";

describe('PayMaintenanceJobBatchMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayMaintenanceJobBatchMerge();
		expect(payload).toBeInstanceOf(PayMaintenanceJobBatchMerge);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.maintenanceJobs).toEqual([]);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			maintenanceJobs: [
				{ asset: 100, name: "Oil Change", status: 1, cost: 50.00 },
				{ asset: 200, name: "Tire Rotation", status: 1, cost: 30.00 }
			],
			reqId: 7
		};
		const payload = new PayMaintenanceJobBatchMerge(json);
		expect(payload.maintenanceJobs).toHaveLength(2);
		expect(payload.maintenanceJobs[0]).toBeInstanceOf(ParamMaintenanceJobMerge);
		expect(payload.maintenanceJobs[0].name).toBe("Oil Change");
		expect(payload.maintenanceJobs[1].name).toBe("Tire Rotation");
		expect(payload.reqId).toBe(7);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayMaintenanceJobBatchMerge();
		const replyJson: JsonObject = { maintenanceJobs: [] };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepMaintenanceJobBatchMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceJobs: [
				{ asset: 100, name: "Oil Change", status: 1, cost: 50.00 },
				{ asset: 200, name: "Tire Rotation", status: 1, cost: 30.00 }
			],
			reqId: 7
		};
		const payload = new PayMaintenanceJobBatchMerge(json);
		const output = payload.toJSON();
		expect(output.maintenanceJobs).toBeDefined();
		expect(output.maintenanceJobs).toHaveLength(2);
		expect(output.maintenanceJobs[0].asset).toBe(100);
		expect(output.maintenanceJobs[0].name).toBe("Oil Change");
		expect(output.maintenanceJobs[0].status).toBe(1);
		expect(output.maintenanceJobs[0].cost).toBe(50.00);
		expect(output.maintenanceJobs[1].asset).toBe(200);
		expect(output.maintenanceJobs[1].name).toBe("Tire Rotation");
		expect(output.maintenanceJobs[1].status).toBe(1);
		expect(output.maintenanceJobs[1].cost).toBe(30.00);
		expect(output.reqId).toBe(7);
	});

	it('should return correct action metadata', () => {
		const payload = new PayMaintenanceJobBatchMerge();
		const action = payload.getAction();
		expect(action.kind).toBe("Merge");
		expect(action.object).toBe("MaintenanceJob");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(true);
	});
});