import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link behaviour}.
 **/
export class RepBehaviourDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link Behaviour}.
	 **/
	behaviour: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json, "Behaviour");
		this.behaviour = ContentIdDeleted.fromJSON(json?.behaviour as JsonObject);
	}
	protected override _getKey() { return this.behaviour?.id as ulong; }
}