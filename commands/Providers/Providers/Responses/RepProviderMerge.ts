import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdendifierCompany } from "../../../API/Responses/Content/ContentIdendifierCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link provider}.
 **/
export class RepProviderMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	provider: ContentIdendifierCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.provider = ContentIdendifierCompany.fromJSON(json?.provider as JsonObject);
	}
}