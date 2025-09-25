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

	constructor(json: any) {
		super(json);
		this.providers = json?.providers?.map((v: any) => new ContentIdCompany(v));
	}
}