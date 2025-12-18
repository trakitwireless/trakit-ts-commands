import { JsonObject, MaintenanceSchedule } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentId } from "../../../../commands/API/Responses/Content/ContentId";
import { Reply } from "../../../../commands/API/Responses/Reply";
import { RepMaintenanceScheduleListByCompany } from "../../../../commands/Maintenance/Schedules/Responses/RepMaintenanceScheduleList";

describe('RepMaintenanceScheduleListByCompany', () => {
	it('should create instance with empty maintenanceSchedules array', () => {
		const json: JsonObject = {
			maintenanceSchedules: [],
			company: { id: 100 }
		};
		const reply = new RepMaintenanceScheduleListByCompany(json);
		expect(reply).toBeInstanceOf(RepMaintenanceScheduleListByCompany);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.maintenanceSchedules).toEqual([]);
		expect(reply.company).toBeInstanceOf(ContentId);
	});

	it('should create instance with maintenanceSchedules data', () => {
		const json: JsonObject = {
			maintenanceSchedules: [
				{ id: 111, companyId: 100, name: "Weekly Check", recurDays: 7 },
				{ id: 222, companyId: 100, name: "Monthly Service", recurDays: 30 },
				{ id: 333, companyId: 100, name: "Quarterly Inspection", recurDays: 90 }
			],
			company: { id: 100 }
		};
		const reply = new RepMaintenanceScheduleListByCompany(json);
		expect(reply.maintenanceSchedules).toHaveLength(3);
		expect(reply.maintenanceSchedules![0]).toBeInstanceOf(MaintenanceSchedule);
		expect(reply.maintenanceSchedules![0].id).toBe(111);
		expect(reply.maintenanceSchedules![0].name).toBe("Weekly Check");
		expect(reply.maintenanceSchedules![1].id).toBe(222);
		expect(reply.maintenanceSchedules![2].id).toBe(333);
	});

	it('should implement getList method', () => {
		const json: JsonObject = {
			maintenanceSchedules: [
				{ id: 111, companyId: 100, name: "Schedule 1" },
				{ id: 222, companyId: 100, name: "Schedule 2" }
			],
			company: { id: 100 }
		};
		const reply = new RepMaintenanceScheduleListByCompany(json);
		const list = reply.getList();
		expect(list).toHaveLength(2);
		expect(list![0]).toBeInstanceOf(MaintenanceSchedule);
	});

	it('should implement getCompanyId method', () => {
		const json: JsonObject = {
			maintenanceSchedules: [],
			company: { id: 999 }
		};
		const reply = new RepMaintenanceScheduleListByCompany(json);
		expect(reply.getCompanyId()).toBe(999);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			maintenanceSchedules: [
				{ id: 111, companyId: 100, name: "Weekly Check", recurDays: 7 },
				{ id: 222, companyId: 100, name: "Monthly Service", recurDays: 30 }
			],
			company: { id: 100 }
		};
		const reply = new RepMaintenanceScheduleListByCompany(json);
		const output = reply.toJSON();
		expect(output.maintenanceSchedules).toBeDefined();
		expect(output.maintenanceSchedules).toHaveLength(2);
		expect(output.maintenanceSchedules[0].id).toBe(111);
		expect(output.maintenanceSchedules[0].name).toBe("Weekly Check");
		expect(output.maintenanceSchedules[1].id).toBe(222);
		expect(output.company).toBeDefined();
		expect(output.company.id).toBe(100);
	});
});