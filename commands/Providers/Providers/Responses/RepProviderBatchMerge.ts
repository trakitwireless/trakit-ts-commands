import { JsonObject } from "@trakit/objects";
import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";

/**
 * 
 **/
export class RepProviderBatchMerge extends Reply {
	/**
	 * 
	 **/
	providers: ContentIdCompany[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providers = (json?.providers as JsonObject[])?.map((v: any) => new ContentIdCompany(v));
	}
}