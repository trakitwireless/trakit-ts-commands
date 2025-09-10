import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link machine}.
 **/
export class RepMachineDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Machine}.
	 **/
	machine: ContentIdDeleted;

	constructor(json: any) {
		super(json);
		this.machine = new ContentIdDeleted(json?.machine);
	}
}