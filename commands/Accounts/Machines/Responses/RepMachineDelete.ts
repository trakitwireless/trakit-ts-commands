import { JsonObject, nothing } from "@trakit/objects";
import { ContentKeyDeleted } from "../../../API/Responses/Content/ContentKeyDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link machine}.
 **/
export class RepMachineDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Machine}.
	 **/
	machine: ContentKeyDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.machine = ContentKeyDeleted.fromJSON(json?.machine as JsonObject);
	}
}