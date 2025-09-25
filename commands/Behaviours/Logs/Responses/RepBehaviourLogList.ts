import { BehaviourLog, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentId } from "../../../API/Responses/Content/ContentId";

/**
 * A container for the requested {@link behaviourLogs}.
 **/
export abstract class RepBehaviourLogList extends Reply {
	/**
	 * The list of requested {@link BehaviourLog}s.
	 **/
	behaviourLogs: BehaviourLog[] | nothing;
	constructor(json?: any) {
		super(json);
		this.behaviourLogs = json?.behaviourLogs?.map((item: any) => new BehaviourLog(item));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepBehaviourLogListByCompany extends RepBehaviourLogList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json?: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}