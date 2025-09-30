import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";

/**
 * 
 **/
export class RepProviderConfigBatchMerge extends Reply {
	/**
	 * 
	 **/
	providerConfigs: ContentIdCompany[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerConfigs = (json?.providerConfigs as JsonObject[])?.map((v: any) => new ContentIdCompany(v));
	}
}