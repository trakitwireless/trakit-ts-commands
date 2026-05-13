import { JsonObject, MaintenanceJobStatus, TimeSpan } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamMergeSubscribable } from "../../../../../src/API/Requests/Parameters/ParamMergeSubscribable";
import { ParamMaintenanceJobMerge } from "../../../../../src/Maintenance/Jobs/Requests/Parameters/ParamMaintenanceJobMerge";

describe('ParamMaintenanceJobMerge', () => {
	describe('Constructor', () => {
		it('should create instance with empty constructor', () => {
			const param = new ParamMaintenanceJobMerge();
			expect(param).toBeInstanceOf(ParamMaintenanceJobMerge);
			expect(param).toBeInstanceOf(ParamMergeSubscribable);
		});

		it('should create instance with full JSON data for new maintenance job', () => {
			const json: JsonObject = {
				asset: 100,
				schedule: 50,
				name: "Oil Change",
				notes: "Changed oil and filter",
				status: MaintenanceJobStatus.completed,
				created: "2024-01-15T10:00:00Z",
				completed: "2024-01-15T11:30:00Z",
				odometer: 50000.0,
				engineHours: 1200.5,
				garage: "Quick Lube",
				duration: "01:30:00",
				cost: 75.50,
				reference: "WO-12345",
				technician: "John Smith",
				pictures: [1, 2, 3]
			};
			const param = new ParamMaintenanceJobMerge(json);
			expect(param.asset).toBe(100);
			expect(param.schedule).toBe(50);
			expect(param.name).toBe("Oil Change");
			expect(param.notes).toBe("Changed oil and filter");
			expect(param.status).toBe(MaintenanceJobStatus.completed);
			expect(param.created).toBeInstanceOf(Date);
			expect(param.completed).toBeInstanceOf(Date);
			expect(param.odometer).toBe(50000.0);
			expect(param.engineHours).toBe(1200.5);
			expect(param.garage).toBe("Quick Lube");
			expect(param.duration).toBeInstanceOf(TimeSpan);
			expect(param.cost).toBe(75.50);
			expect(param.reference).toBe("WO-12345");
			expect(param.technician).toBe("John Smith");
			expect(param.pictures).toEqual([1, 2, 3]);
		});

		it('should create instance with update data including id', () => {
			const json: JsonObject = {
				id: 999,
				status: MaintenanceJobStatus.inProgress,
				cost: 100.00
			};
			const param = new ParamMaintenanceJobMerge(json);
			expect(param.id).toBe(999);
			expect(param.status).toBe(MaintenanceJobStatus.inProgress);
			expect(param.cost).toBe(100.00);
		});

		it('should handle minimum required fields', () => {
			const json: JsonObject = {
				asset: 200,
				name: "Tire Rotation"
			};
			const param = new ParamMaintenanceJobMerge(json);
			expect(param.asset).toBe(200);
			expect(param.name).toBe("Tire Rotation");
		});
	});

	describe('toJSON', () => {
		it('should serialize new maintenance job with required fields', () => {
			const param = new ParamMaintenanceJobMerge();
			param.asset = 300;
			param.name = "Brake Inspection";
			param.status = MaintenanceJobStatus.scheduled;

			const json = param.toJSON();
			expect(json.asset).toBe(300);
			expect(json.name).toBe("Brake Inspection");
			expect(json.status).toBe(MaintenanceJobStatus.scheduled);
			expect(json.id).toBeUndefined();
		});

		it('should serialize update with id and version', () => {
			const param = new ParamMaintenanceJobMerge();
			param.id = 555;
			param.v = [1, 2, 3];
			param.status = MaintenanceJobStatus.completed;
			param.cost = 150.00;

			const json = param.toJSON();
			expect(json.id).toBe(555);
			expect(json.v).toEqual([1, 2, 3]);
			expect(json.status).toBe(MaintenanceJobStatus.completed);
			expect(json.cost).toBe(150.00);
			expect(json.asset).toBeUndefined();
		});

		it('should serialize all optional fields when present', () => {
			const param = new ParamMaintenanceJobMerge();
			param.asset = 400;
			param.schedule = 75;
			param.name = "Full Service";
			param.notes = "Complete maintenance";
			param.status = MaintenanceJobStatus.completed;
			param.created = new Date("2024-01-15T10:00:00Z");
			param.completed = new Date("2024-01-15T14:00:00Z");
			param.odometer = 60000.0;
			param.engineHours = 1500.0;
			param.garage = "Premium Auto";
			param.duration = new TimeSpan("04:00:00");
			param.cost = 250.00;
			param.reference = "WO-99999";
			param.technician = "Jane Doe";
			param.pictures = [10, 20, 30];

			const json = param.toJSON();
			expect(json.asset).toBe(400);
			expect(json.schedule).toBe(75);
			expect(json.name).toBe("Full Service");
			expect(json.notes).toBe("Complete maintenance");
			expect(json.status).toBe(MaintenanceJobStatus.completed);
			expect(json.created).toBeDefined();
			expect(json.completed).toBeDefined();
			expect(json.odometer).toBe(60000.0);
			expect(json.engineHours).toBe(1500.0);
			expect(json.garage).toBe("Premium Auto");
			expect(json.duration).toBeDefined();
			expect(json.cost).toBe(250.00);
			expect(json.reference).toBe("WO-99999");
			expect(json.technician).toBe("Jane Doe");
			expect(json.pictures).toEqual([10, 20, 30]);
		});

		it('should not serialize empty or null optional fields', () => {
			const param = new ParamMaintenanceJobMerge();
			param.asset = 500;
			param.name = "Basic Service";

			const json = param.toJSON();
			expect(json.asset).toBe(500);
			expect(json.name).toBe("Basic Service");
			expect(json.schedule).toBeUndefined();
			expect(json.notes).toBeUndefined();
			expect(json.status).toBeUndefined();
			expect(json.created).toBeUndefined();
			expect(json.completed).toBeUndefined();
			expect(json.odometer).toBeUndefined();
			expect(json.engineHours).toBeUndefined();
			expect(json.garage).toBeUndefined();
			expect(json.duration).toBeUndefined();
			expect(json.cost).toBeUndefined();
			expect(json.reference).toBeUndefined();
			expect(json.technician).toBeUndefined();
			expect(json.pictures).toBeUndefined();
		});

		it('should handle different maintenance job statuses', () => {
			const param = new ParamMaintenanceJobMerge();
			param.asset = 600;
			param.name = "Inspection";
			param.status = MaintenanceJobStatus.cancelled;

			const json = param.toJSON();
			expect(json.status).toBe(MaintenanceJobStatus.cancelled);
		});

		it('should handle date serialization', () => {
			const param = new ParamMaintenanceJobMerge();
			param.asset = 700;
			param.name = "Service";
			param.created = new Date("2024-06-15T08:00:00Z");
			param.completed = new Date("2024-06-15T12:00:00Z");

			const json = param.toJSON();
			expect(json.created).toBe("2024-06-15T08:00:00.000Z");
			expect(json.completed).toBe("2024-06-15T12:00:00.000Z");
		});

		it('should handle timespan serialization', () => {
			const param = new ParamMaintenanceJobMerge();
			param.asset = 800;
			param.name = "Quick Service";
			param.duration = new TimeSpan("02:30:00");

			const json = param.toJSON();
			expect(json.duration).toBeDefined();
		});
	});
});