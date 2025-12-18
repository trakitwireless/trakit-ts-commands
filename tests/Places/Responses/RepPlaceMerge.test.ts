import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentIdCompany } from "../../../commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../commands/API/Responses/Reply";
import { RepPlaceMerge } from "../../../commands/Places/Responses/RepPlaceMerge";

describe('RepPlaceMerge', () => {
	it('should create instance with place data', () => {
		const json: JsonObject = {
			place: {
				id: 555,
				company: 100
			}
		};
		const reply = new RepPlaceMerge(json);
		expect(reply).toBeInstanceOf(RepPlaceMerge);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.place).toBeInstanceOf(ContentIdCompany);
		expect(reply.place!.id).toBe(555);
		expect(reply.place!.company).toBe(100);
	});

	it('should handle place for create operation', () => {
		const json: JsonObject = {
			place: {
				id: 999,
				company: 888
			}
		};
		const reply = new RepPlaceMerge(json);
		expect(reply.place!.id).toBe(999);
		expect(reply.place!.company).toBe(888);
	});

	it('should handle place for update operation', () => {
		const json: JsonObject = {
			place: {
				id: 123,
				company: 456
			}
		};
		const reply = new RepPlaceMerge(json);
		expect(reply.place).toBeInstanceOf(ContentIdCompany);
		expect(reply.place!.id).toBe(123);
		expect(reply.place!.company).toBe(456);
	});

	it('should handle missing place', () => {
		const json: JsonObject = {};
		const reply = new RepPlaceMerge(json);
		expect(reply.place).toBeUndefined();
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			place: {
				id: 555,
				company: 100
			}
		};
		const reply = new RepPlaceMerge(json);
		const output = reply.toJSON();
		expect(output.place).toBeDefined();
		expect(output.place.id).toBe(555);
		expect(output.place.company).toBe(100);
	});
});