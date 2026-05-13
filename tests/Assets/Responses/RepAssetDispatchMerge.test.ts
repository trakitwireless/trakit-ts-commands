import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentIdCompany } from "../../../src/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../src/API/Responses/Reply";
import { RepAssetDispatchMerge } from "../../../src/Assets/Responses/RepAssetDispatchMerge";

describe('RepAssetDispatchMerge', () => {
	it('should create instance with asset data', () => {
		const json: JsonObject = {
			asset: {
				id: 555,
				company: 100
			}
		};
		const reply = new RepAssetDispatchMerge(json);
		expect(reply).toBeInstanceOf(RepAssetDispatchMerge);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.asset).toBeInstanceOf(ContentIdCompany);
		expect(reply.asset!.id).toBe(555);
		expect(reply.asset!.company).toBe(100);
	});

	it('should handle missing asset', () => {
		const json: JsonObject = {};
		const reply = new RepAssetDispatchMerge(json);
		expect(reply.asset).toBeUndefined();
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			asset: {
				id: 555,
				company: 100
			}
		};
		const reply = new RepAssetDispatchMerge(json);
		const output = reply.toJSON();
		expect(output.asset).toBeDefined();
	});
});
