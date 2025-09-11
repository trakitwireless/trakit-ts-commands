import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link machine}.
 **/
export class RepMachineBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Machine}.
	 **/
	machines: ContentIdDeleted[] | nothing;

	constructor(json: any) {
		super(json);
		this.machines = json?.machines?.map((m: any) => new ContentIdDeleted(m));
	}
}