import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link dispatchTask}.
 **/
export class RepDispatchTaskBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link DispatchTask}.
	 **/
	dispatchTasks: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.dispatchTasks = (json?.dispatchTasks as JsonObject[])?.map((dt: any) => new ContentIdDeleted(dt)) ?? [];
	}
}