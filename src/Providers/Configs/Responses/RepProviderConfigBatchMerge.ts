import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * 
 */
export class RepProviderConfigBatchMerge extends Reply {
	/**
	 * 
	 */
	providerConfigs: ContentIdCompany[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerConfigs = (json?.providerConfigs as JsonObject[])?.map((v: any) => new ContentIdCompany(v));
	}
}