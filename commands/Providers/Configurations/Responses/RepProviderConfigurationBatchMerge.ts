import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * 
 **/
export class RepProviderConfigurationBatchMerge extends Reply {
	/**
	 * 
	 **/
	providerConfigurations: ContentIdCompany[] | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.providerConfigurations = (json?.providerConfigurations as JsonObject[])?.map((v: any) => new ContentIdCompany(v));
	}
}