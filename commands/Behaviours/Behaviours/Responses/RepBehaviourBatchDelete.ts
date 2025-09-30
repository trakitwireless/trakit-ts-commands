import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link behaviour}.
 **/
export class RepBehaviourBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Behaviour}.
	 **/
	behaviours: ContentIdDeleted[] | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.behaviours = (json?.behaviours as JsonObject[])?.map((item: any) => new ContentIdDeleted(item));
	}
}