import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link behaviour}.
 **/
export class RepBehaviourBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link Behaviour}.
	 **/
	behaviours: ContentIdDeleted[] | nothing;
	
	constructor(json: JsonObject) {
		super(json, "Behaviour");
		this.behaviours = (json?.behaviours as JsonObject[])?.map((item: any) => new ContentIdDeleted(item));
	}
	protected override _getKeys() { return this.behaviours?.map(b => b.id) as ulong[]; }
}