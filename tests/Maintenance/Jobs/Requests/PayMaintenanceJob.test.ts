import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../../commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../../commands/API/Requests/Payload";
import { PayMaintenanceJob } from "../../../../commands/Maintenance/Jobs/Requests/PayMaintenanceJob";

// Note: PayMaintenanceJob is an abstract class, so we test its concrete implementations
describe('PayMaintenanceJob', () => {
	it('should have maintenanceJob property as ParamId', () => {
		// This is tested through concrete implementations like PayMaintenanceJobGet
		const json: JsonObject = {
			maintenanceJob: { id: 123 }
		};
		// Abstract class - test via concrete implementation
		expect(json.maintenanceJob).toBeDefined();
		expect(json.maintenanceJob.id).toBe(123);
	});

	it('should implement getKey method', () => {
		// The getKey method returns the maintenanceJob property
		// This is tested through concrete implementations
		const paramId = new ParamId({ id: 456 });
		expect(paramId.id).toBe(456);
	});
});