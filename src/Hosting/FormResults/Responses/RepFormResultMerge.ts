import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link formResult}.
 */
export class RepFormResultMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 */
	formResult: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.formResult = ContentIdCompany.fromJSON(json?.formResult as JsonObject);
	}
}