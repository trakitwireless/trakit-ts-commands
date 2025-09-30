import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the batch merge of user groups.
 **/
export class RepUserGroupBatchMerge extends Reply {
	/**
	 * The list of user groups to be merged.
	 **/
	userGroups: ContentIdCompany[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.userGroups = (json.userGroups as JsonObject[])?.map((ug: any) => new ContentIdCompany(ug));
	}
}