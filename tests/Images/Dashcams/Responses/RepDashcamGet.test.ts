import { describe, expect, test } from "vitest";
import { RepDashcamGet } from "../../../../src/Images/Dashcams/Responses/RepDashcamGet";
import { Dashcam } from "@trakit/objects";

describe("RepDashcamGet", () => {
	test("constructor creates instance with dashcam", () => {
		const dashcam = new Dashcam({ guid: "test-guid-123", companyId: 456n });
		const reply = new RepDashcamGet({ dashcam });
		expect(reply.dashcam).toBeInstanceOf(Dashcam);
		expect(reply.dashcam?.guid).toBe("test-guid-123");
	});

	test("constructor creates instance with JSON", () => {
		const reply = new RepDashcamGet({
			dashcam: {
				guid: "json-guid-789",
				companyId: 111n
			}
		});
		expect(reply.dashcam).toBeInstanceOf(Dashcam);
		expect(reply.dashcam?.guid).toBe("json-guid-789");
	});

	test("constructor creates instance without dashcam", () => {
		const reply = new RepDashcamGet({});
		expect(reply.dashcam).toBeUndefined();
	});

	test("getObject returns dashcam", () => {
		const dashcam = new Dashcam({ guid: "object-guid", companyId: 222n });
		const reply = new RepDashcamGet({ dashcam });
		expect(reply.getObject()).toBe(dashcam);
	});

	test("getCompanyId returns company id", () => {
		const dashcam = new Dashcam({ guid: "company-test", companyId: 999n });
		const reply = new RepDashcamGet({ dashcam });
		expect(reply.getCompanyId()).toBe(999n);
	});
});
