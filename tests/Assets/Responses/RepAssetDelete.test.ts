import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentId } from "../../../src/API/Responses/Content/ContentId";
import { Reply } from "../../../src/API/Responses/Reply";
import { RepAssetDelete } from "../../../src/Assets/Responses/RepAssetDelete";

describe('RepAssetDelete', () => {
	it('should create instance with asset data', () => {
		const json: JsonObject = {
			asset: {
				id: 555
			}
		};
		const reply = new RepAssetDelete(json);
		expect(reply).toBeInstanceOf(RepAssetDelete);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.asset).toBeInstanceOf(ContentId);
		expect(reply.asset!.id).toBe(555);
	});

	it('should handle missing asset', () => {
		const json: JsonObject = {};
		const reply = new RepAssetDelete(json);
		expect(reply.asset).toBeUndefined();
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			asset: {
				id: 555
			}
		};
		const reply = new RepAssetDelete(json);
		const output = reply.toJSON();
		expect(output.asset).toBeDefined();
	});
});
