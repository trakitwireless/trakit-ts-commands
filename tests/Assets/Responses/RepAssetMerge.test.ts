import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentIdCompany } from "../../../commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../commands/API/Responses/Reply";
import { RepAssetMerge } from "../../../commands/Assets/Responses/RepAssetMerge";

describe('RepAssetMerge', () => {
	it('should create instance with asset data', () => {
		const json: JsonObject = {
			asset: {
				id: 555,
				company: 100
			}
		};
		const reply = new RepAssetMerge(json);
		expect(reply).toBeInstanceOf(RepAssetMerge);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.asset).toBeInstanceOf(ContentIdCompany);
		expect(reply.asset!.id).toBe(555);
		expect(reply.asset!.company).toBe(100);
	});

	it('should handle asset for create operation', () => {
		const json: JsonObject = {
			asset: {
				id: 999,
				company: 888
			}
		};
		const reply = new RepAssetMerge(json);
		expect(reply.asset!.id).toBe(999);
		expect(reply.asset!.company).toBe(888);
	});

	it('should handle asset for update operation', () => {
		const json: JsonObject = {
			asset: {
				id: 123,
				company: 456
			}
		};
		const reply = new RepAssetMerge(json);
		expect(reply.asset).toBeInstanceOf(ContentIdCompany);
		expect(reply.asset!.id).toBe(123);
		expect(reply.asset!.company).toBe(456);
	});

	it('should handle missing asset', () => {
		const json: JsonObject = {};
		const reply = new RepAssetMerge(json);
		expect(reply.asset).toBeUndefined();
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			asset: {
				id: 555,
				company: 100
			}
		};
		const reply = new RepAssetMerge(json);
		const output = reply.toJSON();
		expect(output.asset).toBeDefined();
	});
});
