import { ContentKeyDeleted } from "../../../API/Responses/Content/ContentKeyDeleted";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link machine}.
 **/
export class RepMachineDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Machine}.
	 **/
	machine: ContentKeyDeleted | nothing;

	constructor(json: any) {
		super(json);
		this.machine = ContentKeyDeleted.fromJSON(json?.machine);
	}
}