import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";

/**
 * A container for the {@link icon}.
 **/
export class RepIconMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	icon: ContentIdCompany | nothing;

	constructor(json: any) {
		super(json);
		this.icon = ContentIdCompany.fromJSON(json?.icon);
	}
}