import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayMaintenanceJobMerge } from "../../../../commands/Maintenance/Jobs/Requests/PayMaintenanceJobMerge";
import { ParamMaintenanceJobMerge } from "../../../../commands/Maintenance/Jobs/Requests/Parameters/ParamMaintenanceJobMerge";
import { RepMaintenanceJobMerge } from "../../../../commands/Maintenance/Jobs/Responses/RepMaintenanceJobMerge";

describe('PayMaintenanceJobMerge', () => {
	it('should create instance with empty constructor', () => {
		const payload = new PayMaintenanceJobMerge();
		expect(payload).toBeInstanceOf(PayMaintenanceJobMerge);
		expect(payload).toBeInstanceOf(Payload);
		expect(payload.maintenanceJob).toBeInstanceOf(ParamMaintenanceJobMerge);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			maintenanceJob: {
				asset: 100,
				name: "Oil Change",
				status: 1,
				cost: 50.00
			},
			reqId: 2
		};
		const payload = new PayMaintenanceJobMerge(json);
		expect(payload.maintenanceJob).toBeInstanceOf(ParamMaintenanceJobMerge);
		expect(payload.maintenanceJob.asset).toBe(100);
		expect(payload.maintenanceJob.name).toBe("Oil Change");
		expect(payload.maintenanceJob.status).toBe(1);
		expect(payload.maintenanceJob.cost).toBe(50.00);
		expect(payload.reqId).toBe(2);
	});

	it('should handle update with id', () => {
		const json: JsonObject = {
			maintenanceJob: {
				id: 444,
				status: 2,
				cost: 75.00
			}
		};
		const payload = new PayMaintenanceJobMerge(json);
		expect(payload.maintenanceJob.id).toBe(444);
		expect(payload.maintenanceJob.status).toBe(2);
		expect(payload.maintenanceJob.cost).toBe(75.00);
	});

	it('should create reply with createReply method', () => {
		const payload = new PayMaintenanceJobMerge();
		const replyJson: JsonObject = { maintenanceJob: { id: 1, company: 100 } };
		const reply = payload.createReply(replyJson);
		expect(reply).toBeInstanceOf(RepMaintenanceJobMerge);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceJob: {
				asset: 100,
				name: "Oil Change",
				status: 1,
				cost: 50.00
			},
			reqId: 2
		};
		const payload = new PayMaintenanceJobMerge(json);
		const output = payload.toJSON();
		expect(output.maintenanceJob).toBeDefined();
		expect(output.maintenanceJob.asset).toBe(100);
		expect(output.maintenanceJob.name).toBe("Oil Change");
		expect(output.maintenanceJob.status).toBe(1);
		expect(output.maintenanceJob.cost).toBe(50.00);
		expect(output.reqId).toBe(2);
	});

	it('should return correct action metadata', () => {
		const payload = new PayMaintenanceJobMerge();
		const action = payload.getAction();
		expect(action.kind).toBe("Merge");
		expect(action.object).toBe("MaintenanceJob");
		expect(action.filter).toBe("");
		expect(action.batch).toBe(false);
	});
});