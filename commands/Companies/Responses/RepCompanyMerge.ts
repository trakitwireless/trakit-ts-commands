import { nothing } from "@trakit/objects";
import { ContentIdParent } from "commands/API/Responses/Content/ContentIdParent";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link company}.
 **/
export class RepCompanyMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	company: ContentIdParent | nothing;

	constructor(json: any) {
		super(json);
		this.company = ContentIdParent.fromJSON(json?.company);
	}
}