import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * 
 */
export class RepProviderScriptBatchMerge extends Reply {
	/**
	 * 
	 */
	providerScripts: ContentIdCompany[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerScripts = (json?.providerScripts as JsonObject[])?.map((v: any) => new ContentIdCompany(v));
	}
}