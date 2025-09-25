import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link user}.
 **/
export class RepUserMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	user: ContentIdCompany | nothing;

	constructor(json?: any) {
		super(json);
		this.user = ContentIdCompany.fromJSON(json?.user);
	}
}