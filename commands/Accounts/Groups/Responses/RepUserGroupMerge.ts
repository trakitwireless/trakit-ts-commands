import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link userGroup}.
 **/
export class RepUserGroupMerge extends Reply {
	/**
	 * An object which contains the `id</c> and <c>company` keys when there is no error.
	 **/
	userGroup: ContentIdCompany;

	constructor(json?: any) {
		super(json);
		this.userGroup = new ContentIdCompany(json?.["userGroup"]);
	}
}