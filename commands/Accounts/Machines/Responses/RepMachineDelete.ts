import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link machine}.
 **/
export class RepMachineDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Machine}.
	 **/
	machine: ContentIdDeleted | nothing;

	constructor(json: any) {
		super(json);
		this.machine = ContentIdDeleted.fromJSON(json?.machine);
	}
}