import { JsonObject } from "@trakit/objects";
import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentCode } from "../../../API/Responses/Content/ContentCode";

/**
 * 
 */
export class RepProviderRegistrationBatchMerge extends Reply {
	/**
	 * 
	 */
	providerRegistrations: ContentCode[] | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.providerRegistrations = (json?.providerRegistrations as JsonObject[])?.map((v: any) => new ContentCode(v));
	}
}