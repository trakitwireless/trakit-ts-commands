import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link behaviour}.
 */
export class RepBehaviourMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 */
	behaviour: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.behaviour = ContentIdCompany.fromJSON(json?.behaviour as JsonObject);
	}
}