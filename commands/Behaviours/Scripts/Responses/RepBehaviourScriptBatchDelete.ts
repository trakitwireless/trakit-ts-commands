import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link behaviourScript}.
 */
export class RepBehaviourScriptBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link BehaviourScript}.
	 */
	behaviourScripts: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "BehaviourScript");
		this.behaviourScripts = (json?.behaviourScripts as JsonObject[])?.map((x: any) => new ContentIdDeleted(x));
	}
	protected override _getKeys() { return this.behaviourScripts?.map(b => b.id) as ulong[]; }
	override getCompanyId() { return this.behaviourScripts?.[0]?.company as ulong; }
	override getResults() { return this.behaviourScripts as ContentIdDeleted[]; }
}