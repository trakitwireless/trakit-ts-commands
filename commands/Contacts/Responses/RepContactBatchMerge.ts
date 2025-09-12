import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * 
 **/
export class RepContactBatchMerge extends Reply {
	/**
	 * 
	 **/
	contacts: ContentIdCompany[] | nothing;

	constructor(json: any) {
		super(json);
		this.contacts = json?.contacts?.map((c: any) => new ContentIdCompany(c));
	}
}