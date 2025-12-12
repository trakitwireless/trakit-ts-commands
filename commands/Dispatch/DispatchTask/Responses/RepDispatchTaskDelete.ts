import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link dispatchTask}.
 **/
export class RepDispatchTaskDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link DispatchTask}.
	 **/
	dispatchTask: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json, "DispatchTask");
		this.dispatchTask = ContentIdDeleted.fromJSON(json?.dispatchTask as JsonObject);
	}
	override getKey() { return this.dispatchTask?.id as ulong; }
	override getCompanyId() { return this.dispatchTask?.company as ulong; }
}