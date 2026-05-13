import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentIdDeleted } from "../../../src/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../src/API/Responses/Reply";
import { ReplySyncDelete } from "../../../src/API/Responses/ReplySyncDelete";
import { RepPlaceDelete } from "../../../src/Places/Responses/RepPlaceDelete";

describe('RepPlaceDelete', () => {
	it('should create instance with place data', () => {
		const json: JsonObject = {
			place: {
				id: 555,
				company: 100,
				deleted: true
			}
		};
		const reply = new RepPlaceDelete(json);
		expect(reply).toBeInstanceOf(RepPlaceDelete);
		expect(reply).toBeInstanceOf(ReplySyncDelete);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.place).toBeInstanceOf(ContentIdDeleted);
		expect(reply.place!.id).toBe(555);
		expect(reply.place!.company).toBe(100);
	});

	it('should implement getKey method', () => {
		const json: JsonObject = {
			place: {
				id: 777,
				company: 200,
				deleted: true
			}
		};
		const reply = new RepPlaceDelete(json);
		expect(reply.getKey()).toBe(777);
	});

	it('should implement getCompanyId method', () => {
		const json: JsonObject = {
			place: {
				id: 888,
				company: 999,
				deleted: false
			}
		};
		const reply = new RepPlaceDelete(json);
		expect(reply.getCompanyId()).toBe(999);
	});

	it('should handle place with deleted status', () => {
		const json: JsonObject = {
			place: {
				id: 111,
				company: 222,
				deleted: false
			}
		};
		const reply = new RepPlaceDelete(json);
		expect(reply.place!.deleted).toBe(false);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			place: {
				id: 555,
				company: 100,
				deleted: true
			}
		};
		const reply = new RepPlaceDelete(json);
		const output = reply.toJSON();
		expect(output.place).toBeDefined();
		expect(output.place.id).toBe(555);
		expect(output.place.company).toBe(100);
		expect(output.place.deleted).toBe(true);
	});
});