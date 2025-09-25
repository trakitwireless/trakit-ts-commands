import { ContentIdCompany } from "../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link place}.
 */
export class RepPlaceMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 */
	place: ContentIdCompany | nothing;

	constructor(json?: any) {
		super(json);
		this.place = ContentIdCompany.fromJSON(json?.place);
	}
}