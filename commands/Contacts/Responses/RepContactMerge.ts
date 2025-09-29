import { nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link contact}.
 **/
export class RepContactMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	contact: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.contact = ContentIdCompany.fromJSON(json?.contact);
	}
}