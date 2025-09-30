import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * 
 **/
export class RepDocumentBatchMerge extends Reply {
	/**
	 * 
	 **/
	documents: ContentIdCompany[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.documents = (json?.documents as JsonObject[])?.map((item: any) => new ContentIdCompany(item));
	}
}