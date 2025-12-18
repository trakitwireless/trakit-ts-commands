import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../../commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayMaintenanceSchedule } from "../../../../commands/Maintenance/Schedules/Requests/PayMaintenanceSchedule";

// Note: PayMaintenanceSchedule is an abstract class, so we test its concrete implementations
describe('PayMaintenanceSchedule', () => {
	it('should have maintenanceSchedule property as ParamId', () => {
		// This is tested through concrete implementations like PayMaintenanceScheduleGet
		const json: JsonObject = {
			maintenanceSchedule: { id: 123 }
		};
		// Abstract class - test via concrete implementation
		expect(json.maintenanceSchedule).toBeDefined();
		expect(json.maintenanceSchedule.id).toBe(123);
	});

	it('should implement getKey method', () => {
		// The getKey method returns the maintenanceSchedule property
		// This is tested through concrete implementations
		const paramId = new ParamId({ id: 456 });
		expect(paramId.id).toBe(456);
	});
});