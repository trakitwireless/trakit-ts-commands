import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";

/**
 * 
 **/
export class RepProviderScriptBatchMerge extends Reply {
	/**
	 * 
	 **/
	providerScripts: ContentIdCompany[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerScripts = json?.providerScripts?.map((v: any) => new ContentIdCompany(v));
	}
}