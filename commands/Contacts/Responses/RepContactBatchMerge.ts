import { nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../API/Responses/Reply";

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