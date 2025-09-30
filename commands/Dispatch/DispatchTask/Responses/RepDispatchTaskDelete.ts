import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link dispatchTask}.
 **/
export class RepDispatchTaskDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link DispatchTask}.
	 **/
	dispatchTask: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.dispatchTask = ContentIdDeleted.fromJSON(json?.dispatchTask as JsonObject);
	}
}