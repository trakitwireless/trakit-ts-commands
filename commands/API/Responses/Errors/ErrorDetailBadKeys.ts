import { ErrorDetailBadBase } from "./ErrorDetailBadBase";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * These details contain a list of bad keys, labels or tags, or parameter names that caused the failure.
 **/
export class ErrorDetailBadKeys extends ErrorDetailBadBase<string> {
	override get kind() { return ErrorDetailType.badKeys; }

	constructor(json: JsonObject) {
		super(json);
	}
}