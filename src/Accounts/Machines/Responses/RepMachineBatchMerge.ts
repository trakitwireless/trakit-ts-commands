import { JsonObject, nothing } from "@trakit/objects";
import { ContentKeyCompany } from "../../../API/Responses/Content/ContentKeyCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * 
 */
export class RepMachineBatchMerge extends Reply {
	/**
	 * 
	 */
	machines: ContentKeyCompany[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.machines = (json?.machines as JsonObject[])?.map((m: any) => new ContentKeyCompany(m));
	}
}