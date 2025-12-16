import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../API/Responses/Reply";

/**
 * 
 */
export class RepCompanyBatchMerge extends Reply {
	/**
	 * 
	 */
	companies: ContentIdCompany[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.companies = (json?.companies as JsonObject[])?.map((c: any) => new ContentIdCompany(c));
	}
}