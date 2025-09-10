import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link user}.
 **/
export class RepUserMerge extends Reply {
	/**
	 * An object which contains the `id</c> and <c>company` keys when there is no error.
	 **/
	user: ContentIdCompany;

	constructor(json?: any) {
		super(json);
		this.user = new ContentIdCompany(json?.user);
	}
}