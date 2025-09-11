import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link behaviourLog}.
 **/
export class RepBehaviourLogBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link BehaviourLog}.
	 **/
	behaviourLogs: ContentIdDeleted[] | nothing;

	constructor(json?: any) {
		super(json);
		this.behaviourLogs = json?.behaviourLogs?.map((item: any) => new ContentIdDeleted(item));
	}
}