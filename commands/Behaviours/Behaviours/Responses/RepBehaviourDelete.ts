import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link behaviour}.
 **/
export class RepBehaviourDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Behaviour}.
	 **/
	behaviour: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.behaviour = ContentIdDeleted.fromJSON(json?.behaviour);
	}
}