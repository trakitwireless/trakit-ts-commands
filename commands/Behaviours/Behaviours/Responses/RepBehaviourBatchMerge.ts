import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * 
 */
export class RepBehaviourBatchMerge extends Reply {
	/**
	 * 
	 */
	behaviours: ContentIdCompany[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.behaviours = (json?.behaviours as JsonObject[])?.map((item: any) => new ContentIdCompany(item));
	}
}