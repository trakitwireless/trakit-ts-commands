import { JsonObject, ulong } from "@trakit/objects";
import { FormResult, nothing } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link formResult}.
 */
export class RepFormResultGet extends ReplySyncGet<FormResult> {
	/**
	 * The requested {@link FormResult}.
	 */
	formResult: FormResult | nothing;

	constructor(json: JsonObject) {
		super(json, "FormResult");
		if (json?.formResult) {
			this.formResult = new FormResult(json.formResult as JsonObject);
		}
	}
	override getObject() { return this.formResult as FormResult; }
	override getCompanyId() { return this.formResult?.companyId as ulong; }
}