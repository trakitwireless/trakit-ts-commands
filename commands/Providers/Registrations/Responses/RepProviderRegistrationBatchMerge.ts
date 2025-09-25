import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentCode } from "../../../API/Responses/Content/ContentCode";

/**
 * 
 **/
export class RepProviderRegistrationBatchMerge extends Reply {
	/**
	 * 
	 **/
	providerRegistrations: ContentCode[] | nothing;
	
	constructor(json: any) {
		super(json);
		this.providerRegistrations = json?.providerRegistrations?.map((v: any) => new ContentCode(v));
	}
}