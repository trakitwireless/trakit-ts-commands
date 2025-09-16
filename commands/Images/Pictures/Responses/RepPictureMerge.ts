import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdCompany } from "commands";

/**
 * A container for the {@link picture}.
 **/
export class RepPictureMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	picture: ContentIdCompany | nothing;

	constructor(json: any) {
		super(json);
		this.picture = ContentIdCompany.fromJSON(json?.picture);
	}
}