import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link behaviourScript}.
 **/
export class RepBehaviourScriptDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link BehaviourScript}.
	 **/
	behaviourScript: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.behaviourScript = ContentIdDeleted.fromJSON(json?.behaviourScript);
	}
}