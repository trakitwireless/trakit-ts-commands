import { nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { ContentIdCompany } from "../../API/Responses/Content/ContentIdCompany";

/**
 * 
 **/
export class RepCompanyBatchMerge extends Reply {
	/**
	 * 
	 **/
	companies: ContentIdCompany[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.companies = json?.companies?.map((c: any) => new ContentIdCompany(c));
	}
}