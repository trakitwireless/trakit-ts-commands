import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

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
		this.users = (json?.users as JsonObject[])?.map((u: any) => new ContentIdCompany(u));
	}
}