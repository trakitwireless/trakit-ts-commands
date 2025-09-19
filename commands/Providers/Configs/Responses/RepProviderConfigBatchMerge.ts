import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";

/**
 * 
 **/
export class RepProviderConfigBatchMerge extends Reply {
	/**
	 * 
	 **/
	providerConfigs: ContentIdCompany[] | nothing;

	constructor(json: any) {
		super(json);
		this.providerConfigs = json?.providerConfigs?.map((v: any) => new ContentIdCompany(v));
	}
}