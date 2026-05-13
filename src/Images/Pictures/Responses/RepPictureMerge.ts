import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link picture}.
 */
export class RepPictureMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 */
	picture: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.picture = ContentIdCompany.fromJSON(json?.picture as JsonObject);
	}
}