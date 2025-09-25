import { Behaviour, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentId } from "../../../API/Responses/Content/ContentId";

/**
 * A container for the requested {@link behaviours}.
 **/
export abstract class RepBehaviourList extends Reply {
	/**
	 * The list of requested {@link Behaviour}s.
	 **/
	behaviours: Behaviour[] | nothing;

	constructor(json?: any) {
		super(json);
		this.behaviours = json?.behaviours?.map((item: any) => new Behaviour(item));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepBehaviourListByCompany extends RepBehaviourList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId;

	constructor(json?: any) {
		super(json);
		this.company = new ContentId(json?.company);
	}
}