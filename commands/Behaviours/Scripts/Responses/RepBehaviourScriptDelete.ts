import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link behaviourScript}.
 **/
export class RepBehaviourScriptDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link BehaviourScript}.
	 **/
	behaviourScript: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json, "BehaviourScript");
		this.behaviourScript = ContentIdDeleted.fromJSON(json?.behaviourScript as JsonObject);
	}
	override getKey() { return this.behaviourScript?.id as ulong; }
	override getCompanyId() { return this.behaviourScript?.company as ulong; }
}