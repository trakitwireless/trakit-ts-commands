import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * 
 **/
export class RepUserBatchMerge extends Reply {
	/**
	 * 
	 **/
	users: ContentIdCompany[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.users = json?.users?.map((u: any) => new ContentIdCompany(u));
	}
}