import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * 
 */
export class RepFormResultBatchMerge extends Reply {
	/**
	 * 
	 */
	formResults: ContentIdCompany[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.formResults = (json?.formResults as JsonObject[])?.map((item: any) => new ContentIdCompany(item));
	}
}