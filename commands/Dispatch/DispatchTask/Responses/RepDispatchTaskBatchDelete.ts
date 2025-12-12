import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link dispatchTask}.
 **/
export class RepDispatchTaskBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link DispatchTask}.
	 **/
	dispatchTasks: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "DispatchTask");
		this.dispatchTasks = (json?.dispatchTasks as JsonObject[])?.map((dt: any) => new ContentIdDeleted(dt)) ?? [];
	}
	protected override _getKeys() { return this.dispatchTasks?.map(d => d.id) as ulong[]; }
	override getCompanyId() { return this.dispatchTasks?.[0]?.company as ulong; }
	override getResults() { return this.dispatchTasks as ContentIdDeleted[]; }
}