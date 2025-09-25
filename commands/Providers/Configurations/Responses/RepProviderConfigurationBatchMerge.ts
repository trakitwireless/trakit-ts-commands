import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * 
 **/
export class RepProviderConfigurationBatchMerge extends Reply {
	/**
	 * 
	 **/
	providerConfigurations: ContentIdCompany[] | nothing;
	
	constructor(json: any) {
		super(json);
		this.providerConfigurations = json?.providerConfigurations?.map((v: any) => ContentIdCompany.fromJSON(v));
	}
}