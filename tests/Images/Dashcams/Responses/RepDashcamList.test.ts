import { describe, expect, test } from "vitest";
import { RepDashcamList, RepDashcamListByCompany } from "../../../../src/Images/Dashcams/Responses/RepDashcamList";
import { Dashcam } from "@trakit/objects";

describe("RepDashcamList", () => {
	test("constructor creates instance with dashcams", () => {
		const dashcam1 = new Dashcam({ guid: "guid-1", companyId: 123n });
		const dashcam2 = new Dashcam({ guid: "guid-2", companyId: 123n });
		const reply = new RepDashcamList({ dashcams: [dashcam1, dashcam2] });
		expect(reply.dashcams).toHaveLength(2);
		expect(reply.dashcams?.[0]).toBeInstanceOf(Dashcam);
		expect(reply.dashcams?.[0].guid).toBe("guid-1");
	});

	test("constructor creates instance with JSON", () => {
		const reply = new RepDashcamList({
			dashcams: [
				{ guid: "json-guid-1", companyId: 456n },
				{ guid: "json-guid-2", companyId: 456n }
			]
		});
		expect(reply.dashcams).toHaveLength(2);
		expect(reply.dashcams?.[0]).toBeInstanceOf(Dashcam);
		expect(reply.dashcams?.[0].guid).toBe("json-guid-1");
	});

	test("constructor creates instance without dashcams", () => {
		const reply = new RepDashcamList({});
		expect(reply.dashcams).toBeUndefined();
	});

	test("getList returns dashcams array", () => {
		const dashcam = new Dashcam({ guid: "list-guid", companyId: 789n });
		const reply = new RepDashcamList({ dashcams: [dashcam] });
		expect(reply.getList()).toHaveLength(1);
		expect(reply.getList()[0]).toBe(dashcam);
	});
});

describe("RepDashcamListByCompany", () => {
	test("constructor creates instance with dashcams and company", () => {
		const reply = new RepDashcamListByCompany({
			dashcams: [
				{ guid: "guid-1", companyId: 123n },
				{ guid: "guid-2", companyId: 123n }
			],
			company: { id: 123n }
		});
		expect(reply.dashcams).toHaveLength(2);
		expect(reply.company?.id).toBe(123n);
	});

	test("getCompanyId returns company id", () => {
		const reply = new RepDashcamListByCompany({
			dashcams: [],
			company: { id: 999n }
		});
		expect(reply.getCompanyId()).toBe(999n);
	});
});
