import { ulong } from "@trakit/objects";
import { ErrorDetailBadBase } from "./ErrorDetailBadBase";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * These details contain unique identifiers that caused the failure.
 **/
export class ErrorDetailBadIds extends ErrorDetailBadBase<ulong> {
	override get kind() { return ErrorDetailType.badIds; }
	
	constructor(json: any) {
		super(json);
	}
}