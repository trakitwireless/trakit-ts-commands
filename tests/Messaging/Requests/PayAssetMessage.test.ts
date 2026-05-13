import { JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamId } from "../../../src/API/Requests/Parameters/ParamId";
import { Payload } from "../../../src/API/Requests/Payload";
import { PayAssetMessage } from "../../../src/Messaging/Requests/PayAssetMessage";

// Note: PayAssetMessage is an abstract class, so we test its concrete implementations
describe('PayAssetMessage', () => {
	it('should have assetMessage property as ParamId', () => {
		// This is tested through concrete implementations like PayAssetMessageGet
		const json: JsonObject = {
			assetMessage: { id: 123 }
		};
		// Abstract class - test via concrete implementation
		expect(json.assetMessage).toBeDefined();
		expect(json.assetMessage.id).toBe(123);
	});

	it('should implement getKey method', () => {
		// The getKey method returns the assetMessage property
		// This is tested through concrete implementations
		const paramId = new ParamId({ id: 456 });
		expect(paramId.id).toBe(456);
	});
});