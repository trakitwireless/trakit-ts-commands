import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";

/**
 * A container for the {@link behaviour}.
 **/
export class RepBehaviourBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Behaviour}.
	 **/
	behaviours: ContentIdDeleted[] | nothing;
	
	constructor(json: any) {
		super(json);
		this.behaviours = json?.behaviours?.map((item: any) => new ContentIdDeleted(item));
	}
}