import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * 
 **/
export class RepUserBatchMerge extends Reply {
	/**
	 * 
	 **/
	users: ContentIdCompany[];

	constructor(json?: any) {
		super(json);
		this.users = (json?.users ?? []).map((u: any) => new ContentIdCompany(u));
	}
}