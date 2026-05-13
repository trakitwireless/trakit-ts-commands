import { JsonObject, TimeSpan } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamMergeSubscribable } from "../../../../../src/API/Requests/Parameters/ParamMergeSubscribable";
import { ParamMaintenanceScheduleMerge } from "../../../../../src/Maintenance/Schedules/Requests/Parameters/ParamMaintenanceScheduleMerge";

describe('ParamMaintenanceScheduleMerge', () => {
	describe('Constructor', () => {
		it('should create instance with empty constructor', () => {
			const param = new ParamMaintenanceScheduleMerge();
			expect(param).toBeInstanceOf(ParamMaintenanceScheduleMerge);
			expect(param).toBeInstanceOf(ParamMergeSubscribable);
		});

		it('should create instance with full JSON data for new maintenance schedule', () => {
			const json: JsonObject = {
				company: 100,
				name: "Monthly Oil Change",
				notes: "Change oil every 30 days or 5000 km",
				targets: "asset.kind == 1",
				notify: ["admin@example.com", "fleet@example.com"],
				fill: "#FF5733",
				stroke: "#C70039",
				graphic: "wrench",
				predictionDays: 14,
				recurDays: 30,
				recurDistance: 5000.0,
				recurEngineHours: 100.0,
				garage: "Quick Lube Station",
				duration: "01:30:00",
				cost: 75.50,
				reference: "SCHED-001"
			};
			const param = new ParamMaintenanceScheduleMerge(json);
			expect(param.company).toBe(100);
			expect(param.name).toBe("Monthly Oil Change");
			expect(param.notes).toBe("Change oil every 30 days or 5000 km");
			expect(param.targets).toBe("asset.kind == 1");
			expect(param.notify).toEqual(["admin@example.com", "fleet@example.com"]);
			expect(param.fill).toBe("#FF5733");
			expect(param.stroke).toBe("#C70039");
			expect(param.graphic).toBe("wrench");
			expect(param.predictionDays).toBe(14);
			expect(param.recurDays).toBe(30);
			expect(param.recurDistance).toBe(5000.0);
			expect(param.recurEngineHours).toBe(100.0);
			expect(param.garage).toBe("Quick Lube Station");
			expect(param.duration).toBeInstanceOf(TimeSpan);
			expect(param.cost).toBe(75.50);
			expect(param.reference).toBe("SCHED-001");
		});

		it('should create instance with update data including id', () => {
			const json: JsonObject = {
				id: 999,
				name: "Updated Schedule",
				recurDays: 60
			};
			const param = new ParamMaintenanceScheduleMerge(json);
			expect(param.id).toBe(999);
			expect(param.name).toBe("Updated Schedule");
			expect(param.recurDays).toBe(60);
		});

		it('should handle minimum required fields', () => {
			const json: JsonObject = {
				company: 200,
				name: "Basic Schedule"
			};
			const param = new ParamMaintenanceScheduleMerge(json);
			expect(param.company).toBe(200);
			expect(param.name).toBe("Basic Schedule");
		});
	});

	describe('toJSON', () => {
		it('should serialize new maintenance schedule with required fields', () => {
			const param = new ParamMaintenanceScheduleMerge();
			param.company = 300;
			param.name = "Weekly Check";
			param.notes = "Weekly inspection";
			param.recurDays = 7;

			const json = param.toJSON();
			expect(json.company).toBe(300);
			expect(json.name).toBe("Weekly Check");
			expect(json.notes).toBe("Weekly inspection");
			expect(json.recurDays).toBe(7);
			expect(json.id).toBeUndefined();
		});

		it('should serialize update with id and version', () => {
			const param = new ParamMaintenanceScheduleMerge();
			param.id = 555;
			param.v = [1, 2, 3];
			param.name = "Updated Name";
			param.recurDays = 45;

			const json = param.toJSON();
			expect(json.id).toBe(555);
			expect(json.v).toEqual([1, 2, 3]);
			expect(json.name).toBe("Updated Name");
			expect(json.recurDays).toBe(45);
			expect(json.company).toBeUndefined();
		});

		it('should serialize all optional fields when present', () => {
			const param = new ParamMaintenanceScheduleMerge();
			param.company = 400;
			param.name = "Complete Schedule";
			param.notes = "Full maintenance schedule";
			param.targets = "asset.type == 'truck'";
			param.notify = ["user1@example.com", "user2@example.com"];
			param.fill = "#00FF00";
			param.stroke = "#008800";
			param.graphic = "gear";
			param.predictionDays = 10;
			param.recurDays = 90;
			param.recurDistance = 15000.0;
			param.recurEngineHours = 250.0;
			param.garage = "Main Service Center";
			param.duration = new TimeSpan("02:00:00");
			param.cost = 150.00;
			param.reference = "REF-456";

			const json = param.toJSON();
			expect(json.company).toBe(400);
			expect(json.name).toBe("Complete Schedule");
			expect(json.notes).toBe("Full maintenance schedule");
			expect(json.targets).toBe("asset.type == 'truck'");
			expect(json.notify).toEqual(["user1@example.com", "user2@example.com"]);
			expect(json.fill).toBe("#00FF00");
			expect(json.stroke).toBe("#008800");
			expect(json.graphic).toBe("gear");
			expect(json.predictionDays).toBe(10);
			expect(json.recurDays).toBe(90);
			expect(json.recurDistance).toBe(15000.0);
			expect(json.recurEngineHours).toBe(250.0);
			expect(json.garage).toBe("Main Service Center");
			expect(json.duration).toBeDefined();
			expect(json.cost).toBe(150.00);
			expect(json.reference).toBe("REF-456");
		});

		it('should not serialize empty or null optional fields', () => {
			const param = new ParamMaintenanceScheduleMerge();
			param.company = 500;
			param.name = "Simple Schedule";
			param.notes = "";

			const json = param.toJSON();
			expect(json.company).toBe(500);
			expect(json.name).toBe("Simple Schedule");
			expect(json.targets).toBeUndefined();
			expect(json.notify).toBeUndefined();
			expect(json.fill).toBeUndefined();
			expect(json.stroke).toBeUndefined();
			expect(json.graphic).toBeUndefined();
			expect(json.garage).toBeUndefined();
			expect(json.duration).toBeUndefined();
			expect(json.reference).toBeUndefined();
		});

		it('should handle recurrence fields', () => {
			const param = new ParamMaintenanceScheduleMerge();
			param.company = 600;
			param.name = "Mileage Based";
			param.notes = "";
			param.recurDistance = 10000.0;

			const json = param.toJSON();
			expect(json.recurDistance).toBe(10000.0);
		});

		it('should handle timespan serialization', () => {
			const param = new ParamMaintenanceScheduleMerge();
			param.company = 700;
			param.name = "Quick Service";
			param.notes = "";
			param.duration = new TimeSpan("00:45:00");

			const json = param.toJSON();
			expect(json.duration).toBeDefined();
		});

		it('should handle notification array', () => {
			const param = new ParamMaintenanceScheduleMerge();
			param.company = 800;
			param.name = "Notification Test";
			param.notes = "";
			param.notify = ["test1@example.com", "test2@example.com", "test3@example.com"];

			const json = param.toJSON();
			expect(json.notify).toEqual(["test1@example.com", "test2@example.com", "test3@example.com"]);
		});
	});
});