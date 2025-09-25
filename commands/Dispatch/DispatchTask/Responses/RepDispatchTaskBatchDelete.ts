import { nothing } from "@trakit/objects";
import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link dispatchTask}.
 **/
export class RepDispatchTaskBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link DispatchTask}.
	 **/
	dispatchTasks: ContentIdDeleted[] | nothing;

	constructor(json: any) {
		super(json);
		this.dispatchTasks = json?.dispatchTasks?.map((dt: any) => new ContentIdDeleted(dt)) ?? [];
	}
}