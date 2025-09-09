import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the batch merge of user groups.
 **/
export class RepUserGroupBatchMerge extends Reply {
	/**
	 * The list of user groups to be merged.
	 **/
	userGroups: ContentIdCompany[];

	constructor(json?: any) {
		super(json);
		this.userGroups = (json?.["userGroups"] || []).map((ug: any) => new ContentIdCompany(ug));
	}
}