import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link machine}.
 **/
export class RepMachineBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Machine}.
	 **/
	machines: ContentIdDeleted[];

	constructor(json: any) {
		super(json);
		this.machines = json?.machines.map((m: any) => new ContentIdDeleted(m)) ?? [];
	}
}