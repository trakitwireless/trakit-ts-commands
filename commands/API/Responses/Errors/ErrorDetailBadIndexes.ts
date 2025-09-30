import { JsonObject } from "@trakit/objects";
import { int } from "@trakit/objects";
import { ErrorDetailBadBase } from "./ErrorDetailBadBase";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * These details contain array indexes that caused the failure.
 **/
export class ErrorDetailBadIndexes extends ErrorDetailBadBase<int> {
    override get kind() { return ErrorDetailType.badIndexes; }

	constructor(json: JsonObject) {
		super(json);
	}
}