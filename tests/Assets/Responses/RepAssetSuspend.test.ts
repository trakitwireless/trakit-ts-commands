import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ContentId } from "../../../commands/API/Responses/Content/ContentId";
import { Reply } from "../../../commands/API/Responses/Reply";
import { RepAssetSuspend } from "../../../commands/Assets/Responses/RepAssetSuspend";

describe('RepAssetSuspend', () => {
	it('should create instance with asset data', () => {
		const json: JsonObject = {
			asset: {
				id: 555
			}
		};
		const reply = new RepAssetSuspend(json);
		expect(reply).toBeInstanceOf(RepAssetSuspend);
		expect(reply).toBeInstanceOf(Reply);
		expect(reply.asset).toBeInstanceOf(ContentId);
		expect(reply.asset!.id).toBe(555);
	});

	it('should handle missing asset', () => {
		const json: JsonObject = {};
		const reply = new RepAssetSuspend(json);
		expect(reply.asset).toBeUndefined();
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			asset: {
				id: 555
			}
		};
		const reply = new RepAssetSuspend(json);
		const output = reply.toJSON();
		expect(output.asset).toBeDefined();
	});
});
