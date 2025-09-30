import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link behaviourScript}.
 **/
export class RepBehaviourScriptBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link BehaviourScript}.
	 **/
	behaviourScripts: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.behaviourScripts = (json?.behaviourScripts as JsonObject[])?.map((x: any) => new ContentIdDeleted(x));
	}
}