import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link dispatchJob}.
 **/
export class RepDispatchJobBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link DispatchJob}.
	 **/
	dispatchJobs: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "DispatchJob");
		this.dispatchJobs = (json?.dispatchJobs as JsonObject[])?.map((dj: any) => new ContentIdDeleted(dj));
	}
	protected override _getKeys() { return this.dispatchJobs?.map((dj) => dj.id) as ulong[]; }
}