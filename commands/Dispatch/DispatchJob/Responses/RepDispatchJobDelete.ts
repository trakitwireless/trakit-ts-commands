import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link dispatchJob}.
 **/
export class RepDispatchJobDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link DispatchJob}.
	 **/
	dispatchJob: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.dispatchJob = ContentIdDeleted.fromJSON(json?.dispatchJob as JsonObject);
	}
}