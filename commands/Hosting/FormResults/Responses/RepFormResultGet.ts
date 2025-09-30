import { JsonObject } from "@trakit/objects";
import { FormResult, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link formResult}.
 */
export class RepFormResultGet extends Reply {
	/**
	 * The requested {@link FormResult}.
	 */
	formResult: FormResult | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.formResult) {
			this.formResult = new FormResult(json.formResult as JsonObject);
		}
	}
}