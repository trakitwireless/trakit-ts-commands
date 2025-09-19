import { nothing } from "@trakit/objects";
import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * 
 **/
export class RepDocumentBatchMerge extends Reply {
	/**
	 * 
	 **/
	documents: ContentIdCompany[] | nothing;

	constructor(json: any) {
		super(json);
		this.documents = json?.documents?.map((item: any) => new ContentIdCompany(item));
	}
}