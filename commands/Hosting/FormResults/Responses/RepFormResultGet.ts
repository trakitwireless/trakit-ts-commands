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

	constructor(json: any) {
		super(json);
		this.formResult = json?.formResult
			? new FormResult(json.formResult)
			: null;
	}
}